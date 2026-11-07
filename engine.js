/* Selection and learning evidence are independent of rendering. */
(() => {
  const Store=window.PhraseStore, Grade=window.PhraseGrading;
  const loaded=Store.load(localStorage);
  let state=loaded.state, blocked=loaded.blocked, storageError=blocked;
  const day=(date=new Date())=>Store.day(date);
  function save() {
    if(blocked)return false;
    try {localStorage.setItem(Store.key,JSON.stringify(state));storageError=false;return true;}
    catch(_){storageError=true;return false;}
  }
  function afterDays(today,n) {const d=new Date(today+'T12:00:00');d.setDate(d.getDate()+n);return day(d);}
  const choice=q=>Array.isArray(q.options)&&q.options.length>=2;
  const skill=q=>q.skillId||q.pattern;
  const lane=q=>choice(q)?'recognition':q.type==='translation'?'recall':'construction';
  function evidence(q,name,correct,today) {
    const e=state.evidence[skill(q)] ||= {};
    const v=e[name] ||= {correct:0,total:0,days:[],ids:[]};
    v.total++;
    if(correct){v.correct++;if(!v.days.includes(today))v.days.push(today);if(!v.ids.includes(q.id))v.ids.push(q.id);}
  }
  function mastery(key) {
    const e=state.evidence[key]||{},r=e.recognition;
    const recognized=!!r && r.correct>=3 && r.correct/r.total>=.8 && r.ids.length>=2;
    const days=new Set(Object.values(e).flatMap(v=>v.days));
    const mastered=recognized && state.settings.production && (e.construction?.correct||0)>0 && days.size>=2 && (e.recall?.correct||0)>0;
    return mastered?'mastered':recognized?'recognized':'learning';
  }
  function totals(name) {
    const values=Object.values(state.evidence).map(e=>e[name]).filter(Boolean);
    const total=values.reduce((n,v)=>n+v.total,0),correct=values.reduce((n,v)=>n+v.correct,0);
    return {total,correct,accuracy:total?Math.round(correct/total*100):null};
  }
  function level() {
    if(state.settings.level)return state.settings.level;
    const r=totals('recognition'), days=new Set(Object.values(state.evidence).flatMap(e=>e.recognition?.days||[])).size;
    return r.total>=60&&r.accuracy>=85&&days>=4?3:r.total>=20&&r.accuracy>=75&&days>=2?2:1;
  }
  function whReady() {const v=totals('questions');return v.total>=8&&v.accuracy>=80;}
  function weak(q){const p=state.patterns[q.pattern];return !!p&&p.wrong>0&&p.run<3;}
  function eligible(q,manual=false) {
    return (state.settings.production||choice(q)) && (q.difficulty||1)<=level() && (manual||!q.skillId?.startsWith('wh-')||whReady());
  }
  function pool(mode,category='',pattern='',today=false) {
    const manual=state.settings.level>0;
    return EXERCISES.filter(q=>eligible(q,manual)&&(!category||q.category===category)&&(!pattern||q.pattern===pattern)&&(
      mode==='contrast'||mode==='rapid'?q.type==='contrast':
      mode==='real'?['context','contrast'].includes(q.type)||q.category==='integrated':
      mode==='weak'?weak(q):mode==='review'?(state.questions[q.id]?.wrong>0&&(!today||state.questions[q.id].wrongDays.includes(day()))):
      mode==='saved'?state.saved.includes(q.id):mode==='transform'?q.type==='transform':
      mode==='recall'?q.type==='translation':mode==='complete'?['fill','chunk'].includes(q.type):
      mode==='lab'?!!q.grammar?.subject&&q.grammar?.form==='statement':
      mode==='questions'?q.category==='questions':mode==='ing'?q.category==='ing':
      mode==='tenses'?['simple-continuous','present-continuous'].includes(q.category):true));
  }
  function pick(items,recent=[],random=Math.random,now=Date.now()) {
    const candidates=items.filter(q=>!recent.includes(q.id));
    if(!candidates.length)return null;
    const weights=candidates.map(q=>{const p=state.patterns[q.pattern];return p?(1+Math.min(p.wrong,8)*1.5)/(1+p.run)*((p.due||0)<=now?4:.25):3;});
    let roll=random()*weights.reduce((a,b)=>a+b,0);
    return candidates.find((_,i)=>(roll-=weights[i])<=0)||candidates.at(-1);
  }
  function remediate(q,today) {
    const related=EXERCISES.filter(x=>x.id!==q.id&&eligible(x)&&((q.family&&x.family===q.family)||skill(x)===skill(q)||x.pattern===q.pattern)).sort((a,b)=>Number(skill(b)===skill(q))-Number(skill(a)===skill(q)));
    const used=new Set(state.remediation.map(r=>r.id));
    const add=(items,stage,date)=>{const next=items.find(x=>!used.has(x.id));if(next){used.add(next.id);state.remediation.push({id:next.id,stage,day:date});}};
    add([...related].sort((a,b)=>a.difficulty-b.difficulty),'easier',today);
    add(related.filter(x=>x.difficulty<=q.difficulty),'similar',today);
    add(related.filter(x=>['question','negative'].includes(x.grammar?.form)),'question-or-negative',today);
    add(related,'delayed',afterDays(today,1));
    state.remediation=state.remediation.slice(-40);
  }
  function record(q,correct,review=false,details={}) {
    if(details.hinted||details.uncertain||details.scaffold)return;
    const date=details.date||new Date(),today=day(date);
    const p=state.patterns[q.pattern] ||= {correct:0,wrong:0,run:0,due:0};
    const item=state.questions[q.id] ||= {correct:0,wrong:0,wrongDays:[]};
    const d=state.days[today] ||= {answers:0,correct:0};
    state.answers++;d.answers++;
    if(correct){state.correct++;d.correct++;state.streak++;p.correct++;p.run++;item.correct++;}
    else{state.streak=0;p.wrong++;p.run=0;item.wrong++;if(!item.wrongDays.includes(today))item.wrongDays.push(today);}
    state.best=Math.max(state.best,state.streak);if(review&&correct)state.reviewed++;
    evidence(q,details.lane||lane(q),correct,today);
    if(q.grammar?.form==='question')evidence(q,'questions',correct,today);
    if(['present-simple','present-continuous'].includes(q.grammar?.tense))evidence(q,q.grammar.tense==='present-simple'?'simple':'continuous',correct,today);
    const distinctDays=new Set(Object.values(state.evidence[skill(q)]).flatMap(v=>v.days)).size;
    const interval=correct?[1,3,7,14,30][Math.min(Math.max(0,distinctDays-1),4)]:1;
    p.dueDay=afterDays(today,interval);p.due=new Date(p.dueDay+'T00:00:00').getTime();
    if(!correct){const tag=Grade.error(q,details.answer||'');const e=state.errors[tag]||={count:0,lastDay:today};e.count++;e.lastDay=today;remediate(q,today);}
    save();
  }
  function dailyPool(index,length,recent=[]) {
    const settings=state.settings;
    const due=state.remediation.find(r=>r.day<=day()&&!recent.includes(r.id)&&EXERCISES.some(q=>q.id===r.id&&eligible(q)));
    if(due){state.remediation=state.remediation.filter(r=>r!==due);save();return EXERCISES.filter(q=>q.id===due.id);}
    if(settings.daily==='classic'){
      const group=pool(['weak','contrast','real','review'][Math.min(3,Math.floor(index/length*4))]);
      return group.some(q=>!recent.includes(q.id))?group:pool('contrast').some(q=>!recent.includes(q.id))?pool('contrast'):pool('mixed');
    }
    const phase=index/length;
    const all=pool('mixed');
    let selected=phase<.2?all.filter(q=>choice(q)&&q.difficulty===1):phase<.5?pool('weak'):
      phase<.8?all.filter(q=>q.category===settings.topic):settings.production?all.filter(q=>['blocks','transform'].includes(q.type)):all.filter(q=>choice(q)&&q.category===settings.topic);
    if(!selected.some(q=>!recent.includes(q.id)))selected=all;
    return selected;
  }
  function followup(q,recent=[]) {return EXERCISES.filter(x=>choice(x)&&x.id!==q.id&&!recent.includes(x.id)&&(skill(x)===skill(q)||x.pattern===q.pattern||(q.family&&x.family===q.family))).sort((a,b)=>a.difficulty-b.difficulty||a.question.length-b.question.length)[0]||null;}
  function stats(){return {accuracy:state.answers?Math.round(state.correct/state.answers*100):0,wrong:state.answers-state.correct,
    mastered:Object.keys(state.evidence).filter(k=>mastery(k)==='mastered').length,recognized:Object.keys(state.evidence).filter(k=>mastery(k)!=='learning').length,
    weak:Object.values(state.patterns).filter(p=>p.wrong>0&&p.run<3).length};}
  window.Trainer={get state(){return state},get storageError(){return storageError},get blocked(){return blocked},save,day,afterDays,
    normalize:Grade.normalize,validate:Grade.validate,grade:Grade.grade,record,pool,pick,stats,weak,choice,skill,lane,mastery,totals,level,whReady,dailyPool,followup,
    settings(values){state.settings={...state.settings,...values};save();},
    reset(){state=Store.fresh();blocked=false;save();},setTheme(theme){state.theme=theme;save();},
    toggleSaved(id){state.saved=state.saved.includes(id)?state.saved.filter(x=>x!==id):[...state.saved,id];save();}};
})();
