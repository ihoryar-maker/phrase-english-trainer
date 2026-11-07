/* Conservative matching: unknown free text is unscored, never guessed wrong. */
(() => {
  function normalize(s) {
    return String(s).trim().toLowerCase().replace(/[’‘]/g,"'")
      .replace(/\b(it|he|she)'s been\b/g,'$1 has been').replace(/\b(it|he|she)'s\b/g,'$1 is')
      .replace(/\bi'm\b/g,'i am').replace(/\bcan't\b/g,'cannot').replace(/\bwon't\b/g,'will not')
      .replace(/n't\b/g,' not').replace(/\blet's\b/g,'let us').replace(/\b(you|we|they)'re\b/g,'$1 are')
      .replace(/[.!?]+$/g,'').replace(/\s+/g,' ').trim();
  }
  const accepted = q => [...new Set([q.correctAnswer,...(q.alternatives||[])])];
  const validate = (q,a) => accepted(q).some(v=>normalize(v)===normalize(a));
  const labels = {
    'missing-auxiliary':'Пропущено допоміжне дієслово', 'unnecessary-auxiliary':'Зайве допоміжне дієслово',
    'wrong-be':'Неправильна форма am / is / are', 's-after-does':'Після does потрібне дієслово без -s', 'auxiliary-base':'Після do / does потрібна базова форма',
    'third-person-s':'Для he / she / it потрібне -s', 'unexpected-s':'Для I / you / we / they потрібна базова форма', 'missing-ing':'Потрібна форма з -ing',
    'ing-spelling':'Написання форми з -ing', 'auxiliary-choice':'Do / does чи am / is / are?',
    'word-order':'Порядок слів', 'preposition':'Прийменник у сполученні', 'article':'Вибір артикля',
    'missing-article':'Пропущено артикль', 'unnecessary-article':'Зайвий артикль',
    'gerund-infinitive':'Форма -ing чи to + дієслово?', 'tense-choice':'Звичка чи дія зараз?',
    'question-formation':'Побудова запитання', 'negative-formation':'Побудова заперечення', 'modal-base':'Після can потрібна базова форма дієслова', 'meaning':'Сенс ситуації', 'subject':'Хто виконує дію?', 'pattern':'Це сполучення потребує повторення'
  };
  function error(q,a) {
    const entry=Object.entries(q.errorByAnswer||{}).find(([v])=>normalize(v)===normalize(a));
    if(entry)return entry[1];
    return q.errorTags?.[0] || ({articles:'article',chunks:'preposition',time:'preposition',place:'preposition',movement:'preposition',order:'word-order',do:'auxiliary-choice'}[q.category]) || 'pattern';
  }
  function grade(q,a) {
    if(validate(q,a))return {status:'correct'};
    if(q.options || q.type==='blocks' || (q.knownWrong||[]).some(v=>normalize(v)===normalize(a)))return {status:'incorrect',error:error(q,a)};
    return {status:'uncertain'};
  }
  window.PhraseGrading={normalize,validate,accepted,grade,error,labels};
})();
