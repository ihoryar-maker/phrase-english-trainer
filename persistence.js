/* Versioned aggregate state. Invalid input is never silently overwritten. */
(() => {
  const key = 'phrase-progress-v1';
  const day = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  const dateKey = s => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && day(new Date(s+'T12:00:00')) === s;
  const number = n => Number.isSafeInteger(n) && n >= 0;
  const object = o => o && typeof o === 'object' && !Array.isArray(o);
  function safe(value, depth=0) {
    if (depth > 16) return false;
    if (!value || typeof value !== 'object') return typeof value !== 'number' || Number.isFinite(value);
    return Object.entries(value).every(([k,v]) => !['__proto__','prototype','constructor'].includes(k) && safe(v,depth+1));
  }
  const fresh = () => ({version:2, answers:0, correct:0, streak:0, best:0, reviewed:0, patterns:{}, questions:{}, days:{}, saved:[], theme:'light', evidence:{}, errors:{}, remediation:[], settings:{production:false,length:10,level:0,topic:'simple-continuous',daily:'adaptive'}});
  function validate(raw) {
    if (!object(raw) || !safe(raw) || ![1,2].includes(raw.version)) return false;
    if (['answers','correct','streak','best','reviewed'].some(k=>!number(raw[k])) || raw.correct>raw.answers) return false;
    if (!['patterns','questions','days'].every(k=>object(raw[k])) || !Array.isArray(raw.saved) || raw.saved.some(id=>typeof id!=='string'||id.length>200)) return false;
    if (raw.theme && !['light','dark'].includes(raw.theme)) return false;
    if (Object.values(raw.patterns).some(p=>!object(p)||['correct','wrong','run','due'].some(k=>!number(p[k])) || (p.dueDay!==undefined&&!dateKey(p.dueDay)))) return false;
    if (Object.values(raw.questions).some(q=>!object(q)||!number(q.correct)||!number(q.wrong)||!Array.isArray(q.wrongDays)||!q.wrongDays.every(dateKey))) return false;
    if (Object.entries(raw.days).some(([k,d])=>!dateKey(k)||!object(d)||!number(d.answers)||!number(d.correct)||d.correct>d.answers)) return false;
    {
      if (raw.settings!==undefined && (!object(raw.settings)||typeof raw.settings.production!=='boolean'||![5,10,20].includes(raw.settings.length)||![0,1,2,3].includes(raw.settings.level)||typeof raw.settings.topic!=='string'||!['adaptive','classic'].includes(raw.settings.daily))) return false;
      if (raw.evidence!==undefined && (!object(raw.evidence)||Object.values(raw.evidence).some(e=>!object(e)||Object.entries(e).some(([lane,v])=>!['recognition','construction','questions','recall','simple','continuous'].includes(lane)||!object(v)||!number(v.correct)||!number(v.total)||v.correct>v.total||!Array.isArray(v.days)||!v.days.every(dateKey)||!Array.isArray(v.ids)||v.ids.some(id=>typeof id!=='string'))))) return false;
      if (raw.errors!==undefined && (!object(raw.errors)||Object.values(raw.errors).some(e=>!object(e)||!number(e.count)||!dateKey(e.lastDay)))) return false;
      if (raw.remediation!==undefined && (!Array.isArray(raw.remediation)||raw.remediation.some(r=>!object(r)||typeof r.id!=='string'||!dateKey(r.day)||typeof r.stage!=='string'))) return false;
    }
    return true;
  }
  function migrate(raw) {
    if (!validate(raw)) throw Error('Invalid progress');
    const state = {...fresh(),...JSON.parse(JSON.stringify(raw)),version:2};
    delete state.history;
    return state;
  }
  function load(storage) {
    let raw;
    try {
      raw=storage.getItem(key);
      if(raw===null)return {state:fresh(),blocked:false};
      const parsed=JSON.parse(raw), state=migrate(parsed);
      if(parsed.version===1 && storage.getItem(key+'-backup')===null) storage.setItem(key+'-backup',raw);
      return {state,blocked:false};
    } catch (_) {return {state:fresh(),blocked:true};}
  }
  window.PhraseStore={key,day,dateKey,fresh,validate,migrate,load,safe};
})();
