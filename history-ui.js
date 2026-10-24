let historyView = 0;
const historyResult = a => a.kind === 'skip' ? 'Пропущено' : a.hinted ? 'З підказкою · без балів' : a.correct ? 'Правильно' : 'Помилка';
const historyTime = at => new Date(at).toLocaleString('uk-UA', {day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'});
function historyMatches(a, params) {
  const result = params.result || '';
  return (!params.category || a.category === params.category)
    && (!params.day || a.day === params.day)
    && (!result || (result === 'skip' ? a.kind === 'skip'
      : result === 'hint' ? a.kind === 'answer' && a.hinted
      : a.kind === 'answer' && !a.hinted && a.correct === (result === 'right')));
}
function historyEntry(a) {
  const q = EXERCISES.find(q => q.id === a.questionId);
  const detail = q ? PhraseLearning.render(q, {answer:a.answer}) : '<p>Цієї вправи вже немає в поточному наборі. Збережені відповіді доступні вище.</p>';
  return `<article class="card history-entry"><div class="history-meta"><span class="tag ${a.kind==='answer'&&!a.hinted&&!a.correct?'danger':''}">${historyResult(a)}</span><time datetime="${new Date(a.at).toISOString()}">${historyTime(a.at)}</time></div>
    <h2>${esc(a.question)}</h2><p class="mini">${esc(CATEGORIES[a.category]||a.category)} · ${esc(labels[a.mode]||a.mode)} · ${Math.round(a.timeMs/1000)} с</p>
    ${a.kind==='answer'?`<p>Ваш вибір: <b lang="en">${esc(a.answer==='—'?'без артикля':a.answer)}</b></p>`:''}
    <p>Правильно: <b lang="en">${esc(a.solution)}</b></p>
    <details class="history-explanation"><summary>Переглянути пояснення</summary>${detail}<p class="mini">Пояснення з поточної версії вправи.</p></details>
    ${q?.options?`<a class="quiet history-repeat" href="#mixed?question=${encodeURIComponent(q.id)}">Повторити цю вправу ${icon('rotate-ccw')}</a>`:''}</article>`;
}
async function renderHistory(params = {}) {
  const request = ++historyView;
  $('#main').innerHTML = header('Історія відповідей', 'Ваші спроби, обрані варіанти та повторювані помилки. Усе зберігається в цьому браузері.') + '<p role="status">Завантажуємо історію…</p>';
  const all = await PhraseHistory.all();
  if (request !== historyView || location.hash.split('?')[0] !== '#history') return;
  if (all === null) {
    $('#main').innerHTML = header('Історія відповідей','Не вдалося відкрити сховище історії в цьому браузері.') + '<p>Перевірте, чи дозволене збереження даних сайту. Загальна статистика зберігається окремо.</p>';
    return;
  }
  const items = all.filter(a => historyMatches(a, params)).sort((a,b) => b.at-a.at);
  const summary = PhraseHistory.summarize(items);
  const latest = new Map(PhraseHistory.summarize(all).mistakes.map(g=>[g.attempt.questionId,g.lastCorrect]));
  for (const group of summary.mistakes) group.lastCorrect = latest.get(group.attempt.questionId);
  const dates = [...new Set(all.map(a=>a.day))].sort().reverse();
  const first = all.length ? historyTime(all.reduce((earliest,a)=>Math.min(earliest,a.at),Infinity)) : '';
  $('#main').innerHTML = header('Історія відповідей','Відкрийте розбір або повторіть конкретну вправу. Підказки й пропуски видно окремо.') +
    `<p class="mini">${first?`Детальна історія починається з ${first}. `:''}Обрані відповіді до цього оновлення не записувалися. Вони не відновлюються зі старої статистики.</p>
    <div class="filters"><label>Результат<select id="history-result"><option value="">Усі спроби</option><option value="wrong" ${params.result==='wrong'?'selected':''}>Помилки без підказки</option><option value="right" ${params.result==='right'?'selected':''}>Правильні без підказки</option><option value="hint" ${params.result==='hint'?'selected':''}>З підказкою</option><option value="skip" ${params.result==='skip'?'selected':''}>Пропуски</option></select></label>
    <label>Тема<select id="history-category"><option value="">Усі теми</option>${Object.entries(CATEGORIES).map(([id,name])=>`<option value="${id}" ${params.category===id?'selected':''}>${name}</option>`).join('')}</select></label>
    <label>День<select id="history-day"><option value="">За весь час</option>${dates.map(date=>`<option value="${date}" ${params.day===date?'selected':''}>${date}</option>`).join('')}</select></label></div>
    <p class="mini">Підсумки за вибраними фільтрами</p><div class="metrics">${metric(summary.total,'збережених спроб')}${metric(summary.accuracy===null?'—':summary.accuracy+'%','точність без підказок')}${metric(summary.hinted,'відповідей з підказкою')}${metric(summary.skipped,'пропусків')}</div>
    ${summary.mistakes.length?`<section class="card history-analysis"><h2>Помилки для повторення</h2><p class="mini">Лише самостійні відповіді. Одна й та сама вправа та той самий обраний варіант.</p>${summary.mistakes.slice(0,5).map(g=>`<div class="recurring-mistake"><p><b>${esc(g.attempt.question)}</b></p><p lang="en">${esc(g.attempt.answer)} → ${esc(g.attempt.solution)}</p><p class="mini">Кількість таких помилок у вибірці: ${g.count}. Остання самостійна відповідь на цю вправу: ${g.lastCorrect?'правильна':'з помилкою'}.</p><a class="link" href="#mixed?question=${encodeURIComponent(g.attempt.questionId)}">Потренувати ${icon('arrow-right')}</a></div>`).join('')}</section>`:''}
    <div class="section-heading"><h2>Ваші спроби</h2><span>${items.length}</span></div><div id="history-list" class="history-list"></div><button class="quiet" id="history-more" hidden>Показати ще 30</button>
    <div class="actions"><button class="quiet" id="history-export">${icon('download')} Зберегти прогрес та історію</button><a class="quiet" href="#stats">Відновити копію ${icon('upload')}</a></div>
    <p class="mini">Історія прив’язана до цього браузера й адреси сайту. Очищення даних сайту видалить її; для резервної копії та перенесення між пристроями збережіть файл. Файл містить ваші обрані відповіді — його можна використати для детальнішого аналізу.</p>`;
  for (const id of ['result','category','day']) {
    const control = $('#history-'+id);
    control.value = params[id] || '';
    control.onchange = () => {
    const p = new URLSearchParams();
    for (const key of ['result','category','day']) if ($('#history-'+key).value) p.set(key,$('#history-'+key).value);
    location.hash = 'history'+(p.size?'?'+p:'');
    };
  }
  let shown = 0;
  function more() {
    if (!items.length) $('#history-list').innerHTML = '<section class="card empty"><h2>Поки немає спроб за цими фільтрами</h2><p>Пройдіть кілька вправ або змініть фільтри.</p><a class="primary" href="#daily">Почати заняття</a></section>';
    else $('#history-list').insertAdjacentHTML('beforeend', items.slice(shown,shown+30).map(historyEntry).join(''));
    shown += 30;
    $('#history-more').hidden = shown >= items.length;
  }
  $('#history-more').onclick = more;
  $('#history-export').onclick = exportProgress;
  more();
}
async function exportProgress() {
  const history = await PhraseHistory.all();
  if (history === null) {toast('Не вдалося прочитати історію. Копію не створено; спробуйте ще раз.');return;}
  const copy = {...Trainer.state, history:{version:1, attempts:history}};
  const blob = new Blob([JSON.stringify(copy,null,2)],{type:'application/json'}), url = URL.createObjectURL(blob), a = document.createElement('a');
  a.href=url;a.download='phrase-progress-'+Trainer.day()+'.json';a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
async function importProgress(e) {
  try {
    const file=e.target.files[0];if(!file)return;
    const raw=JSON.parse(await file.text());
    if(raw.version!==1||['answers','correct','streak','best','reviewed'].some(k=>!Number.isFinite(raw[k])||raw[k]<0)||!raw.patterns||!raw.questions||!raw.days||!Array.isArray(raw.saved))throw Error();
    const validIds=new Set(EXERCISES.map(q=>q.id));
    if([raw.patterns,raw.questions,raw.days].some(x=>typeof x!=='object'||Array.isArray(x))||raw.saved.some(id=>!validIds.has(id))||Object.entries(raw.questions).some(([id,q])=>!validIds.has(id)||!q||!Number.isFinite(q.correct)||q.correct<0||!Number.isFinite(q.wrong)||q.wrong<0||!Array.isArray(q.wrongDays))||Object.values(raw.patterns).some(p=>!p||['correct','wrong','run','due'].some(k=>!Number.isFinite(p[k])||p[k]<0)))throw Error();
    const hasHistory=Object.prototype.hasOwnProperty.call(raw,'history');
    if(hasHistory&&(!raw.history||raw.history.version!==1||!PhraseHistory.validate(raw.history.attempts)))throw Error();
    const message=hasHistory?'Замінити поточний прогрес та всю історію даними з копії?':'Це стара копія без детальної історії. Замінити статистику? Поточна історія відповідей залишиться.';
    if(!confirm(message))return;
    const attempts=raw.history?.attempts;delete raw.history;
    const previous=localStorage.getItem('phrase-progress-v1');
    localStorage.setItem('phrase-progress-v1',JSON.stringify(raw));
    if(hasHistory&&!await PhraseHistory.replace(attempts)) {
      if(previous===null)localStorage.removeItem('phrase-progress-v1');else localStorage.setItem('phrase-progress-v1',previous);
      toast('Не вдалося відновити історію. Імпорт скасовано, попередні дані збережено.');return;
    }
    location.reload();
  } catch(_) {toast('Не вдалося прочитати коректну копію прогресу та історії.');}
  finally {e.target.value='';}
}
