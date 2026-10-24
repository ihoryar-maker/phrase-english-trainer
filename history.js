/* Detailed attempts live separately from aggregate scores so a history-storage
   failure cannot prevent saving the existing learning progress. No network. */
(() => {
  let database, failed = false, pending = Promise.resolve();
  function open() {
    if (!database) database = new Promise((resolve, reject) => {
      if (!window.indexedDB) { reject(new Error('History storage unavailable')); return; }
      const request = window.indexedDB.open('phrase-history-v1', 1);
      request.onupgradeneeded = () => request.result.createObjectStore('attempts', {keyPath: 'id'});
      request.onsuccess = () => {
        const db = request.result;
        db.onversionchange = () => { db.close(); database = undefined; };
        resolve(db);
      };
      request.onerror = () => { database = undefined; reject(request.error); };
      request.onblocked = () => { database = undefined; reject(new Error('History storage blocked')); };
    });
    return database;
  }
  async function transaction(mode, work) {
    const db = await open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('attempts', mode);
      let request;
      tx.oncomplete = () => resolve(request?.result);
      tx.onabort = tx.onerror = () => reject(tx.error || new Error('History transaction failed'));
      try { request = work(tx.objectStore('attempts')); }
      catch (error) { tx.abort(); reject(error); }
    });
  }
  function write(work) {
    const result = pending.then(async () => {
      try { await transaction('readwrite', work); failed = false; return true; }
      catch (_) { failed = true; return false; }
    });
    pending = result;
    return result;
  }
  const text = (value, max = 4000) => typeof value === 'string' && value.length <= max;
  function validate(attempts) {
    if (!Array.isArray(attempts)) return false;
    const ids = new Set();
    return attempts.every(a => {
      if (!a || !text(a.id, 200) || !a.id || ids.has(a.id)) return false;
      ids.add(a.id);
      return text(a.questionId, 200) && !!a.questionId && text(a.question) && text(a.solution)
        && text(a.category, 100) && text(a.pattern, 300) && text(a.mode, 50)
        && Number.isFinite(a.at) && a.at > 0 && a.at <= 8640000000000000
        && /^\d{4}-\d{2}-\d{2}$/.test(a.day) && typeof a.hinted === 'boolean'
        && Number.isFinite(a.timeMs) && a.timeMs >= 0
        && (a.kind === 'skip' ? a.answer === null && a.correct === null
          : a.kind === 'answer' && text(a.answer) && typeof a.correct === 'boolean');
    });
  }
  function make(q, {answer = null, correct = null, hinted = false, mode = 'mixed', timeMs = 0, kind = 'answer'}) {
    const at = Date.now(), date = new Date(at);
    return {id: window.crypto.randomUUID(), at,
      day: `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`,
      questionId: q.id, question: q.question, solution: window.PhraseLearning.solution(q),
      category: q.category, pattern: q.pattern, mode, kind, answer, correct, hinted,
      timeMs: Math.max(0, Math.round(timeMs))};
  }
  async function all() {
    await pending;
    try { const items = await transaction('readonly', store => store.getAll()); failed = false; return items; }
    catch (_) { failed = true; return null; }
  }
  function summarize(attempts) {
    const scored = attempts.filter(a => a.kind === 'answer' && !a.hinted);
    const right = scored.filter(a => a.correct).length;
    const groups = new Map(), latest = new Map();
    for (const a of scored) {
      if (!latest.has(a.questionId) || latest.get(a.questionId).at < a.at) latest.set(a.questionId, a);
      if (a.correct) continue;
      const key = JSON.stringify([a.questionId, a.answer]);
      const group = groups.get(key) || {attempt: a, count: 0};
      group.count++;
      if (a.at > group.attempt.at) group.attempt = a;
      groups.set(key, group);
    }
    return {total: attempts.length, scored: scored.length, right,
      accuracy: scored.length ? Math.round(100 * right / scored.length) : null,
      hinted: attempts.filter(a => a.kind === 'answer' && a.hinted).length,
      skipped: attempts.filter(a => a.kind === 'skip').length,
      mistakes: [...groups.values()].map(g => ({...g, lastCorrect: latest.get(g.attempt.questionId).correct}))
        .sort((a,b) => b.count-a.count || b.attempt.at-a.at)};
  }
  window.PhraseHistory = {make, validate, summarize, all, get failed() {return failed;},
    add(attempt) {return validate([attempt]) ? write(store => store.put(attempt)) : Promise.resolve(false);},
    replace(attempts) {
      if (!validate(attempts)) return Promise.resolve(false);
      return write(store => {store.clear(); for (const attempt of attempts) store.put(attempt);});
    },
    clear() {return write(store => store.clear());}
  };
})();
