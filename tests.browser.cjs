/* Optional real-browser QA. Uses a fresh browser context, never personal data. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const base=process.env.PHRASE_URL||'http://127.0.0.1:8766/';
const artifacts=process.env.PHRASE_SCREENSHOTS||path.join(__dirname,'../../work/phrase-2-qa');
fs.mkdirSync(artifacts,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 try {
 const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage(),errors=[],external=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(!r.url().startsWith(base)&&!r.url().startsWith('blob:'))external.push(r.url());});
 await page.goto(base);await page.locator('#production').waitFor();assert.equal(await page.locator('#production').isChecked(),false);
 await page.screenshot({path:path.join(artifacts,'desktop-home.png')});
 const route=async hash=>{await page.goto(base+'#'+hash);await page.waitForFunction(h=>location.hash==='#'+h,hash);};
 await page.locator('#daily-plan').selectOption('classic');await route('daily');await page.locator('[data-option]').first().waitFor();assert.equal(await page.evaluate(()=>session.length),20);await route('home');await page.locator('#daily-plan').selectOption('adaptive');
 await route('daily');await page.locator('[data-option]').first().waitFor();assert.equal(await page.locator('#typed').count(),0);
 await route('mixed?question=qa-002');await page.getByRole('button',{name:/Does he works\?/}).click();
 await page.locator('#feedback').filter({hasText:'Після does'}).waitFor();assert.equal(await page.evaluate(()=>Trainer.state.answers),1);
 await page.locator('[data-followup]').first().click();assert.equal(await page.evaluate(()=>Trainer.state.answers),1);assert((await page.locator('#followup-result').innerText()).length>20);
 assert.equal(await page.locator('#feedback details').getAttribute('open'),null);
 assert.equal(await page.evaluate(()=>PhraseHistory.all().then(a=>a.length)),2);
 await route('mixed?question=pc-001');assert.equal(await page.locator('#feedback').innerText(),'');
 await page.locator('#explain').click();await page.getByRole('button',{name:/^\d is$/}).click();assert.equal(await page.evaluate(()=>Trainer.state.answers),1);
 await route('home');await page.locator('#production').check();await page.locator('#difficulty').selectOption('3');await page.locator('#session-length').selectOption('5');
 await route('mixed?question=tr-002');await page.locator('#typed').fill("She isn't cooking dinner.");await page.locator('#answer-form button').click();await page.locator('#feedback').filter({hasText:'Правильно!'}).waitFor();
 await route('mixed?question=pc-036');await page.locator('#typed').fill('Today I am traveling by train.');const count=await page.evaluate(()=>Trainer.state.answers);await page.locator('#answer-form button').click();await page.getByRole('button',{name:'Пропустити без оцінки'}).waitFor();assert.equal(await page.evaluate(()=>Trainer.state.answers),count);
 await route('lab?stage=5');await page.locator('[data-block]').first().click();await page.locator('#undo').click();assert.equal(await page.locator('[data-remove]').count(),0);await page.locator('[data-block]').first().click();await page.locator('#clear-blocks').click();
 const blockCount=await page.locator('[data-block]').count();for(let i=0;i<blockCount;i++)await page.locator(`[data-block="${i}"]`).click();await page.locator('#check').click();await page.locator('#feedback').filter({hasText:'Правильно!'}).waitFor();await page.locator('#next').click();
 assert.equal(await page.locator('[aria-current="step"]').innerText(),'6. Запитання');
 const labAnswer=await page.evaluate(()=>session.q.correctAnswer);await page.locator('#typed').fill(labAnswer);await page.locator('#answer-form button').click();await page.locator('#next').click();assert.equal(await page.locator('[aria-current="step"]').innerText(),'7. Самостійно');
 const preRecall=await page.evaluate(()=>Trainer.totals('recall').total);await page.locator('#typed').fill(await page.evaluate(()=>session.q.correctAnswer));await page.locator('#answer-form button').click();assert.equal(await page.evaluate(()=>Trainer.totals('recall').total),preRecall,'guided final stage earned independent recall');
 await route('lab');for(let i=1;i<=7;i++){
   assert((await page.locator('[aria-current="step"]').innerText()).startsWith(i+'.'));
   const q=await page.evaluate(()=>({answer:session.q.correctAnswer,options:session.options,type:session.q.type,blocks:session.q.blocks}));
   if(q.options.length){await page.locator(`[data-option="${q.options.indexOf(q.answer)}"]`).click();}
   else if(q.blocks){for(let b=0;b<q.blocks.length;b++)await page.locator(`[data-block="${b}"]`).click();await page.locator('#check').click();}
   else{await page.locator('#typed').fill(q.answer);await page.locator('#answer-form button').click();}
   if(i<7)await page.locator('#next').click();
 }
 for(const mode of ['contrast','real','weak','review','mixed','rapid','daily','tenses','questions','ing','transform','recall','complete','sheet','stats','history','saved','anatomy']){await route(mode);await page.locator('h1').waitFor();assert(!(await page.locator('main').innerText()).includes('undefined'),mode);}
 await route('anatomy');await page.locator('#anatomy-example').selectOption('3');await page.locator('[data-role="2"]').click();assert((await page.locator('#anatomy-role').innerText()).includes('Прикметник'));await page.locator('#anatomy-example').selectOption('4');await page.locator('[data-role="2"]').click();assert((await page.locator('#anatomy-role').innerText()).includes('Основне дієслово'));
 await page.screenshot({path:path.join(artifacts,'desktop-anatomy.png')});
 await route('history');await page.locator('#history-list').waitFor();assert((await page.locator('#history-list').innerText()).includes('Без оцінки'));
 const historyCount=await page.evaluate(()=>PhraseHistory.all().then(a=>a.length));assert(historyCount>10);
 // Exercise real file export/import and IndexedDB replacement in this isolated context.
 await route('stats');const downloadEvent=page.waitForEvent('download');await page.locator('#export').click();const download=await downloadEvent;const backup=path.join(artifacts,'browser-backup.json');await download.saveAs(backup);const copy=JSON.parse(fs.readFileSync(backup));assert.equal(copy.version,2);assert.equal(copy.history.attempts.length,historyCount);
 page.on('dialog',d=>d.accept());await Promise.all([page.waitForEvent('load'),page.locator('#import').setInputFiles(backup)]);await page.locator('#export').waitFor();assert.equal(await page.evaluate(()=>PhraseHistory.all().then(a=>a.length)),historyCount);
 for(const width of [390,320]){await page.setViewportSize({width,height:844});for(const mode of ['home','mixed?question=sc-002','lab?stage=5','anatomy','stats','history']){await route(mode);await page.locator('h1').waitFor();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),width+' '+mode);}}
 await page.setViewportSize({width:390,height:844});await route('lab?stage=5');await page.locator('.question-card').scrollIntoViewIfNeeded();await page.screenshot({path:path.join(artifacts,'mobile-lab.png')});await page.locator('#theme').click();await page.locator('.question-card').scrollIntoViewIfNeeded();await page.screenshot({path:path.join(artifacts,'mobile-dark.png')});
 assert.equal(await page.locator('body').evaluate(el=>el.classList.contains('dark')),true);
 assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
 // Seed a schema-1 snapshot before startup on a separate empty origin context.
 const migration=await browser.newContext();await migration.addInitScript(()=>{if(!localStorage.getItem('phrase-progress-v1'))localStorage.setItem('phrase-progress-v1',JSON.stringify({version:1,answers:4,correct:3,streak:2,best:2,reviewed:1,patterns:{'at home':{correct:3,wrong:1,run:2,due:42}},questions:{'ex-0001':{correct:3,wrong:1,wrongDays:['2026-11-06']}},days:{'2026-11-06':{answers:4,correct:3}},saved:['ex-0001','ex-0200'],theme:'dark'}));});
 const migrated=await migration.newPage();await migrated.goto(base);assert.equal(await migrated.evaluate(()=>Trainer.state.answers),4);assert.equal(await migrated.evaluate(()=>Trainer.state.saved.length),2);assert(await migrated.evaluate(()=>!!localStorage.getItem('phrase-progress-v1-backup')));assert(await migrated.locator('body').evaluate(el=>el.classList.contains('dark')));await migration.close();
 console.log('PASS browser: all routes, default choices, hints, precise feedback, transforms, unknown answers, seven lab stages, blocks undo/clear, IndexedDB history, real export/import, v1 migration, light/dark, 1440/390/320px, no overflow, runtime errors or external asset requests.');
 console.log('Screenshots: '+artifacts);
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
