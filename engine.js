/* Persistence, answer normalization and spaced repetition are independent of the UI. */
(function () {
  const KEY = 'phrase-progress-v1';
  const fresh = () => ({version:1, answers:0, correct:0, streak:0, best:0, reviewed:0, patterns:{}, questions:{}, days:{}, saved:[], theme:'light'});
  let storageError = false;
  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY));
      if (!raw || raw.version !== 1) return fresh();
      const state = {...fresh(), ...raw};
      for (const k of ['patterns','questions','days']) if (!state[k] || typeof state[k] !== 'object' || Array.isArray(state[k])) return fresh();
      if (!Array.isArray(state.saved) || ['answers','correct','streak','best','reviewed'].some(k=>!Number.isFinite(state[k]) || state[k]<0)) return fresh();
      return state;
    } catch (_) { storageError = true; return fresh(); }
  }
  let state = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); storageError = false; } catch (_) { storageError = true; } }
  const day = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  const normalize = s => String(s).toLowerCase().replace(/[’‘]/g,"'").replace(/\bit's been\b/g,'it has been').replace(/\bit's\b/g,'it is').replace(/\bi'm\b/g,'i am').replace(/\bcan't\b/g,'cannot').replace(/\bwon't\b/g,'will not').replace(/n't\b/g,' not').replace(/\blet's\b/g,'let us').replace(/\b(you|we|they)'re\b/g,'$1 are').replace(/\b(he|she)'s\b/g,'$1 is').replace(/[.,!?;:]/g,'').replace(/\s+/g,' ').trim();
  function validate(q, answer) { return (q.alternatives || [q.correctAnswer]).some(a => normalize(a) === normalize(answer)); }
  function record(q, correct, review=false) {
    const now = Date.now(), today = day();
    const p = state.patterns[q.pattern] ||= {correct:0,wrong:0,run:0,due:0};
    const item = state.questions[q.id] ||= {correct:0,wrong:0,wrongDays:[]};
    const d = state.days[today] ||= {answers:0,correct:0};
    state.answers++; d.answers++;
    if (correct) {state.correct++;d.correct++;state.streak++;p.correct++;p.run++;item.correct++;}
    else {state.streak=0;p.wrong++;p.run=0;item.wrong++;if (!item.wrongDays.includes(today)) item.wrongDays.push(today);}
    state.best=Math.max(state.best,state.streak);
    if (review && correct) state.reviewed++;
    p.due = now + (correct ? [0,10*60000,86400000,3*86400000,7*86400000,14*86400000,30*86400000][Math.min(p.run,6)] : 45000);
    save();
  }
  function weak(q) {const p=state.patterns[q.pattern];return !!p && p.wrong>0 && p.run<3;}
  // Keep recall exercises and their history intact, but exclude them from every active session.
  function isChoiceExercise(q) {
    return ['contrast','multiple-choice','context','mistake'].includes(q.type)
      && Array.isArray(q.options) && q.options.length >= 2;
  }
  function pool(mode, category='', pattern='', today=false) {
    return EXERCISES.filter(q => isChoiceExercise(q) && (!category || q.category===category) && (!pattern || q.pattern===pattern) && (
      mode==='contrast' || mode==='rapid' ? q.type==='contrast' :
      mode==='real' ? ['context','contrast'].includes(q.type) :
      mode==='weak' ? weak(q) :
      mode==='review' ? (state.questions[q.id]?.wrong>0 && (!today || state.questions[q.id].wrongDays.includes(day()))) :
      mode==='saved' ? state.saved.includes(q.id) : true));
  }
  function pick(items, recent=[]) {
    if (!items.length) return null;
    let candidates=items.filter(q=>!recent.slice(-5).includes(q.id));
    if (!candidates.length) candidates=items.filter(q=>q.id!==recent.at(-1));
    if (!candidates.length) candidates=items;
    const weights=candidates.map(q=>{const p=state.patterns[q.pattern]; if(!p)return 3;return (1+Math.min(p.wrong,8)*1.5)/(1+p.run*1.5)*(p.due<=Date.now()?4:.25);});
    let roll=Math.random()*weights.reduce((a,b)=>a+b,0);
    return candidates.find((_,i)=>(roll-=weights[i])<=0)||candidates.at(-1);
  }
  function stats() {return {accuracy:state.answers?Math.round(state.correct/state.answers*100):0, wrong:state.answers-state.correct, mastered:Object.values(state.patterns).filter(p=>p.run>=3).length, weak:Object.values(state.patterns).filter(p=>p.wrong>0 && p.run<3).length};}
  window.Trainer={get state(){return state},get storageError(){return storageError},save,day,normalize,validate,record,pool,pick,stats,weak,reset(){state=fresh();save();},setTheme(theme){state.theme=theme;save();},toggleSaved(id){state.saved=state.saved.includes(id)?state.saved.filter(x=>x!==id):[...state.saved,id];save();}};
})();
