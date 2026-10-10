const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
let storage={};const ctx={window:{},localStorage:{getItem:k=>storage[k]||null,setItem:(k,v)=>storage[k]=v},Date,Math};vm.createContext(ctx);
vm.runInContext(fs.readFileSync(__dirname+'/exercises.js','utf8'),ctx);ctx.EXERCISES=ctx.window.EXERCISES;
const source=fs.readFileSync(__dirname+'/engine.js','utf8');vm.runInContext(source,ctx);let E=ctx.window.Trainer,qs=ctx.EXERCISES;
assert(qs.length>=250);assert(qs.filter(q=>q.type==='contrast').length>=100);assert.equal(new Set(qs.map(q=>q.id)).size,qs.length);
for(const q of qs){assert(q.explanationUk&&q.examples.length===2&&q.pattern);assert(E.validate(q,q.correctAnswer),q.id);if(q.options){assert(q.options.includes(q.correctAnswer));assert.equal(new Set(q.options).size,q.options.length);for(const option of q.options.filter(x=>x!==q.correctAnswer))assert(!E.validate(q,option),q.id);}if(q.blocks)assert(E.validate(q,q.blocks.join(' ')),q.id);}
for(const [cats,min] of [[['time'],30],[['place','movement'],30],[['articles'],30],[['chunks'],20],[['pronouns'],20],[['be','have','do','order'],20]])assert(qs.filter(q=>cats.includes(q.category)).length>=min);
assert(E.validate({correctAnswer:"It's good."},'IT IS GOOD!'));assert(!E.validate({correctAnswer:"It's good."},'Its good'));assert(E.validate({correctAnswer:"He doesn't work."},'He does not work'));
const q=qs[0];assert.equal(E.pool('review').length,0);E.record(q,false);assert(E.weak(q));assert(E.pool('review').some(x=>x.id===q.id));assert.equal(E.pool('review','','',true).length,1);assert(E.state.patterns[q.pattern].due>Date.now());const dueWrong=E.state.patterns[q.pattern].due;
for(let i=0;i<3;i++)E.record(q,true,true);assert(!E.weak(q));assert.equal(E.stats().mastered,1);assert.equal(E.state.reviewed,3);assert.equal(E.state.streak,3);assert(E.state.patterns[q.pattern].due>dueWrong);assert(E.pool('review').some(x=>x.id===q.id));assert(E.pool('review','chunks').every(x=>x.category==='chunks'));E.toggleSaved(q.id);assert.equal(E.pool('saved').length,1);E.toggleSaved(q.id);assert.equal(E.pool('saved').length,0);
vm.runInContext(source,ctx);E=ctx.window.Trainer;assert.equal(E.state.answers,4);assert.equal(E.state.best,3);assert.equal(E.stats().accuracy,75);
const other=qs.find(x=>x.pattern!==q.pattern);assert.equal(E.pick([q,other],[q.id]).id,other.id);assert.equal(E.pick([]),null);E.reset();assert.equal(E.state.answers,0);assert.equal(E.pool('review').length,0);
storage['phrase-progress-v1']='broken';vm.runInContext(source,ctx);assert.equal(ctx.window.Trainer.state.answers,0);
E=ctx.window.Trainer;
// Old written answers and bookmarks must never bring recall formats back into a session.
for(const item of qs){E.record(item,false);E.toggleSaved(item.id);}
const expectedIds=qs.filter(q=>['contrast','multiple-choice','context','mistake'].includes(q.type)).map(q=>q.id);
assert.equal(expectedIds.length,141);
for(const mode of ['mixed','daily','weak','review','saved','contrast','rapid','real']){
  const items=E.pool(mode);
  assert(items.length>0,mode);
  assert(items.every(q=>q.options?.length>=2&&!['translation','blocks','fill','chunk'].includes(q.type)),mode);
  if(['mixed','daily','weak','review','saved'].includes(mode))assert.deepEqual(Array.from(items,q=>q.id),Array.from(expectedIds),mode);
}
for(const category of Object.keys(ctx.window.CATEGORIES)){
  assert(E.pool('mixed',category).length>0,category);
  assert(E.pool('real',category).length>0,category);
}
for(const mode of ['review','saved','weak']){
  const matching=E.pool(mode,q.category,q.pattern,true);
  assert(matching.length>0);
  assert(matching.every(item=>item.category===q.category&&item.pattern===q.pattern&&item.options));
}
const written=qs.find(q=>q.type==='translation');
assert(E.state.questions[written.id].wrong===1);
assert(E.state.saved.includes(written.id));
vm.runInContext(source,ctx);E=ctx.window.Trainer;
assert.equal(E.state.answers,qs.length);
assert(E.state.saved.includes(written.id));
assert(!E.pool('saved').some(q=>q.id===written.id));
E.reset();assert.equal(E.pool('review').length,0);assert.equal(E.pool('saved').length,0);assert(E.pool('real').length>0);
console.log(`PASS: ${qs.length} exercise contracts, category minimums, answer normalization, persistence, review filters, streaks, mastery, due dates, bookmarks, non-repeating selection, reset and corrupt JSON recovery.`);
console.log('PASS: all session modes use choices only; all 15 topics remain available; historical written answers and bookmarks survive without entering sessions.');
