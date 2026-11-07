const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx=vm.createContext({window:{crypto:require('node:crypto')},Date,Math,Map,Set});
for(const file of ['exercises.js','learning.js','persistence.js','history.js']) vm.runInContext(fs.readFileSync(__dirname+'/'+file,'utf8'),ctx);
ctx.PhraseStore=ctx.window.PhraseStore;
const H=ctx.window.PhraseHistory,qs=ctx.window.EXERCISES,q=qs.find(q=>q.id==='ex-0176');
function attempt(answer,correct,extra={}){return H.make(q,{answer,correct,timeMs:1520.5,...extra});}
const wrong=attempt('Its been a long day.',false),right=attempt(q.correctAnswer,true),hint=attempt(q.correctAnswer,true,{hinted:true});
const skip=H.make(q,{kind:'skip'});
wrong.at=1000;right.at=3000;hint.at=4000;skip.at=5000;
const secondWrong={...wrong,id:'second-wrong',at:2000};
assert.equal(wrong.timeMs,1521);
assert.equal(wrong.solution,q.correctAnswer);
assert.equal(wrong.question,q.question);
assert(H.validate([wrong,right,hint,skip,secondWrong]));
for(const bad of [null,{},[{...wrong,at:NaN}],[{...wrong,timeMs:-1}],[{...wrong,answer:null}],[{...skip,correct:false}],[wrong,wrong],[{...wrong,kind:'unknown'}],[{...wrong,day:'broken'}]])assert(!H.validate(bad));
const summary=H.summarize([right,hint,skip,wrong,secondWrong]);
assert.equal(summary.total,5);
assert.equal(summary.scored,3);
assert.equal(summary.right,1);
assert.equal(summary.accuracy,33);
assert.equal(summary.hinted,1);
assert.equal(summary.skipped,1);
assert.equal(summary.mistakes[0].count,2);
assert.equal(summary.mistakes[0].lastCorrect,true);
const laterWrong={...wrong,id:'later',at:6000};
assert.equal(H.summarize([right,laterWrong,hint]).mistakes[0].lastCorrect,false);
assert.equal(H.summarize([hint,skip]).accuracy,null);
assert.equal(H.summarize([hint,skip]).mistakes.length,0);
// A different wrong option is a separate confusion, even for the same exercise.
const otherWrong={...wrong,id:'other',answer:"It's has been a long day."};
assert.equal(H.summarize([wrong,otherWrong]).mistakes.length,2);
ctx.EXERCISES=qs;ctx.CATEGORIES=ctx.window.CATEGORIES;ctx.PhraseLearning=ctx.window.PhraseLearning;
vm.runInContext(fs.readFileSync(__dirname+'/history-ui.js','utf8'),ctx);
ctx.sample=wrong;
assert(vm.runInContext('historyMatches(sample,{result:"wrong"})',ctx));
assert(!vm.runInContext('historyMatches(sample,{result:"hint"})',ctx));
assert(!vm.runInContext('historyMatches(sample,{category:"time"})',ctx));
assert(vm.runInContext('historyMatches(sample,{category:"pronouns"})',ctx));
assert(!vm.runInContext('historyMatches(sample,{day:"2000-01-01"})',ctx));
(async()=>{
  assert.equal(await H.all(),null,'unavailable IndexedDB must not masquerade as empty history');
  assert.equal(await H.add(wrong),false);
  assert.equal(await H.replace([wrong,wrong]),false);
  // Backups include actual choices; importing an old scores-only backup keeps
  // current history. A failed history restore rolls back the scores as well.
  let saved={},history=[wrong,right],download,downloads=0,reloads=0,restores=0,restoreOK=true;
  const messages=[];
  const progress={version:1,answers:2,correct:1,streak:1,best:1,reviewed:0,patterns:{},questions:{},days:{},saved:[],theme:'light'};
  Object.assign(ctx,{
    Trainer:{state:progress,day:()=> '2026-10-24'},
    PhraseHistory:{validate:H.validate,all:async()=>history,replace:async items=>{restores++;if(restoreOK)history=items;return restoreOK;}},
    Blob,URL:{createObjectURL:blob=>{download=blob;return 'blob:test';},revokeObjectURL(){}},
    document:{createElement:()=>({click(){downloads++;}})},setTimeout:fn=>fn(),
    toast:message=>messages.push(message),confirm:()=>true,location:{reload(){reloads++;}},
    localStorage:{getItem:key=>saved[key]??null,setItem:(key,value)=>{saved[key]=value;},removeItem:key=>{delete saved[key];}}
  });
  await vm.runInContext('exportProgress()',ctx);
  const backup=JSON.parse(await download.text());
  assert.equal(downloads,1);
  assert.equal(backup.history.attempts[0].answer,wrong.answer);
  assert.equal(backup.answers,2);
  async function restore(copy){ctx.event={target:{files:[{text:async()=>JSON.stringify(copy)}],value:'selected'}};await vm.runInContext('importProgress(event)',ctx);}
  await restore(backup);
  assert.equal(reloads,1);
  assert.equal(restores,1);
  assert.equal(history.length,2);
  assert(!JSON.parse(saved['phrase-progress-v1']).history);
  await restore(progress);
  assert.equal(reloads,2);
  assert.equal(restores,1,'old backup replaced detailed history');
  const before=saved['phrase-progress-v1'];restoreOK=false;
  await restore({...backup,answers:100});
  assert.equal(saved['phrase-progress-v1'],before);
  assert.equal(reloads,2);
  assert.equal(history.length,2);
  assert(messages.at(-1).includes('Імпорт скасовано'));
  await restore({...backup,history:{version:1,attempts:[{...wrong,answer:null}]}});
  assert.equal(saved['phrase-progress-v1'],before);
  assert.equal(restores,2,'invalid backup reached storage');
  ctx.PhraseHistory.all=async()=>null;
  await vm.runInContext('exportProgress()',ctx);
  assert.equal(downloads,1,'storage failure exported a misleading empty history');
  const nodes=new Map();
  function element(selector){if(!nodes.has(selector))nodes.set(selector,{innerHTML:'',insertAdjacentHTML(where,html){this.innerHTML+=html;}});return nodes.get(selector);}
  Object.assign(ctx,{$:element,header:()=>'',metric:()=>'',esc:s=>String(s).replaceAll("'",'&#39;'),labels:{mixed:'Practice'},icon:()=>''});
  ctx.location.hash='#history?result=wrong';
  ctx.PhraseHistory.all=async()=>[wrong,right];ctx.PhraseHistory.summarize=H.summarize;
  await vm.runInContext('renderHistory({result:"wrong"})',ctx);
  assert.equal(element('#history-result').value,'wrong');
  assert.match(element('#main').innerHTML,/<option value="wrong"[^>]*>/);
  assert(!element('#main').innerHTML.includes('</option value='));
  assert.equal((element('#history-list').innerHTML.match(/<article/g)||[]).length,1);
  // Filtering for past errors must still show that the latest overall attempt
  // was successful, even though that successful attempt is outside the filter.
  assert(element('#main').innerHTML.includes('на цю вправу: правильна'));
  console.log('PASS: attempt snapshots, unique IDs, import validation, recurrence counts, chronological latest results, unscored hints/skips, history filters and explicit storage failures.');
  console.log('PASS: combined backup round trip, old backup compatibility, failed-restore rollback and no incomplete export on storage failure.');
})().catch(error=>{console.error(error);process.exitCode=1;});
