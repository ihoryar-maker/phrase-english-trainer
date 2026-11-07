/* Session controls share the same engine across choice and optional production. */
function start(mode,params={}) {
  if(['lab','transform','recall','complete'].includes(mode)&&!Trainer.state.settings.production){
    $('#main').innerHTML=header(labels[mode],'Цей режим потребує складання або написання речень.')+'<section class="card"><p>Увімкніть "Хочу складати речення сам" на головній, коли будете готові.</p><a class="primary" href="#home">Налаштування практики</a></section>';return;
  }
  session={mode,params,index:0,correct:0,answered:0,skipped:0,recent:[],q:null,locked:false,blocks:[],started:Date.now(),length:params.question?1:Trainer.state.settings.daily==='classic'&&mode==='daily'?20:Trainer.state.settings.length,
    labStart:[1,5,7].includes(Number(params.stage))?Number(params.stage)-1:0,labIndex:null};
  renderSession();
}
function currentPool() {
  if(session.params.question)return EXERCISES.filter(q=>q.id===session.params.question&&(Trainer.state.settings.production||Trainer.choice(q)));
  if(session.mode==='daily')return Trainer.dailyPool(session.index,session.length,session.recent);
  return Trainer.pool(session.mode,session.params.category,session.params.pattern,session.params.period==='today').filter(q=>!session.params.tense||q.grammar?.tense===session.params.tense);
}
function renderSession() {
  const {mode,params}=session;
  $('#main').innerHTML=`<div class="trainer">${header(labels[mode]||labels.mixed,'Спочатку зміст, потім конструкція. Підказка доступна за кнопкою.')}${mode==='tenses'?'<div class="topics"><a href="#tenses">Обидва часи</a><a href="#tenses?tense=present-simple">Тільки Present Simple</a><a href="#tenses?tense=present-continuous">Тільки Present Continuous</a></div>':''}${mode==='daily'||mode==='lab'?'':filters(mode,params)}<p class="mini">Рівень ${Trainer.level()} · <a href="#home">Налаштування</a></p><div id="exercise"></div></div>`;
  for(const id of ['category','pattern','period']){const el=$('#'+id);if(el)el.onchange=()=>{location.hash=mode+'?'+new URLSearchParams({category:$('#category')?.value||'',pattern:id==='category'?'':$('#pattern')?.value||'',period:$('#period')?.value||'all'});};}
  nextQuestion();
}
function nextQuestion() {
  if(session.index>=session.length){finish();return;}
  let q;
  if(session.mode==='lab'&&session.labIndex!==null)q=session.labStages[session.labIndex];
  else {
    q=Trainer.pick(currentPool(),session.recent);
    if(q){session.recent.push(q.id);if(session.mode==='lab'){session.labStages=PhraseLab.stages(q);session.labIndex=session.labStart;q=session.labStages[session.labIndex];}}
  }
  if(!q){if(session.index>0){finish();return;}$('#exercise').innerHTML='<section class="card empty"><h2>Немає вправ за цим фільтром</h2><p>Оберіть іншу тему або змініть рівень у налаштуваннях. Запитання з What / Where / Why відкриваються автоматично після стабільної практики простих запитань; рівень можна обрати вручну.</p><a class="primary" href="#home">На головну</a></section>';return;}
  session.q=q;session.locked=false;session.blocks=[];session.revealed=false;session.shown=performance.now();
  session.options=shuffle(q.options||[]);session.blockOptions=shuffle((q.blocks||[]).map((text,id)=>({text,id})));
  const context=q.contextUk&&q.contextUk!==q.question?q.contextUk:'';
  $('#exercise').innerHTML=`<div class="session-head"><span>Вправа ${session.index+1} із ${session.length}</span><span>Правильних: ${session.correct}</span></div><progress max="${session.length}" value="${session.index}" aria-label="Прогрес заняття"></progress>
    ${q.labStage?`<ol class="learning-path">${PhraseLab.names.map((s,i)=>`<li ${i===session.labIndex?'aria-current="step"':''}>${i+1}. ${s}</li>`).join('')}</ol>`:''}
    <section class="question-card"><span class="tag">${q.stageName||typeLabels[q.type]||'Перетвори речення'}</span>${context?`<p class="context">${esc(context)}</p>`:''}${q.original?`<p class="original" lang="en">${esc(q.original)}</p>`:''}<h2>${esc(q.question)}</h2><div id="answer-area">${answerUI(q)}</div><div id="feedback" aria-live="polite"></div><div class="actions"><button class="quiet" id="explain">${icon('lightbulb')} Пояснити</button><button class="quiet" id="bookmark">${savedLabel(q.id)}</button><button class="quiet" id="skip">${icon('skip-forward')} Пропустити</button><button class="primary" id="next" hidden>Далі ${icon('arrow-right')}</button></div></section><p class="hint">${q.options?'1-4 - обрати відповідь. ':''}Enter - ${q.options?'далі':'перевірити / далі'}</p>`;
  bindAnswer(q);
  $('#explain').onclick=()=>{session.revealed=true;$('#feedback').innerHTML=`<div class="feedback"><b>Розберімо правило</b>${PhraseLearning.render(q,{hint:true})}<p class="mini">Відповідь після підказки - без впливу на статистику.</p></div>`;};
  $('#bookmark').onclick=()=>{Trainer.toggleSaved(q.id);$('#bookmark').innerHTML=savedLabel(q.id);};
  $('#skip').onclick=()=>{rememberAttempt(q,{kind:'skip'});session.skipped++;session.labIndex=null;session.index++;nextQuestion();};
  $('#next').onclick=advance;
  $('#exercise').scrollIntoView({block:'start'});
}
function advance(){if(!session?.locked)return;if(session.labIndex!==null&&session.labIndex<6)session.labIndex++;else{session.labIndex=null;session.index++;}nextQuestion();}
function shuffle(array){const result=[...array];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
function answerUI(q) {
  if(q.options)return `<div class="options">${session.options.map((a,i)=>`<button class="answer" data-option="${i}"><kbd>${i+1}</kbd><span>${esc(a)}</span></button>`).join('')}</div>`;
  if(q.type==='blocks')return '<div id="assembled" class="assembled blocks" aria-label="Ваше речення" aria-live="polite"></div><div id="blocks" class="blocks"></div><div class="actions"><button class="quiet" id="undo">Скасувати останній</button><button class="quiet" id="clear-blocks">Очистити</button><button class="primary" id="check">Перевірити</button></div>';
  return '<form id="answer-form"><label for="typed" class="mini">Ваша відповідь англійською</label><input id="typed" class="text-answer" autocomplete="off" spellcheck="false" placeholder="Напишіть відповідь"><button class="primary" type="submit">Перевірити</button></form>';
}
function bindAnswer(q) {
  document.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>submit(session.options[Number(b.dataset.option)]));
  if(q.type==='blocks'){renderBlocks();$('#check').onclick=()=>submit(session.blocks.map(id=>q.blocks[id]).join(' '));$('#undo').onclick=()=>{session.blocks.pop();renderBlocks();};$('#clear-blocks').onclick=()=>{session.blocks=[];renderBlocks();};}
  if($('#answer-form'))$('#answer-form').onsubmit=e=>{e.preventDefault();submit($('#typed').value);};
}
function renderBlocks() {
  const q=session.q;
  $('#assembled').innerHTML=session.blocks.map(id=>`<button data-remove="${id}" aria-label="Прибрати ${esc(q.blocks[id])}">${esc(q.blocks[id])}</button>`).join('')||'<span class="mini">Додайте блоки в потрібному порядку</span>';
  $('#blocks').innerHTML=session.blockOptions.map(({text,id})=>`<button data-block="${id}" ${session.blocks.includes(id)?'disabled':''}>${esc(text)}</button>`).join('');
  document.querySelectorAll('[data-block]').forEach(b=>b.onclick=()=>{if(!session.locked){session.blocks.push(Number(b.dataset.block));renderBlocks();}});
  document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{if(!session.locked){session.blocks=session.blocks.filter(id=>id!==Number(b.dataset.remove));renderBlocks();}});
}
function submit(answer) {
  if(!session?.q||session.locked)return;
  const q=session.q;
  if(q.type==='blocks'&&session.blocks.length!==q.blocks.length){toast('Додайте всі блоки до речення.');return;}
  if(!String(answer).trim()&&q.correctAnswer!=='—'){toast('Спочатку введіть відповідь.');return;}
  session.locked=true;
  const result=Trainer.grade(q,answer),correct=result.status==='correct',uncertain=result.status==='uncertain';
  const scaffold=!!q.labStage&&(q.labStage<5||(q.labStage===7&&session.labStart<6));
  rememberAttempt(q,{answer,correct:uncertain?null:correct,kind:uncertain?'uncertain':'answer',hinted:session.revealed||scaffold});
  if(!session.revealed&&!uncertain&&!scaffold){session.answered++;if(correct)session.correct++;Trainer.record(q,correct,!!Trainer.state.questions[q.id]?.wrong,{answer});}
  document.querySelectorAll('#answer-area button, #answer-area input').forEach(b=>b.disabled=true);
  document.querySelectorAll('[data-option]').forEach(b=>{const option=session.options[Number(b.dataset.option)];if(Trainer.validate(q,option))b.classList.add('correct');else if(option===answer)b.classList.add('wrong');});
  const why=q.wrongExplanations?.[answer]||q.explanationUk;
  const followup=!correct&&!uncertain?Trainer.followup(q,session.recent):null;
  const followupOptions=followup?shuffle(followup.options):[];
  $('#feedback').innerHTML=`<div class="feedback ${!correct&&!uncertain?'error':''}"><strong>${uncertain?'Можливо, це теж правильний варіант. Перевір альтернативи.':correct?'Правильно!':'Розберімо відповідь'}</strong>
    ${session.revealed||scaffold?'<p class="mini">Навчання з опорою - не враховано у статистиці самостійних відповідей.</p>':''}
    ${uncertain?'<p>Цієї фрази немає серед перевірених відповідей. Оцінку не виставлено. Порівняйте значення й форму:</p>':!correct?`<p><b>${esc(PhraseGrading.labels[result.error]||'Повторимо правило')}</b></p><p>${esc(why)}</p><p class="mini">Ваш вибір: <span lang="en">${esc(answer)}</span></p>`:`<p>${esc(q.explanationUk)}</p>`}
    <p class="correct-sentence"><span class="mini">${uncertain?'Перевірений варіант':'Правильна відповідь'}</span><b lang="en">${esc(PhraseLearning.solution(q))}</b></p>
    ${uncertain?`<ul>${PhraseGrading.accepted(q).map(a=>`<li lang="en">${esc(a)}</li>`).join('')}</ul>`:''}
    ${!correct&&!uncertain&&q.examples?.length?`<p>Ще приклад: <b lang="en">${esc(q.examples.find(x=>x!==q.correctAnswer)||q.examples[0])}</b></p><p class="mini">До щоденної практики додано споріднені завдання для повторення.</p>`:''}
    ${q.diagram?`<p class="sentence-diagram">${esc(q.diagram)}</p>`:''}${followup?`<section class="micro-followup"><h3>Коротка перевірка без балів</h3><p>${esc(followup.contextUk!==followup.question?followup.contextUk:'')}</p><p><b>${esc(followup.question)}</b></p><div class="options">${followupOptions.map((o,i)=>`<button class="answer" data-followup="${i}">${esc(o)}</button>`).join('')}</div><p id="followup-result" aria-live="polite"></p></section>`:''}<details class="history-explanation"><summary>Детальніше</summary>${PhraseLearning.render(q,{answer})}</details>
    ${session.mode==='rapid'?`<p class="mini">${((performance.now()-session.shown)/1000).toFixed(1)} с</p>`:''}</div>`;
  $('#next').hidden=false;$('#next').textContent=uncertain?'Пропустити без оцінки':'Далі';$('#skip').hidden=true;$('#explain').hidden=true;$('#next').focus({preventScroll:true});$('#feedback').scrollIntoView({block:'start'});
  let followed=false;
  document.querySelectorAll('[data-followup]').forEach(b=>b.onclick=()=>{if(followed)return;followed=true;const value=followupOptions[Number(b.dataset.followup)],right=Trainer.validate(followup,value);rememberAttempt(followup,{answer:value,correct:right,hinted:true});session.recent.push(followup.id);document.querySelectorAll('[data-followup]').forEach(x=>x.disabled=true);$('#followup-result').textContent=(right?'Правильно. ':'Порівняйте: ')+PhraseLearning.solution(followup)+' '+followup.explanationUk;});
  if(Trainer.storageError)toast('Збереження недоступне. Попередні дані не перезаписано. Експортуйте результати перед закриттям.');
}
function finish() {
  $('#exercise').innerHTML=`<div class="card empty"><span class="tag">ЗАНЯТТЯ ЗАВЕРШЕНО</span><h2>Ще один крок до природної англійської.</h2><p>${session.correct} правильних із ${session.answered} самостійних відповідей. Пропущено: ${session.skipped}.</p><p class="mini">Розпізнавання, складання та самостійне відтворення рахуються окремо. Для засвоєння потрібна практика в різні дні.</p><div class="actions"><button class="quiet" id="restart">Ще одне заняття</button><a class="primary" href="#stats">Мій прогрес</a><a class="quiet" href="#home">На головну</a></div></div>`;
  $('#restart').onclick=()=>start(session.mode,session.params);session.q=null;
}
