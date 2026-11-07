/* Explicit grammar metadata, never suffix-based sentence parsing. */
(() => {
  const names=['Зміст','Хто діє?','Допоміжне слово','Форма дієслова','Блоки','Запитання','Самостійно'];
  function simpleStages(source) {
    source={...source,contextUk:source.labContextUk||source.contextUk};
    const g=source.grammar,{subject,mainVerb:verb,verbForm:form,thirdPerson,tail,questionAux}=g;
    const sentence=source.correctSentence,person=subject==='I'?'I':subject[0].toLowerCase()+subject.slice(1);
    const question=questionAux[0].toUpperCase()+questionAux.slice(1)+' '+person+' '+verb+' '+tail+'?';
    const base={...source,options:undefined,alternatives:undefined,knownWrong:[],type:'contrast',sourceId:source.id};
    const rows=[
      {question:source.contextUk,correctAnswer:'Звична, регулярна дія',correctSentence:'Звична, регулярна дія',options:['Звична, регулярна дія','Дія зараз або тимчасово']},
      {question:source.contextUk+' Хто виконує дію?',correctAnswer:subject,correctSentence:subject,options:[subject,...['I','He','They'].filter(s=>s!==subject).slice(0,2)]},
      {question:`${subject} ___ ${form} ${tail}. Чи потрібне допоміжне слово у звичайному ствердженні?`,correctAnswer:'Без допоміжного слова',correctSentence:sentence,options:['Без допоміжного слова','is','does'],explanationUk:'У звичайному ствердженні Present Simple основне дієслово працює саме. Do/does потрібні для запитань і заперечень.'},
      {question:`${subject} ___ ${tail}.`,correctAnswer:form,correctSentence:sentence,options:[...new Set([verb,thirdPerson,'is '+form])]},
      {type:'blocks',question:source.contextUk,correctAnswer:sentence,correctSentence:sentence,blocks:[subject,form,tail]},
      {type:'transform',original:sentence,question:'Перетвори на нейтральне запитання про звичку.',correctAnswer:question,correctSentence:question,knownWrong:[sentence,question.replace(' '+verb+' ',' '+thirdPerson+' ')],errorByAnswer:{[sentence]:'word-order',[question.replace(' '+verb+' ',' '+thirdPerson+' ')]:questionAux==='does'?'s-after-does':'auxiliary-base'},grammar:{...g,form:'question'}},
      {type:'translation',question:source.contextUk+' Переклади основне речення за змістом.',correctAnswer:sentence,correctSentence:sentence,alternatives:[`${subject} usually ${form} ${tail}.`],knownWrong:[`${subject} is ${form} ${tail}.`],errorByAnswer:{[`${subject} is ${form} ${tail}.`]:'unnecessary-auxiliary'}}
    ];
    return rows.map((row,i)=>({...base,...row,labStage:i+1,stageName:names[i],errorTags:[['meaning','subject','unnecessary-auxiliary','third-person-s','word-order','question-formation','unnecessary-auxiliary'][i]],errorByAnswer:row.errorByAnswer||(i===3?{[verb]:questionAux==='does'?'third-person-s':'unexpected-s',[thirdPerson]:'unexpected-s',['is '+form]:'unnecessary-auxiliary'}:{}),wrongExplanations:{},learning:{why:row.explanationUk||source.explanationUk,remember:sentence+' / '+question}}));
  }
  function stages(source) {
    if(source.grammar.tense==='present-simple')return simpleStages(source);
    const g=source.grammar, subject=g.subject,aux=g.auxiliary,verb=g.mainVerb,ing=g.verbForm;
    const sentence=source.correctSentence;
    const tail=sentence.slice(`${subject} ${aux} ${ing} `.length).replace(/\.$/,'');
    const person=subject==='I'?'I':subject[0].toLowerCase()+subject.slice(1);
    const question=`${aux[0].toUpperCase()+aux.slice(1)} ${person} ${ing} ${tail}?`;
    const base={...source,id:source.id,options:undefined,alternatives:undefined,blocks:undefined,knownWrong:[],type:'contrast',sourceId:source.id};
    return [
      {...base,question:source.contextUk,correctAnswer:'Дія зараз або тимчасово',correctSentence:'Дія зараз або тимчасово',options:['Звична, регулярна дія','Дія зараз або тимчасово']},
      {...base,question:source.contextUk+' Хто виконує дію?',correctAnswer:subject,correctSentence:subject,options:[...new Set([subject,...['I','He','They'].filter(s=>s!==subject).slice(0,2)])]},
      {...base,question:`${subject} ___ ${ing} ${tail}.`,correctAnswer:aux,correctSentence:sentence,options:['am','is','are','does']},
      {...base,question:`${subject} ${aux} ___ ${tail}.`,correctAnswer:ing,correctSentence:sentence,options:[verb,ing,verb+'s'],errorByAnswer:{[verb]:'missing-ing',[verb+'s']:'missing-ing'}},
      {...base,type:'blocks',question:source.contextUk,correctAnswer:sentence,correctSentence:sentence,blocks:[subject,aux,ing,tail]},
      {...base,type:'transform',question:'Перетвори на нейтральне запитання.',original:sentence,correctAnswer:question,correctSentence:question,knownWrong:[sentence,`${subject} ${aux} ${ing} ${tail}?`],errorByAnswer:{[sentence]:'word-order'},grammar:{...g,form:'question'}},
      {...base,type:'translation',question:source.contextUk,correctAnswer:sentence,correctSentence:sentence,knownWrong:[`${subject} ${ing} ${tail}.`,`${subject} ${aux} ${verb} ${tail}.`],errorByAnswer:{[`${subject} ${ing} ${tail}.`]:'missing-auxiliary',[`${subject} ${aux} ${verb} ${tail}.`]:'missing-ing'}}
    ].map((q,i)=>({...q,labStage:i+1,stageName:names[i],errorTags:[['meaning','subject','wrong-be','missing-ing','word-order','question-formation','missing-auxiliary'][i]],errorByAnswer:i<2?{}:i===4?{}:q.errorByAnswer,wrongExplanations:i<2?{}:q.wrongExplanations}));
  }
  window.PhraseLab={names,stages};
})();
