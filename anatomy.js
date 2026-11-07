/* Authored roles depend on full context. No automatic English parser. */
(() => {
  const roles={subject:'Хто / що',auxiliary:'Допоміжне дієслово',link:'Дієслово-зв’язка',verb:'Основне дієслово',adjective:'Прикметник',preposition:'Прийменник',activity:'Заняття (-ing)',other:'Інші слова'};
  const examples=[
    ['He is working.','Він зараз працює. Is допомагає побудувати Continuous.',[['He','subject'],['is','auxiliary'],['working','verb']]],
    ['He is tired.','Він втомлений. Is пов’язує людину з її станом, tired - прикметник.',[['He','subject'],['is','link'],['tired','adjective']]],
    ['He works.','Його звична діяльність. Works - основне дієслово із -s.',[['He','subject'],['works','verb']]],
    ['He is boring.','Він нудний. Boring описує його, це прикметник.',[['He','subject'],['is','link'],['boring','adjective']]],
    ['He is boring everyone.','Він зараз усім набридає. Boring називає дію, everyone - на кого вона спрямована.',[['He','subject'],['is','auxiliary'],['boring','verb'],['everyone','other']]],
    ['The demo is interesting.','Демонстрація цікава. Опис її властивості.',[['The demo','subject'],['is','link'],['interesting','adjective']]],
    ['The demo is interesting investors in our app.','Демонстрація зараз викликає в інвесторів інтерес до застосунку. Interest someone in something - зацікавлювати когось чимось.',[['The demo','subject'],['is','auxiliary'],['interesting','verb'],['investors','other'],['in','preposition'],['our app','other']]],
    ['The noise is annoying.','Шум дратівливий. Опис його властивості.',[['The noise','subject'],['is','link'],['annoying','adjective']]],
    ['The noise is annoying my cat.','Шум зараз дратує мого кота. Дія спрямована на кота.',[['The noise','subject'],['is','auxiliary'],['annoying','verb'],['my cat','other']]],
    ['The message is confusing.','Повідомлення незрозуміле. Confusing описує повідомлення.',[['The message','subject'],['is','link'],['confusing','adjective']]],
    ['The message is confusing users.','Повідомлення зараз збиває користувачів з пантелику.',[['The message','subject'],['is','auxiliary'],['confusing','verb'],['users','other']]],
    ['The trip is exciting.','Поїздка захоплива. Опис властивості.',[['The trip','subject'],['is','link'],['exciting','adjective']]],
    ['The news is exciting the team.','Новина зараз викликає захоплення в команди.',[['The news','subject'],['is','auxiliary'],['exciting','verb'],['the team','other']]],
    ['The workout is tiring.','Тренування виснажливе. Опис властивості.',[['The workout','subject'],['is','link'],['tiring','adjective']]],
    ['The workout is tiring me out.','Тренування зараз мене виснажує. Tire someone out - виснажувати.',[['The workout','subject'],['is','auxiliary'],['tiring','verb'],['me out','other']]],
    ['I like swimming.','Like - основне дієслово Present Simple. Swimming називає заняття. Це не Continuous. I like to swim теж правильно.',[['I','subject'],['like','verb'],['swimming','activity']]],
    ['I am interested in learning English.','Interested - стан, learning - заняття після прийменника in. Це не Present Continuous.',[['I','subject'],['am','link'],['interested','adjective'],['in','preposition'],['learning English','activity']]],
    ['Does he work at home?','Does стоїть перед he, work без -s. At home - готове сполучення.',[['Does','auxiliary'],['he','subject'],['work','verb'],['at','preposition'],['home','other']]]
  ];
  window.PhraseAnatomy={roles,examples};
})();
