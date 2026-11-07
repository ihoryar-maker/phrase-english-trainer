"""Build the checked-in, authored Phrase 2 curriculum. No runtime generation or AI."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
items = []
def add(prefix, category, target, answer, explanation, examples, **extra):
    number = sum(q['id'].startswith(prefix+'-') for q in items)+1
    q = dict(id=f'{prefix}-{number:03}', category=category, type='contrast',
             difficulty=2, question=target, contextUk=target, promptUk='Оберіть відповідь для цієї ситуації.',
             correctAnswer=answer, explanationUk=explanation, examples=examples,
             skillId=category, pattern=category, errorTags=[], **{})
    q.update(extra)
    if q.get('options'):
        q['options'] = [answer]+q['options']
        q['wrongExplanations'] = {o: explanation for o in q['options'][1:]}
        q['errorByAnswer'] = {o:q['errorTags'][min(i,len(q['errorTags'])-1)] for i,o in enumerate(q['options'][1:])} if q['errorTags'] else {}
    q['learning'] = {'why':explanation, 'remember':q.get('diagram','Спочатку зміст, потім конструкція, потім форма слова.')}
    items.append(q)
    return q

# Fifty distinct present actions. The authored scene and verb are never just a renamed person.
continuous = '''He|work|working|from home today|Він сьогодні працює з дому.
She|write|writing|a bug report now|Вона зараз пише звіт про помилку.
They|build|building|a website this week|Вони цього тижня створюють сайт.
I|wait|waiting|for a reply right now|Я просто зараз чекаю на відповідь.
We|test|testing|the payment form now|Ми зараз тестуємо форму оплати.
My cat|sleep|sleeping|on my keyboard right now|Мій кіт просто зараз спить на клавіатурі.
The developer|fix|fixing|a login bug now|Розробник зараз виправляє помилку входу.
You|talk|talking|to a muted microphone right now|Ти зараз говориш у вимкнений мікрофон.
The manager|read|reading|the error message now|Менеджер зараз читає повідомлення про помилку.
Our team|deploy|deploying|a small update today|Наша команда сьогодні випускає невелике оновлення.
I|look|looking|for my boarding pass now|Я зараз шукаю посадковий талон.
She|run|running|to the gate right now|Вона просто зараз біжить до виходу на посадку.
They|sit|sitting|near the elevator now|Вони зараз сидять біля ліфта.
We|make|making|coffee before the call|Ми зараз готуємо каву перед дзвінком.
He|listen|listening|to the client right now|Він просто зараз слухає клієнта.
The cat|judge|judging|my code right now|Кіт зараз оцінює мій код. Вигляд у нього скептичний.
I|learn|learning|English during my break|Я зараз вивчаю англійську під час перерви.
You|share|sharing|the wrong screen right now|Ти зараз показуєш не той екран.
She|check|checking|the flight time now|Вона зараз перевіряє час рейсу.
We|plan|planning|a weekend trip right now|Ми просто зараз плануємо поїздку на вихідні.
He|cook|cooking|dinner now|Він зараз готує вечерю.
I|clean|cleaning|my desk today|Я сьогодні прибираю свій стіл.
They|move|moving|the meeting to Friday|Вони зараз переносять зустріч на п'ятницю.
She|draw|drawing|a new icon now|Вона зараз малює нову іконку.
We|review|reviewing|a pull request now|Ми зараз переглядаємо запит на злиття коду.
The browser|load|loading|the page right now|Браузер зараз завантажує сторінку.
I|send|sending|the file to my coworker|Я зараз надсилаю файл колезі.
The guests|ask|asking|for directions now|Гості зараз питають дорогу.
My laptop|install|installing|an update right now|Мій ноутбук зараз встановлює оновлення.
You|use|using|my charger right now|Ти зараз користуєшся моїм зарядним пристроєм.
He|drink|drinking|cold coffee again|Він зараз знову п'є холодну каву.
They|watch|watching|a movie at home now|Вони зараз дивляться фільм удома.
She|pay|paying|for the tickets now|Вона зараз платить за квитки.
We|get|getting|ready for the demo|Ми зараз готуємося до демонстрації.
The dog|carry|carrying|my shoe right now|Собака зараз несе мій черевик.
I|travel|traveling|by train today|Я сьогодні подорожую потягом.
She|stay|staying|at a hotel this week|Вона цього тижня живе в готелі.
We|work|working|on the backend today|Ми сьогодні працюємо над бекендом.
They|search|searching|for the hotel entrance|Вони зараз шукають вхід до готелю.
I|change|changing|the button color now|Я зараз змінюю колір кнопки.
He|close|closing|unused tabs now|Він зараз закриває непотрібні вкладки.
You|open|opening|the wrong repository now|Ти зараз відкриваєш не той репозиторій.
We|discuss|discussing|the deadline right now|Ми просто зараз обговорюємо кінцевий термін.
She|explain|explaining|the bug to the team|Вона зараз пояснює команді помилку.
I|take|taking|a break right now|Я просто зараз відпочиваю на перерві.
They|stand|standing|at the station now|Вони зараз стоять на станції.
He|read|reading|a Slack message now|Він зараз читає повідомлення у Slack.
We|wait|waiting|for the delayed flight|Ми зараз чекаємо на затриманий рейс.
The sphynx cat|hide|hiding|under my sweater|Кіт-сфінкс зараз ховається під моїм светром.
I|lie|lying|on the sofa right now|Я просто зараз лежу на дивані.'''
def auxiliary(subject):
    return 'am' if subject=='I' else 'are' if subject in ['They','We','You','The guests'] else 'is'
for i,line in enumerate(continuous.splitlines()):
    subject,verb,ing,tail,uk=line.split('|'); aux=auxiliary(subject)
    sentence=f'{subject} {aux} {ing} {tail}.'
    grammar=dict(tense='present-continuous',subject=subject,auxiliary=aux,mainVerb=verb,verbForm=ing,form='statement')
    base=dict(pattern='continuous-affirmative',skillId='continuous-affirmative',grammar=grammar,
              errorTags=['wrong-be','missing-ing','auxiliary-missing'],diagram=f'{subject} + {aux} + {ing} + {tail}',
              correctSentence=sentence, family='present-structure')
    if i<20:
        q=add('pc','present-continuous',f'{subject} ___ {ing} {tail}.',aux,
              f'Дія відбувається зараз або тимчасово. З {subject} потрібне {aux}; далі {ing}.',
              ['He is working.','They are working.'],difficulty=1,contextUk=uk,
              options=[a for a in ['am','is','are','does'] if a!=aux][:3],type='multiple-choice',**base)
    else:
        q=add('pc','present-continuous',uk,sentence,
              f'Тут поточна дія: {subject} + {aux} + {ing}. Не пропускайте {aux}.',
              ['She is writing an email.','We are waiting for a reply.'],
              type='blocks' if i<35 else 'translation',difficulty=2,**base)
        if i<35:q['blocks']=[subject,aux,ing,tail]
        q['knownWrong']=[f'{subject} {ing} {tail}.',f'{subject} {aux} {verb} {tail}.']

# Twenty contrast pairs: explicit habit vs current/temporary meaning.
pairs = '''He works from home.|He is working from home this week.|Це його звичайне місце роботи, не лише цей тиждень.|Цього тижня офіс ремонтують. Опиши тимчасову роботу з дому.
My cat sleeps on the sofa.|My cat is sleeping on the sofa now.|Розкажи про звичку кота спати на дивані.|Подивись на кота: він просто зараз спить на дивані.
He builds rockets.|He is building a rocket now.|Уявний персонаж заробляє будівництвом ракет. Назви звичайну діяльність.|Уявний персонаж зараз працює над однією ракетою.
I fix bugs every day.|I am fixing a bug right now.|Це моє щоденне заняття.|Опиши виправлення однієї помилки просто зараз.
She drinks coffee every morning.|She is drinking coffee now.|Її звичний ранковий напій - кава.|Зараз у неї в руках кава, і вона її п'є.
They take the train to work.|They are taking the train today.|Зазвичай вони їздять на роботу потягом.|Лише сьогодні вони обрали потяг замість автомобіля.
We meet on Saturday.|We are meeting right now.|Щосуботи ми зустрічаємося за звичним розкладом.|Наша зустріч уже триває, опиши саме цей момент.
The server runs all night.|The server is running a backup now.|Сервер зазвичай працює всю ніч.|Просто зараз сервер виконує резервне копіювання.
I usually cook at home.|I am cooking at home tonight.|Назви звичку готувати вдома.|Сьогодні ввечері я вже на кухні й готую.
She teaches English.|She is teaching an online class now.|Назви її роботу, а не дію цієї хвилини.|Зараз вона проводить онлайн-урок.
He reads every pull request.|He is reading this pull request now.|За правилом команди він читає кожен запит на злиття.|Зараз він відкрив цей запит і читає його.
I walk to the office.|I am walking to the office now.|Зазвичай я добираюся до офісу пішки.|Я зараз у дорозі до офісу, йду пішки.
They play games on the weekend.|They are playing a game now.|Це їхнє звичне заняття на вихідних.|Гра вже триває. Опиши, що вони роблять зараз.
She checks the logs every morning.|She is checking the logs now.|Перевірка логів - її ранкова звичка.|Зараз сталася помилка, і вона читає логи.
We use Git at work.|We are using a temporary server today.|Розкажи, яким інструментом команда користується постійно.|Лише сьогодні команда користується тимчасовим сервером.
My cat judges everyone.|My cat is judging my code right now.|Жарт про незмінну звичку мого кота оцінювати всіх.|Жарт про те, що кіт зараз дивиться саме на мій код.
I listen to music while I work.|I am listening to a podcast now.|Розкажи про звичку слухати музику під час роботи.|Зараз у навушниках подкаст. Опиши поточну дію.
He writes tests before lunch.|He is writing a test now.|Це його звичний робочий розклад.|Він просто зараз пише один тест.
We stay at this hotel every year.|We are staying at this hotel this week.|Ми щороку обираємо цей готель.|Ми тимчасово живемо в цьому готелі цього тижня.
She travels for work.|She is traveling to Boston today.|Відрядження - постійна частина її роботи.|Опиши її сьогоднішню подорож до Бостона.'''
for line in pairs.splitlines():
    simple,cont,habit,current=line.split('|')
    for answer,other,context,tense in [(simple,cont,habit,'present-simple'),(cont,simple,current,'present-continuous')]:
        third=answer.replace(' is ',' does ').replace(' am ',' do ').replace(' are ',' do ') if tense.endswith('continuous') else 'He is works.'
        q=add('sc','simple-continuous',context,answer,
              'Обидві основні фрази граматично можливі. Present Simple описує звичку; Present Continuous - поточну або тимчасову дію. Тут вирішує опис ситуації.',
              [simple,cont],options=[other,third],skillId=tense,pattern=tense,grammar={'tense':tense,'form':'statement'},
              errorTags=['tense-choice','unnecessary-auxiliary'],family='present-structure')
        q['wrongExplanations'][other]='Фраза граматично правильна, але описує інший час або іншу ситуацію. Зістав її з українською умовою.'

questions = '''Do you work?|Чи ти працюєш взагалі? Не про цю хвилину.|Are you work?|Does you work?|do-simple|1
Does he work?|Чи він працює взагалі?|Does he works?|Do he work?|does-simple|1
Are you working?|Ти зараз працюєш?|Do you working?|Is you working?|be-continuous-question|1
Is he sleeping?|Він зараз спить?|Does he sleeping?|Is he sleep?|be-continuous-question|1
Are you tired?|Ти втомлений? Запитай нейтрально.|Do you tired?|Is you tired?|be-state-question|1
Is she a developer?|Вона розробниця? Запитай про професію.|Does she a developer?|Is she developer?|be-state-question|1
Can he drive?|Він уміє водити?|Does he can drive?|Can he drives?|can-question|1
Am I sharing my screen?|Я зараз показую свій екран?|Do I sharing my screen?|Is I sharing my screen?|be-continuous-question|1
Does the app work offline?|Застосунок узагалі працює без інтернету?|Does the app works offline?|Is the app work offline?|does-simple|1
Do they need help?|Їм потрібна допомога?|Are they need help?|Does they need help?|do-simple|1
What does your husband do?|Запитай про професію чоловіка співрозмовниці.|What is your husband doing?|What does your husband does?|wh-simple|2
What is he doing?|Що він робить просто зараз?|What does he do?|What does he doing?|wh-continuous|2
Where are they going?|Куди вони зараз ідуть?|Where do they going?|Where they are going?|wh-continuous|2
Why is she laughing?|Чому вона зараз сміється?|Why does she laughing?|Why she is laughing?|wh-continuous|2
Where does she live?|Де вона живе постійно?|Where does she lives?|Where she lives?|wh-simple|2
When do we deploy?|Коли ми зазвичай випускаємо оновлення?|When we deploy?|When are we deploy?|wh-simple|2
Is the cat sitting on my laptop?|Кіт зараз сидить на моєму ноутбуці?|Does the cat sitting on my laptop?|Is the cat sit on my laptop?|be-continuous-question|2
Does he want to visit Mars?|У вигаданій сцені запитай, чи він хоче відвідати Марс.|Is he wanting to visit Mars?|Does he wants to visit Mars?|stative|2
Do you understand the error?|Ти розумієш цю помилку?|Are you understanding the error?|Does you understand the error?|stative|2
Does she own this apartment?|Ця квартира належить їй?|Is she owning this apartment?|Does she owns this apartment?|stative|2
Do they believe the story?|Вони вірять цій історії?|Are they believing the story?|Does they believe the story?|stative|2
Does he know the password?|Він знає пароль?|Is he knowing the password?|Does he knows the password?|stative|2
Can we talk after the meeting?|Ми можемо поговорити після зустрічі?|Do we can talk after the meeting?|Can we to talk after the meeting?|can-question|1
Is she working or taking a break?|Запитай нейтрально: вона зараз працює чи відпочиває?|Does she working or taking a break?|She is working or taking a break?|be-continuous-question|3
Why does the build fail every Friday?|Чому збірка падає щоп'ятниці? Це вже звичка.|Why does the build fails every Friday?|Why is the build fail every Friday?|wh-simple|3'''
for line in questions.splitlines():
    answer,uk,w1,w2,skill,level=line.split('|')
    tense='present-continuous' if skill in ['be-continuous-question','wh-continuous'] else 'present-simple'
    explanation={'stative':'Want, know, believe, understand та own у цих значеннях описують стан. Для нейтрального запитання потрібні do/does + базова форма.',
                 'can-question':'Can ставимо перед тим, хто діє. Після can дієслово без to і без -s.',
                 'be-state-question':'Стан або професія: am/is/are + хто + опис. Do/does тут не потрібні.'}.get(skill,
                 'Поточна дія: am/is/are + хто + verb-ing. У нейтральному запитанні допоміжне слово стоїть перед підметом.' if tense=='present-continuous' else 'Звична дія: do/does + хто + базове дієслово. Після does не додаємо -s; WH-слово стоїть на початку.')
    q=add('qa','questions',uk,answer,explanation,['Does he work?','Is he working?'],options=[w1,w2],difficulty=int(level),
          skillId=skill,pattern=skill,errorTags=['auxiliary-choice','question-formation'],grammar={'tense':tense,'form':'question'},family='present-structure')
    if skill=='stative':q['wrongExplanations'][w1]='У цьому звичайному значенні описуємо стан. Тут природно використати Present Simple; це не заборона всіх можливих інших значень дієслова.'
    if skill in ['wh-simple','wh-continuous'] and ('doing?' in w1 or w1=='What does he do?'):
        q['wrongExplanations'][w1]='Це правильне запитання, але про інше: професію/звичну діяльність або поточну дію. Перевір зміст умови.'

ing_rows = '''I like swimming.|Мені подобається плавати. Обери одну правильну форму.|I like to swimming.|like-activity|Like допускає і swimming, і to swim. Але to swimming після like тут не підходить.
I like to swim.|Мені подобається плавати. Використай to.|I like to swimming.|like-infinitive|Після to у цьому сполученні потрібне swim. I like swimming теж правильно.
I enjoy working.|Мені подобається працювати. Використай enjoy.|I enjoy to work.|enjoy-ing|Після enjoy називаємо заняття через -ing: enjoy working.
I love cooking.|Я люблю готувати. Використай форму з -ing.|I love to cooking.|love-activity|Love допускає cooking та to cook. Змішувати to з cooking не треба.
I want to swim.|Я хочу поплавати, не назвати заняття як предмет бажання.|I want swimming.|want-infinitive|Хочу виконати дію: want to + базове дієслово.
He wants to travel.|Він хоче подорожувати.|He wants to traveling.|want-infinitive|He wants + to travel. -s стоїть на wants, після to базова форма.
She wants to learn.|Вона хоче вчитися.|She want to learning.|want-infinitive|She wants + to learn. Не змішуйте третю особу та -ing.
I am swimming.|Я зараз плаваю.|I am swim.|continuous-affirmative|Поточна дія: am + swimming. Це не конструкція like swimming.
I am tired of waiting.|Мені набридло чекати.|I am tired of wait.|preposition-ing|Після of називаємо дію формою waiting.
I am interested in learning English.|Мені цікаво вивчати англійську.|I am interested in learn English.|preposition-ing|Після in перед дією потрібне learning. Interested описує стан.
I am good at programming.|Я добре програмую.|I am good at program.|preposition-ing|Після at називаємо діяльність через programming.
I stopped smoking.|Я кинув курити, більше цього не роблю.|I stopped to smoke.|stop-meaning|Stopped smoking - припинив курити. Stopped to smoke - зупинив іншу дію, щоб покурити.
I stopped to smoke.|Я перервав прогулянку, щоб покурити.|I stopped smoking.|stop-meaning|Stopped to smoke називає мету зупинки. Stopped smoking означає припинив курити.'''
for line in ing_rows.splitlines():
    answer,uk,wrong,skill,why=line.split('|')
    q=add('ing','ing',uk,answer,why,['I enjoy swimming.','I want to swim.'],options=[wrong],skillId=skill,pattern=skill,
          errorTags=['gerund-infinitive'],family='ing-forms',difficulty=3 if skill=='stop-meaning' else 1,
          grammar={'tense':'present-continuous' if answer=='I am swimming.' else 'none','form':'statement'})
    q['knownWrong']=[wrong] if skill!='stop-meaning' else []
for base,right,wrong,why in [
('work','working','workking','Додаємо -ing без інших змін.'),('write','writing','writeing','Німа кінцева e зникає перед -ing.'),
('make','making','makeing','Німа кінцева e зникає перед -ing.'),('run','running','runing','Короткий наголошений голосний перед останньою приголосною: подвоюємо n.'),
('sit','sitting','siting','У sit подвоюємо t перед -ing.'),('lie','lying','lieing','Кінцеве ie змінюється на y: lie -> lying.'),
('travel','traveling','travelling','У цьому тренажері обираємо американське traveling. Travelling - правильний британський варіант.')]:
    q=add('ing','ing',f'Обери американське написання форми -ing для {base}.',right,why,['write -> writing','travel -> traveling'],
          options=[wrong],difficulty=1,skillId='ing-spelling',pattern='ing-spelling',errorTags=['ing-spelling'],family='ing-forms',grammar={'form':'spelling','base':base})
    if base=='travel':q['validOtherContext']=[wrong]

transforms = '''He works from home.|Зроби нейтральне запитання.|Does he work from home?|Does he works from home?|does-simple|present-simple|question
She is cooking dinner.|Зроби заперечення.|She is not cooking dinner.|She does not cooking dinner.|continuous-negative|present-continuous|negative
They work every day.|Заміни They на He.|He works every day.|He work every day.|simple-affirmative|present-simple|statement
He is sleeping.|Зроби нейтральне запитання.|Is he sleeping?|Does he sleeping?|be-continuous-question|present-continuous|question
Does she like coffee?|Зроби ствердження.|She likes coffee.|She like coffee.|simple-affirmative|present-simple|statement
He works on Sunday.|Зроби заперечення.|He does not work on Sunday.|He does not works on Sunday.|simple-negative|present-simple|negative
They are testing the app.|Заміни They на She.|She is testing the app.|She are testing the app.|continuous-affirmative|present-continuous|statement
I fix bugs every day.|Зміни на поточну дію, every day заміни на now.|I am fixing bugs now.|I am fix bugs now.|continuous-affirmative|present-continuous|statement
We are waiting for a reply.|Зроби заперечення.|We are not waiting for a reply.|We do not waiting for a reply.|continuous-negative|present-continuous|negative
She writes code every day.|Зроби запитання про звичку.|Does she write code every day?|Does she writes code every day?|does-simple|present-simple|question
He is working now.|Зроби звичку: now заміни на every day.|He works every day.|He is works every day.|simple-affirmative|present-simple|statement
They have a meeting.|Зроби запитання.|Do they have a meeting?|Are they have a meeting?|do-simple|present-simple|question
She is tired.|Зроби нейтральне запитання.|Is she tired?|Does she tired?|be-state-question|present-simple|question
He can drive.|Зроби заперечення.|He cannot drive.|He does not can drive.|can-question|present-simple|negative
You are going to the office.|Запитай куди. Заміни to the office на Where на початку.|Where are you going?|Where you are going?|wh-continuous|present-continuous|question'''
for line in transforms.splitlines():
    original,task,answer,wrong,skill,tense,form=line.split('|')
    q=add('tr','transformations',task,answer,'Змінюй конструкцію цілком. Do/does забирає -s; am/is/are у запитанні переходить перед підметом, а not стоїть після допоміжного слова.',
          [original,answer],type='transform',original=original,knownWrong=[wrong],skillId=skill,pattern=skill,difficulty=2,
          errorTags=['question-formation' if form=='question' else 'negative-formation' if form=='negative' else 'verb-form'],
          diagram=original+' -> '+answer,grammar={'tense':tense,'form':form},family='present-structure')

integrated = [
('У звичайні дні я виправляю помилки, а сьогодні створюю нові. Обери фразу про сьогодні.',"I usually fix bugs, but today I am creating new ones.",'creating','fix',['creating new ones','fix bugs'],'Зазвичай - fix; сьогодні - am creating.'),
('Колега постійно працює вдома, але зараз на зустрічі в офісі. Яка частина описує звичку?', 'My colleague normally works from home, but today he is attending a meeting at the office.','works from home','is attending',['works from home','is attending'],'Normally + works описує звичку. Is attending - тимчасова дія.'),
('Кіт зазвичай судить усіх, зараз - мій код. Яка частина описує поточну дію?', 'My cat usually judges everyone, but right now he is judging my code.','is judging','judges',['is judging','judges'],'Right now + is judging. Звичка - judges.'),
('Обери звичайну думку: я вважаю, що ти правий.','I think you are right.','I think you are right.','I am thinking you are right.',None,'Think як думка - Present Simple. Thinking about означає обдумувати.'),
('Я зараз обдумую проблему, не висловлюю переконання.','I am thinking about the problem.','I am thinking about the problem.','I think you are right.',None,'Thinking about - процес обдумування зараз. Think you are right - думка.'),
('Я володію автомобілем.','I have a car.','I have a car.','I am having a car.',None,'Have як володіння - Present Simple. Having lunch - дія, обідати.'),
('Я зараз обідаю.','I am having lunch.','I am having lunch.','I am have lunch.',None,'Having lunch - зараз обідаю. Це інше значення, ніж have a car.'),
('Він пішов, не попрощавшись. Обери правильне продовження.','He left without ___.','saying goodbye','say goodbye',None,'Після without дієслово має форму -ing: without saying.'),
('Зазвичай ми чекаємо на потяг на цій станції.','We usually wait ___ the train at this station.','for','to',None,'Wait for + на кого/що. At the station - де чекаємо.'),
('Зараз вона слухає музику в офісі.','She is listening ___ music in the office.','to','for',None,'Listen to music - слухати музику. Is listening - дія зараз.')
]
for i,(context,sentence,answer,wrong,_,why) in enumerate(integrated):
    if i==0: answer,wrong='am creating','fix'
    q=add('life','integrated',sentence,answer,why,['I work at home.','I am working at home today.'],
          contextUk=context,promptUk='Обери частину речення або слово за умовою.',type='multiple-choice',options=[wrong],correctSentence=sentence.replace('___',answer),
          difficulty=3,pattern='integrated-present',skillId='integrated-present',errorTags=['tense-choice' if i<7 else 'gerund-infinitive' if i==7 else 'wrong-preposition'],family='present-structure')

# Exact authored error mappings take precedence over general pattern labels.
question_errors = [
 ['auxiliary-choice','auxiliary-choice'],['s-after-does','auxiliary-choice'],['auxiliary-choice','wrong-be'],
 ['auxiliary-choice','missing-ing'],['auxiliary-choice','wrong-be'],['auxiliary-choice','missing-article'],
 ['unnecessary-auxiliary','modal-base'],['auxiliary-choice','wrong-be'],['s-after-does','auxiliary-choice'],
 ['unnecessary-auxiliary','auxiliary-choice'],['tense-choice','s-after-does'],['tense-choice','auxiliary-choice'],
 ['auxiliary-choice','word-order'],['auxiliary-choice','word-order'],['s-after-does','word-order'],
 ['word-order','auxiliary-choice'],['auxiliary-choice','missing-ing'],['tense-choice','s-after-does'],
 ['tense-choice','auxiliary-choice'],['tense-choice','s-after-does'],['tense-choice','auxiliary-choice'],
 ['tense-choice','s-after-does'],['unnecessary-auxiliary','gerund-infinitive'],['auxiliary-choice','word-order'],
 ['s-after-does','auxiliary-choice']]
for q in items:
    q['errorTags'] = [{'auxiliary-missing':'missing-auxiliary','wrong-preposition':'preposition','verb-form':'third-person-s'}.get(t,t) for t in q['errorTags']]
    if q['id'].startswith('pc-'):
        q['skillId']='present-continuous'
        if q.get('options'):
            q['errorByAnswer']={o:'auxiliary-choice' if o=='does' else 'wrong-be' for o in q['options'][1:]}
        else:q['errorByAnswer']=dict(zip(q['knownWrong'],['missing-auxiliary','missing-ing']))
    if q['id'].startswith('sc-'):
        q['difficulty']=1 if int(q['id'][-3:])<=6 else 2
        q['errorByAnswer'][q['options'][2]]='unnecessary-auxiliary' if q['grammar']['tense']=='present-simple' else 'auxiliary-choice'
        if q['options'][2]=='He is works.':q['wrongExplanations'][q['options'][2]]='Тут змішано дві конструкції. Works уже є Present Simple: He works. Для дії зараз потрібна пара is + working: He is working.'
    if q['id'].startswith('qa-'):
        q['errorByAnswer']=dict(zip(q['options'][1:],question_errors[int(q['id'][-3:])-1]))
    if q['id'].startswith('tr-'):
        tags=['s-after-does','auxiliary-choice','third-person-s','auxiliary-choice','third-person-s','s-after-does','wrong-be','missing-ing','auxiliary-choice','s-after-does','unnecessary-auxiliary','auxiliary-choice','auxiliary-choice','unnecessary-auxiliary','word-order']
        q['errorByAnswer']={q['knownWrong'][0]:tags[int(q['id'][-3:])-1]}
        q['skillId']=q['grammar']['tense']
    if q['id'].startswith('life-'):
        q['errorByAnswer']={q['options'][1]:q['errorTags'][0]}
        q['grammar']={'form':'statement','tense':'present-continuous' if int(q['id'][-3:]) in [1,3,5,7,10] else 'present-simple' if int(q['id'][-3:]) in [2,4,6,9] else 'none'}
    if q['id']=='ing-008':q['skillId']='present-continuous';q['errorByAnswer']={q['options'][1]:'missing-ing'}
# Negative contrasts are available even with independent writing disabled.
simple_errors=[
 ('He is works from home.','unnecessary-auxiliary'),
 ('My cat sleep on the sofa.','third-person-s'),
 ('He is build rockets.','unnecessary-auxiliary'),
 ('I am fix bugs every day.','unnecessary-auxiliary'),
 ('She drink coffee every morning.','third-person-s'),
 ('They takes the train to work.','unexpected-s'),
 ('We are meet on Saturday.','unnecessary-auxiliary'),
 ('The server run all night.','third-person-s'),
 ('I am usually cook at home.','unnecessary-auxiliary'),
 ('She teach English.','third-person-s'),
 ('He read every pull request.','third-person-s'),
 ('I am walk to the office.','unnecessary-auxiliary'),
 ('They plays games on the weekend.','unexpected-s'),
 ('She is checks the logs every morning.','unnecessary-auxiliary'),
 ('We are use Git at work.','unnecessary-auxiliary'),
 ('My cat judge everyone.','third-person-s'),
 ('I am listen to music while I work.','unnecessary-auxiliary'),
 ('He write tests before lunch.','third-person-s')]
for i,(bad,tag) in enumerate(simple_errors):
    q=next(q for q in items if q['id']==f'sc-{i*2+1:03}')
    other=q['options'][1]
    q['options']=[q['correctAnswer'],other,bad]
    why='У звичайному ствердженні Present Simple не потрібні am/is/are перед дієсловом. He works і He is working - різні конструкції.' if tag=='unnecessary-auxiliary' else 'У Present Simple he/she/it потребують -s/-es; I/you/we/they використовують базову форму.'
    q['wrongExplanations']={other:q['wrongExplanations'][other],bad:why}
    q['errorByAnswer']={other:'tense-choice',bad:tag}
for id,bad,tag in [('sc-002','He working from home this week.','missing-auxiliary'),('sc-006','He is build a rocket now.','missing-ing')]:
    q=next(q for q in items if q['id']==id)
    q['options'].append(bad);q['errorByAnswer'][bad]=tag
    q['wrongExplanations'][bad]='Для дії зараз потрібні обидві частини: am/is/are + verb-ing. He is working; he is building.'
negative_pairs=[
 ('He does not work on Sunday.','He is not working today.','Він зазвичай не працює по неділях.','Він не працює саме сьогодні, хоча зазвичай працює.','He does not works on Sunday.','He does not working today.'),
 ('We do not deploy on Friday.','We are not deploying right now.','Ми за правилом не випускаємо оновлення у п\'ятницю.','Просто зараз ми не випускаємо оновлення.','We are not deploy on Friday.','We not deploying right now.')]
for pair_index,(simple,continuous,uk1,uk2,bad1,bad2) in enumerate(negative_pairs):
    for j,(answer,other,uk,bad) in enumerate([(simple,continuous,uk1,bad1),(continuous,simple,uk2,bad2)]):
        q=next(q for q in items if q['id']==f'sc-{37+pair_index*2+j:03}')
        q.update(question=uk,contextUk=uk,correctAnswer=answer,options=[answer,other,bad],examples=[simple,continuous])
        q['grammar']['form']='negative'
        why='Simple: do/does + not + базове дієслово. Continuous: am/is/are + not + verb-ing. Тут зміст задає українська ситуація.'
        q['explanationUk']=why;q['learning']['why']=why
        q['wrongExplanations']={other:'Це граматично правильна фраза для іншої ситуації.',bad:why}
        q['errorByAnswer']={other:'tense-choice',bad:'negative-formation'}
# A small authored Simple curriculum also supports all seven lab stages.
simple_lab=[
 ('sc-001','He','work','works','from home','does'),
 ('sc-003','My cat','sleep','sleeps','on the sofa','does'),
 ('sc-005','He','build','builds','rockets','does'),
 ('sc-007','I','fix','fixes','bugs every day','do'),
 ('sc-009','She','drink','drinks','coffee every morning','does'),
 ('sc-011','They','take','takes','the train to work','do'),
 ('sc-013','We','meet','meets','on Saturday','do'),
 ('sc-015','The server','run','runs','all night','does')]
for id,subject,verb,third,tail,question_aux in simple_lab:
    q=next(q for q in items if q['id']==id)
    q['grammar'].update(subject=subject,mainVerb=verb,verbForm=third if question_aux=='does' else verb,thirdPerson=third,tail=tail,questionAux=question_aux)
    q['correctSentence']=q['correctAnswer']
    q['labContextUk']={'sc-001':'Він зазвичай працює з дому.','sc-003':'Мій кіт зазвичай спить на дивані.','sc-005':'Він будує ракети. Це його звична діяльність.','sc-007':'Я щодня виправляю помилки.','sc-009':"Вона щоранку п'є каву.",'sc-011':'Вони зазвичай їздять на роботу потягом.','sc-013':'Ми зустрічаємося в суботу. Це наш звичний розклад.','sc-015':'Сервер зазвичай працює всю ніч.'}[id]
assert len(items)==160, len(items)
categories={'present-continuous':'Present Continuous','simple-continuous':'Present Simple / Continuous','questions':'Запитання та відповіді','ing':'Коли потрібне -ing?','transformations':'Перетвори речення','integrated':'Граматика в житті'}
(ROOT/'exercises-v2.js').write_text('// Authored curriculum; regenerate with scripts/build-v2-content.py.\nObject.assign(window.CATEGORIES, '+json.dumps(categories,ensure_ascii=False)+');\nwindow.EXERCISES.push(...'+json.dumps(items,ensure_ascii=False,indent=2)+');\n',encoding='utf-8')
print({c:sum(q['category']==c for q in items) for c in categories})
