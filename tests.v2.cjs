const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=__dirname;
const FixedDate=class extends Date {constructor(...args){super(...(args.length?args:['2026-11-07T12:00:00']));}static now(){return new FixedDate().getTime();}};
function boot(initial={},fail={}) {
  const storage={...initial},ctx=vm.createContext({window:{},Date:FixedDate,Math,localStorage:{getItem(k){if(fail.read)throw Error('read');return storage[k]??null;},setItem(k,v){if(fail.write)throw Error('quota');storage[k]=v;}}});
  for(const file of ['exercises.js','learning.js','exercises-v2.js','persistence.js','grading.js','construction.js','anatomy.js'])vm.runInContext(fs.readFileSync(root+'/'+file,'utf8'),ctx);
  ctx.EXERCISES=ctx.window.EXERCISES;vm.runInContext(fs.readFileSync(root+'/engine.js','utf8'),ctx);
  return {ctx,E:ctx.window.Trainer,G:ctx.window.PhraseGrading,S:ctx.window.PhraseStore,storage,qs:ctx.EXERCISES};
}
let {ctx,E,G,S,storage,qs}=boot();const byId=id=>qs.find(q=>q.id===id);
assert.equal(qs.length,475);assert.equal(new Set(qs.map(q=>q.id)).size,475);
const old=vm.createContext({window:{}});vm.runInContext(fs.readFileSync(root+'/tests/fixtures/legacy-exercises.js','utf8'),old);
vm.runInContext(fs.readFileSync(root+'/learning.js','utf8'),old);
const repairs=new Set([271,286,287,302,303,308,309,288,289,290,291,298,299,300,301,304,305,306,307,311,312].map(n=>'ex-'+String(n).padStart(4,'0')));
for(const q of old.window.EXERCISES){const current=byId(q.id);assert(current,q.id);for(const key of Object.keys(q)){if(repairs.has(q.id)&&['contextUk','alternatives'].includes(key))continue;assert.equal(JSON.stringify(current[key]),JSON.stringify(q[key]),q.id+' '+key);}}
assert.equal(new Set(byId('ex-0271').alternatives).size,byId('ex-0271').alternatives.length);
assert(byId('ex-0288').contextUk.includes('офісі'));assert(byId('ex-0304').contextUk.includes('автомобіль'));
const counts={'present-continuous':50,'simple-continuous':40,questions:25,ing:20,transformations:15,integrated:10};
for(const [key,n] of Object.entries(counts))assert.equal(qs.filter(q=>q.category===key).length,n);
for(const q of qs){
  assert(G.validate(q,q.correctAnswer),q.id);assert(q.examples.length===2,q.id);
  if(q.options){assert.equal(new Set(q.options.map(G.normalize)).size,q.options.length,q.id);for(const o of q.options){assert.equal(G.validate(q,o),o===q.correctAnswer,q.id+' '+o);if(o!==q.correctAnswer)assert(q.wrongExplanations[o],q.id);}}
  if(q.blocks)assert(G.validate(q,q.blocks.join(' ')),q.id);
  if(q.knownWrong)for(const bad of q.knownWrong)assert.equal(G.grade(q,bad).status,'incorrect',q.id+' '+bad);
  for(const tag of Object.values(q.errorByAnswer||{}))assert(G.labels[tag],q.id+' '+tag);
  assert(!ctx.window.PhraseLearning.render(q).includes('undefined'),q.id);
}
assert.equal(G.grade({correctAnswer:'He works.',knownWrong:['He is works.']},'He is works.').status,'incorrect');
assert(!G.validate({correctAnswer:'He is working.'},'He is work.'));
assert(!G.validate({correctAnswer:'Does he work?'},'Does he works?'));
assert(!G.validate({correctAnswer:'Is he working?'},'Do he working?'));
for(const [right,answer] of [["He is not working.","He isn't working!"],["She is not cooking dinner.","She's not cooking dinner."],["He does not work.","He doesn't work."],["I am working.","I'm working."],["It has been a long day.","It's been a long day."],["Let us meet.","Let's meet."],["He cannot drive.","He can't drive."]])assert(G.validate({correctAnswer:right},answer),answer);
assert(!G.validate({correctAnswer:"It's good."},'Its good.'));
assert(!G.validate({correctAnswer:'Meet at 6:30.'},'Meet at 630.'));
assert(G.validate({correctAnswer:'I like swimming.',alternatives:['I like to swim.']},'I LIKE TO SWIM!  '));
assert(G.validate({correctAnswer:'I like swimming.',alternatives:['I like to swim.']},'I like swimming.'));
assert.equal(G.grade(byId('pc-036'),'Today I am traveling by train.').status,'uncertain');
assert.equal(G.error(byId('qa-002'),'Does he works?'),'s-after-does');
assert.equal(G.error(byId('qa-003'),'Do you working?'),'auxiliary-choice');
assert.equal(G.error(byId('tr-006'),'He does not works on Sunday.'),'s-after-does');
const spell=qs.filter(q=>q.skillId==='ing-spelling');assert.equal(spell.length,7);
assert(spell.some(q=>q.correctAnswer==='traveling'&&q.validOtherContext.includes('travelling')));
assert(byId('ing-001').explanationUk.includes('to swim'));
assert.equal(byId('ing-001').grammar.tense,'none');
assert(byId('ing-012').explanationUk.includes('зупинив іншу дію'));
assert(qs.some(q=>q.category==='simple-continuous'&&q.grammar.form==='negative'&&q.grammar.tense==='present-simple'));
const anatomy=ctx.window.PhraseAnatomy.examples;
assert.equal(anatomy.find(q=>q[0]==='He is boring.')[2][2][1],'adjective');
assert.equal(anatomy.find(q=>q[0]==='He is boring everyone.')[2][2][1],'verb');
assert.equal(anatomy.find(q=>q[0]==='I like swimming.')[2][2][1],'activity');
for(const word of ['interesting','annoying','confusing','exciting','tiring'])for(const role of ['adjective','verb'])assert(anatomy.some(q=>q[2].some(p=>p[0]===word&&p[1]===role)),word+' '+role);
for(const q of qs.filter(q=>q.grammar?.subject)) {
  const stages=ctx.window.PhraseLab.stages(q);assert.equal(stages.length,7);
  for(const step of stages){assert(G.validate(step,step.correctAnswer));if(step.options)assert.equal(new Set(step.options).size,step.options.length);if(step.blocks)assert(G.validate(step,step.blocks.join(' ')));assert(!ctx.window.PhraseLearning.render(step).includes('undefined'));}
}
assert.equal(ctx.window.PhraseLab.stages(byId('sc-001'))[5].correctAnswer,'Does he work from home?');
assert.equal(ctx.window.PhraseLab.stages(byId('sc-011'))[5].correctAnswer,'Do they take the train to work?');
// Safe schema-1 upgrade, future fields, nested attacks, corruption, and quota failures.
const legacy={version:1,answers:4,correct:3,streak:2,best:2,reviewed:1,patterns:{'at home':{correct:3,wrong:1,run:2,due:42}},questions:{'ex-0001':{correct:3,wrong:1,wrongDays:['2026-11-06']}},days:{'2026-11-06':{answers:4,correct:3}},saved:['ex-0001','ex-0200'],theme:'dark'};
assert(S.validate(legacy));const raw=JSON.stringify(legacy);
let migrated=boot({'phrase-progress-v1':raw});assert.equal(migrated.E.state.version,2);assert.equal(migrated.E.state.answers,4);assert.equal(migrated.E.state.saved[1],'ex-0200');assert.equal(migrated.storage['phrase-progress-v1-backup'],raw);migrated.E.save();assert.equal(JSON.parse(migrated.storage['phrase-progress-v1']).version,2);
assert.equal(migrated.E.stats().mastered,0);assert.equal(migrated.E.totals('recognition').total,0);
for(const bad of [JSON.parse('{"version":1,"__proto__":{"polluted":true}}'),{...legacy,patterns:{x:{correct:-1,wrong:0,run:0,due:0}}},{...legacy,days:{'2026-02-31':{answers:1,correct:1}}},{...S.fresh(),evidence:{bad:{recognition:{correct:3,total:1,days:[],ids:[]}}}},JSON.parse(JSON.stringify(legacy).replace('"patterns":{','"patterns":{"constructor":{},'))])assert(!S.validate(bad));
for(const bad of ['broken',JSON.stringify({...legacy,version:99}),JSON.stringify({...legacy,questions:null})]){const b=boot({'phrase-progress-v1':bad});assert(b.E.blocked);b.E.record(b.qs[0],true);assert.equal(b.storage['phrase-progress-v1'],bad);}
assert(boot({'phrase-progress-v1':raw},{write:true}).E.blocked);
assert(boot({}, {read:true}).E.blocked);
assert(S.validate(S.migrate(legacy)));assert.equal(S.migrate({...legacy,history:{version:1,attempts:[]}}).history,undefined);
assert(!S.validate({...legacy,settings:{production:'yes'}}));assert(!S.validate({...legacy,errors:{x:{count:-1,lastDay:'2026-11-07'}}}));assert(!S.validate({...legacy,answers:1.5}));
// Choice-only default and manual overrides; no selection fallback repeats.
for(const mode of ['mixed','daily','weak','review','saved','tenses','questions','ing'])assert(E.pool(mode).every(q=>q.options));
assert.equal(E.pool('transform').length,0);assert.equal(E.pick([qs[0]],[qs[0].id]),null);
assert.equal(E.pick([qs[0],qs[1]],[qs[0].id],()=>0).id,qs[1].id);
assert.equal(E.level(),1);assert(!E.pool('questions').some(q=>q.skillId.startsWith('wh-')));
E.settings({level:2,production:true});assert(E.pool('transform').length>0);assert(E.pool('complete').length>0);assert(E.pool('recall').length>0);assert(E.pool('lab').length>0);assert(E.pool('questions').some(q=>q.skillId.startsWith('wh-')));assert(!E.pool('mixed').some(q=>q.difficulty>2));
E.settings({level:0});E.reset();
const q1=byId('pc-001'),q2=byId('pc-002');
for(let i=0;i<20;i++)E.record(i%2?q1:q2,true,false,{date:new FixedDate('2026-11-06T12:00:00')});
assert.equal(E.level(),1,'one day cannot unlock a level');assert.equal(E.mastery('present-continuous'),'recognized');assert.equal(E.stats().mastered,0);
E.record(q1,true,false,{date:new FixedDate('2026-11-07T12:00:00')});assert.equal(E.level(),2);
const due=E.state.patterns[q1.pattern].due;
E.record(q1,true);assert.equal(E.state.patterns[q1.pattern].due,due,'same-minute repetition must not extend interval');
E.settings({production:true});E.record(byId('pc-021'),true);assert.equal(E.mastery('present-continuous'),'recognized');E.record(byId('pc-036'),true);assert.equal(E.mastery('present-continuous'),'mastered');
const before=E.state.answers;E.record(q1,true,false,{hinted:true});E.record(q1,false,false,{uncertain:true});E.record(q1,true,false,{scaffold:true});assert.equal(E.state.answers,before);
E.record(q1,false,false,{answer:'does'});assert.equal(E.state.errors['auxiliary-choice'].count,1);
assert.equal(new Set(E.state.remediation.map(r=>r.id)).size,E.state.remediation.length);assert(!E.state.remediation.some(r=>r.id===q1.id));assert(E.state.remediation.some(r=>r.stage==='delayed'&&r.day==='2026-11-08'));assert(E.state.remediation.some(r=>r.stage==='question-or-negative'));
assert.equal(E.state.patterns[q1.pattern].dueDay,'2026-11-08');
const next=E.dailyPool(0,10);assert.equal(next.length,1);assert.notEqual(next[0].id,q1.id);
E.reset();for(let i=0;i<8;i++)E.record(byId(i%2?'qa-001':'qa-002'),true);assert(E.whReady());
const recent=[];for(let i=0;i<20;i++){const q=E.pick(E.dailyPool(i,20,recent),recent,()=>.25);assert(q);assert(!recent.includes(q.id));recent.push(q.id);}
assert.equal(E.afterDays('2026-12-31',1),'2027-01-01');assert.equal(E.afterDays('2028-02-28',1),'2028-02-29');
E.reset();E.settings({daily:'classic'});assert(E.dailyPool(0,20).length>0,'new learner classic plan needs a fallback');
E.settings({daily:'adaptive',production:true,level:2});assert(E.dailyPool(8,10).every(q=>['blocks','transform'].includes(q.type)));
assert(S.validate(E.state));
// All entry assets are local relative files, suitable for a project subdirectory.
const html=fs.readFileSync(root+'/index.html','utf8');for(const [,asset] of html.matchAll(/(?:src|href)="([^"#]+)"/g)){assert(!asset.startsWith('/')&&!asset.includes('://'),asset);assert(fs.existsSync(root+'/'+asset.split('?')[0]),asset);}
assert(fs.existsSync(root+'/vendor/lucide/icons.js'));
console.log('PASS: 475 exercise contracts; 315 legacy IDs; 160 new authored exercises; precise errors, negatives, contractions, conservative free text, 7 lab stages and 18 explicit anatomy examples.');
console.log('PASS: safe v1 migration, nested hostile data rejection, read/write failure protection, evidence across days, gradual levels, four remediation stages, no repeats, static subdirectory assets.');
