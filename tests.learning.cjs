const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const load = (ctx, file) => vm.runInContext(fs.readFileSync(__dirname + '/' + file, 'utf8'), ctx);
const storage = {};
const ctx = vm.createContext({window: {}, Date, Math, performance, URLSearchParams,
  localStorage: {getItem: key => storage[key] || null, setItem: (key, value) => storage[key] = value}});
load(ctx, 'exercises.js');
load(ctx, 'learning.js');
ctx.window.crypto = require('node:crypto');
load(ctx, 'history.js');
const recordedAttempts=[];ctx.PhraseHistory=ctx.window.PhraseHistory;ctx.PhraseHistory.add=attempt=>{recordedAttempts.push(attempt);return Promise.resolve(true);};
const qs = ctx.window.EXERCISES;
const learning = ctx.window.PhraseLearning;
assert.equal(qs.length, 315);
assert.equal(new Set(qs.map(q => q.pattern)).size, 108);
let optionsCovered = 0;
for (const q of qs) {
  assert(q.learning.why.length > 80, q.id);
  assert(q.learning.remember.length > 10, q.id);
  assert(learning.render(q).includes('Як запам’ятати'), q.id);
  if (q.options) {
    const wrong = q.options.filter(option => option !== q.correctAnswer);
    assert.equal(Object.keys(q.wrongExplanations).length, wrong.length, q.id);
    for (const option of wrong) {
      assert(q.wrongExplanations[option].length > 20, q.id + ': ' + option);
      const html = learning.render(q, {answer: option});
      assert.equal((html.match(/class="chosen-reason"/g) || []).length, 1, q.id);
      assert(!html.includes('undefined'), q.id);
      optionsCovered++;
    }
    const right = learning.render(q, {answer: q.correctAnswer});
    assert(!right.includes('Ваш вибір'), q.id);
    const hint = learning.render(q, {hint: true});
    assert(hint.includes('Чому саме так') && !hint.includes('option-reasons'), q.id);
  }
  if (q.learning.fact) {
    assert.match(q.learning.fact.source[1], /^https:\/\//);
    const html = learning.render(q);
    assert(html.includes('<details') && html.includes('rel="noopener noreferrer"'));
  }
}
assert.equal(qs.filter(q => q.options).length, 141);
assert.equal(optionsCovered, 286);
const byId = id => qs.find(q => q.id === id);
const itHas = byId('ex-0176');
assert.match(itHas.learning.why, /Present Perfect/);
assert.match(itHas.wrongExplanations["It's has been a long day."], /has has been/);
// Lookup remains correct when options are reordered, as in actual sessions.
itHas.options.reverse();
assert.match(itHas.wrongExplanations['Its been a long day.'], /апострофа/);
assert.match(byId('ex-0313').wrongExplanations['I go to the office.'], /граматично правильне/);
assert(learning.render(byId('ex-0308')).includes('Чому інші слова не є помилкою'));
assert.equal(learning.solution(byId('ex-0278')), "Let's meet on Saturday.");
assert.equal(learning.solution(byId('ex-0292')), 'I need help.');
assert.equal(learning.solution(byId('ex-0310')), 'Its battery is dead.');
const hostile = {learning: {why: '<script>x</script>', remember: '&hello'}, examples: ['<img>'], options: ['ok', '<svg>'], correctAnswer: 'ok', wrongExplanations: {'<svg>': '<iframe>'}};
const safe = learning.render(hostile, {answer: '<svg>'});
assert(!/<script|<img|<svg|<iframe/.test(safe));
assert(safe.includes('&lt;script&gt;') && safe.includes('&lt;iframe&gt;'));

// Exercise the real app handlers with a minimal DOM: hints and repeated clicks
// must not inflate scores, and feedback must cover both right and wrong answers.
const nodes = new Map();
function node(selector) {
  if (!nodes.has(selector)) nodes.set(selector, {innerHTML: '', hidden: false, style: {},
    classList: {toggle() {}, add() {}}, focus() {}, scrollIntoView() {}});
  return nodes.get(selector);
}
Object.assign(ctx, {EXERCISES: qs, CATEGORIES: ctx.window.CATEGORIES,
  document: {querySelector: node, querySelectorAll: () => [], addEventListener() {}, body: node('body')},
  location: {hash: '#home'}, setTimeout, clearTimeout});
Object.assign(ctx.window, {PhraseIcons: {}, addEventListener() {}, scrollTo() {}});
load(ctx, 'engine.js');
ctx.Trainer = ctx.window.Trainer;
ctx.PhraseLearning = learning;
load(ctx, 'app.js');
vm.runInContext('start("mixed", {category:"pronouns"})', ctx);
ctx.questionUnderTest = itHas;
function prepare() {
  vm.runInContext('session.q=questionUnderTest;session.options=[...questionUnderTest.options];session.locked=false;session.revealed=false', ctx);
}
prepare();
ctx.chosen = itHas.correctAnswer;
vm.runInContext('submit(chosen)', ctx);
assert.equal(ctx.Trainer.state.answers, 1);
assert.equal(ctx.Trainer.state.correct, 1);
assert(node('#feedback').innerHTML.includes('Правильно!'));
assert(node('#feedback').innerHTML.includes('Чому інші варіанти'));
vm.runInContext('submit(chosen)', ctx);
assert.equal(ctx.Trainer.state.answers, 1, 'locked answer counted twice');
prepare();
ctx.chosen = "It's has been a long day.";
vm.runInContext('submit(chosen)', ctx);
assert.equal(ctx.Trainer.state.answers, 2);
assert.equal(ctx.Trainer.state.correct, 1);
assert(node('#feedback').innerHTML.includes('Ваш вибір'));
assert(node('#feedback').innerHTML.includes('has has been'));
prepare();
node('#explain').onclick();
assert(node('#feedback').innerHTML.includes('Розберімо правило'));
assert(!node('#feedback').innerHTML.includes('option-reasons'));
ctx.chosen = itHas.correctAnswer;
vm.runInContext('submit(chosen)', ctx);
assert.equal(ctx.Trainer.state.answers, 2, 'hint-assisted answer must not count');
assert(node('#feedback').innerHTML.includes('не враховано у статистиці'));
assert.equal(node('#next').hidden, false);
assert.equal(node('#skip').hidden, true);
assert.equal(recordedAttempts.length,3);
assert.equal(recordedAttempts[0].answer,itHas.correctAnswer);
assert.equal(recordedAttempts[1].correct,false);
assert.equal(recordedAttempts[2].hinted,true);
assert(ctx.PhraseHistory.validate(recordedAttempts));
assert.equal(new Set(recordedAttempts.map(a=>a.id)).size,3);
vm.runInContext('start("mixed",{question:questionUnderTest.id})',ctx);
assert.equal(vm.runInContext('session.length',ctx),1);
assert.equal(vm.runInContext('session.q.id',ctx),itHas.id);
node('#skip').onclick();
assert.equal(recordedAttempts.at(-1).kind,'skip');
assert.equal(recordedAttempts.at(-1).answer,null);
assert.equal(ctx.Trainer.state.answers,2);
console.log('PASS: 315 detailed explanations, 108 patterns, 141 choice exercises, 286 alternative explanations, contextual distinctions, hints, facts, completed sentences and HTML escaping.');
console.log('PASS: real submit/hint handlers render feedback after right and wrong answers, prevent double counting and preserve unscored hint-assisted practice.');
