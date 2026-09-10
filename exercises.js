// Curated American English contrasts and related recall exercises.
window.CATEGORIES = {"time": "Час", "place": "Місце", "movement": "Рух", "articles": "Артиклі", "chunks": "Сталі сполучення", "pronouns": "This / it / its / it’s", "be": "Am / is / are", "have": "Have / has", "do": "Do / does", "frequency": "Частотність", "order": "Порядок слів", "routine": "Щоденні справи", "work": "Робота", "travel": "Подорожі", "meetings": "Зустрічі та плани"};
window.EXERCISES = [
  {
    "id": "ex-0001",
    "difficulty": 1,
    "category": "time",
    "pattern": "on + day",
    "explanationUk": "З днями використовуємо on.",
    "examples": [
      "on Monday",
      "on my birthday"
    ],
    "contextUk": "Зустрінемось у суботу.",
    "type": "contrast",
    "question": "Зустрінемось у суботу.",
    "options": [
      "on Saturday",
      "in Saturday",
      "at Saturday"
    ],
    "correctAnswer": "on Saturday",
    "wrongExplanations": {
      "in Saturday": "З днями використовуємо on.",
      "at Saturday": "З днями використовуємо on."
    }
  },
  {
    "id": "ex-0002",
    "difficulty": 1,
    "category": "time",
    "pattern": "on + day",
    "explanationUk": "З днями використовуємо on.",
    "examples": [
      "on Monday",
      "on my birthday"
    ],
    "contextUk": "Зустрінемось у суботу.",
    "type": "translation",
    "question": "у суботу",
    "correctAnswer": "on Saturday",
    "alternatives": [
      "on Saturday"
    ]
  },
  {
    "id": "ex-0003",
    "difficulty": 1,
    "category": "time",
    "pattern": "at + time",
    "explanationUk": "Точний час — at.",
    "examples": [
      "at 5:30",
      "at 8 pm"
    ],
    "contextUk": "Зустріч о шостій.",
    "type": "contrast",
    "question": "Зустріч о шостій.",
    "options": [
      "at 6",
      "on 6",
      "in 6"
    ],
    "correctAnswer": "at 6",
    "wrongExplanations": {
      "on 6": "Точний час — at.",
      "in 6": "Точний час — at."
    }
  },
  {
    "id": "ex-0004",
    "difficulty": 1,
    "category": "time",
    "pattern": "at + time",
    "explanationUk": "Точний час — at.",
    "examples": [
      "at 5:30",
      "at 8 pm"
    ],
    "contextUk": "Зустріч о шостій.",
    "type": "translation",
    "question": "о шостій",
    "correctAnswer": "at 6",
    "alternatives": [
      "at 6"
    ]
  },
  {
    "id": "ex-0005",
    "difficulty": 1,
    "category": "time",
    "pattern": "in + month",
    "explanationUk": "Місяці — з in.",
    "examples": [
      "in January",
      "in April"
    ],
    "contextUk": "Відпустка у вересні.",
    "type": "contrast",
    "question": "Відпустка у вересні.",
    "options": [
      "in September",
      "on September",
      "at September"
    ],
    "correctAnswer": "in September",
    "wrongExplanations": {
      "on September": "Місяці — з in.",
      "at September": "Місяці — з in."
    }
  },
  {
    "id": "ex-0006",
    "difficulty": 1,
    "category": "time",
    "pattern": "in + month",
    "explanationUk": "Місяці — з in.",
    "examples": [
      "in January",
      "in April"
    ],
    "contextUk": "Відпустка у вересні.",
    "type": "translation",
    "question": "у вересні",
    "correctAnswer": "in September",
    "alternatives": [
      "in September"
    ]
  },
  {
    "id": "ex-0007",
    "difficulty": 1,
    "category": "time",
    "pattern": "in + year",
    "explanationUk": "Роки — з in.",
    "examples": [
      "in 2020",
      "in 1995"
    ],
    "contextUk": "Це відбулося у 2026 році.",
    "type": "contrast",
    "question": "Це відбулося у 2026 році.",
    "options": [
      "in 2026",
      "at 2026",
      "on 2026"
    ],
    "correctAnswer": "in 2026",
    "wrongExplanations": {
      "at 2026": "Роки — з in.",
      "on 2026": "Роки — з in."
    }
  },
  {
    "id": "ex-0008",
    "difficulty": 1,
    "category": "time",
    "pattern": "in + year",
    "explanationUk": "Роки — з in.",
    "examples": [
      "in 2020",
      "in 1995"
    ],
    "contextUk": "Це відбулося у 2026 році.",
    "type": "translation",
    "question": "у 2026 році",
    "correctAnswer": "in 2026",
    "alternatives": [
      "in 2026"
    ]
  },
  {
    "id": "ex-0009",
    "difficulty": 1,
    "category": "time",
    "pattern": "in + part of day",
    "explanationUk": "Частини дня: in the morning / afternoon / evening.",
    "examples": [
      "in the afternoon",
      "in the evening"
    ],
    "contextUk": "Я п’ю каву вранці.",
    "type": "contrast",
    "question": "Я п’ю каву вранці.",
    "options": [
      "in the morning",
      "at the morning",
      "on the morning"
    ],
    "correctAnswer": "in the morning",
    "wrongExplanations": {
      "at the morning": "Частини дня: in the morning / afternoon / evening.",
      "on the morning": "Частини дня: in the morning / afternoon / evening."
    }
  },
  {
    "id": "ex-0010",
    "difficulty": 1,
    "category": "time",
    "pattern": "in + part of day",
    "explanationUk": "Частини дня: in the morning / afternoon / evening.",
    "examples": [
      "in the afternoon",
      "in the evening"
    ],
    "contextUk": "Я п’ю каву вранці.",
    "type": "translation",
    "question": "вранці",
    "correctAnswer": "in the morning",
    "alternatives": [
      "in the morning"
    ]
  },
  {
    "id": "ex-0011",
    "difficulty": 1,
    "category": "time",
    "pattern": "at night",
    "explanationUk": "Запам’ятайте цілий вираз at night.",
    "examples": [
      "I work at night.",
      "It is cold at night."
    ],
    "contextUk": "Уночі тут тихо.",
    "type": "contrast",
    "question": "Уночі тут тихо.",
    "options": [
      "at night",
      "in night",
      "on night"
    ],
    "correctAnswer": "at night",
    "wrongExplanations": {
      "in night": "Запам’ятайте цілий вираз at night.",
      "on night": "Запам’ятайте цілий вираз at night."
    }
  },
  {
    "id": "ex-0012",
    "difficulty": 1,
    "category": "time",
    "pattern": "at night",
    "explanationUk": "Запам’ятайте цілий вираз at night.",
    "examples": [
      "I work at night.",
      "It is cold at night."
    ],
    "contextUk": "Уночі тут тихо.",
    "type": "translation",
    "question": "уночі",
    "correctAnswer": "at night",
    "alternatives": [
      "at night"
    ]
  },
  {
    "id": "ex-0013",
    "difficulty": 1,
    "category": "time",
    "pattern": "on + date",
    "explanationUk": "Конкретна дата — on.",
    "examples": [
      "on July 4",
      "on December 25"
    ],
    "contextUk": "Подія — 10 вересня.",
    "type": "contrast",
    "question": "Подія — 10 вересня.",
    "options": [
      "on September 10",
      "in September 10",
      "at September 10"
    ],
    "correctAnswer": "on September 10",
    "wrongExplanations": {
      "in September 10": "Конкретна дата — on.",
      "at September 10": "Конкретна дата — on."
    }
  },
  {
    "id": "ex-0014",
    "difficulty": 1,
    "category": "time",
    "pattern": "on + date",
    "explanationUk": "Конкретна дата — on.",
    "examples": [
      "on July 4",
      "on December 25"
    ],
    "contextUk": "Подія — 10 вересня.",
    "type": "translation",
    "question": "10 вересня",
    "correctAnswer": "on September 10",
    "alternatives": [
      "on September 10"
    ]
  },
  {
    "id": "ex-0015",
    "difficulty": 1,
    "category": "time",
    "pattern": "on the weekend",
    "explanationUk": "У повсякденній американській англійській: on the weekend.",
    "examples": [
      "I relax on the weekend.",
      "We meet on the weekend."
    ],
    "contextUk": "Працюю у вихідні (американський варіант).",
    "type": "contrast",
    "question": "Працюю у вихідні (американський варіант).",
    "options": [
      "on the weekend",
      "in the weekend",
      "on weekend"
    ],
    "correctAnswer": "on the weekend",
    "wrongExplanations": {
      "in the weekend": "У повсякденній американській англійській: on the weekend.",
      "on weekend": "У повсякденній американській англійській: on the weekend."
    }
  },
  {
    "id": "ex-0016",
    "difficulty": 1,
    "category": "time",
    "pattern": "on the weekend",
    "explanationUk": "У повсякденній американській англійській: on the weekend.",
    "examples": [
      "I relax on the weekend.",
      "We meet on the weekend."
    ],
    "contextUk": "Працюю у вихідні (американський варіант).",
    "type": "translation",
    "question": "у вихідні",
    "correctAnswer": "on the weekend",
    "alternatives": [
      "on the weekend"
    ]
  },
  {
    "id": "ex-0017",
    "difficulty": 1,
    "category": "time",
    "pattern": "at + time",
    "explanationUk": "Noon і midnight — з at.",
    "examples": [
      "at midnight",
      "at noon"
    ],
    "contextUk": "Обідаємо опівдні.",
    "type": "contrast",
    "question": "Обідаємо опівдні.",
    "options": [
      "at noon",
      "in noon",
      "on noon"
    ],
    "correctAnswer": "at noon",
    "wrongExplanations": {
      "in noon": "Noon і midnight — з at.",
      "on noon": "Noon і midnight — з at."
    }
  },
  {
    "id": "ex-0018",
    "difficulty": 1,
    "category": "time",
    "pattern": "at + time",
    "explanationUk": "Noon і midnight — з at.",
    "examples": [
      "at midnight",
      "at noon"
    ],
    "contextUk": "Обідаємо опівдні.",
    "type": "translation",
    "question": "опівдні",
    "correctAnswer": "at noon",
    "alternatives": [
      "at noon"
    ]
  },
  {
    "id": "ex-0019",
    "difficulty": 1,
    "category": "time",
    "pattern": "in + season",
    "explanationUk": "Пори року — з in.",
    "examples": [
      "in winter",
      "in spring"
    ],
    "contextUk": "Подорожуємо влітку.",
    "type": "contrast",
    "question": "Подорожуємо влітку.",
    "options": [
      "in summer",
      "at summer",
      "on summer"
    ],
    "correctAnswer": "in summer",
    "wrongExplanations": {
      "at summer": "Пори року — з in.",
      "on summer": "Пори року — з in."
    }
  },
  {
    "id": "ex-0020",
    "difficulty": 1,
    "category": "time",
    "pattern": "in + season",
    "explanationUk": "Пори року — з in.",
    "examples": [
      "in winter",
      "in spring"
    ],
    "contextUk": "Подорожуємо влітку.",
    "type": "translation",
    "question": "влітку",
    "correctAnswer": "in summer",
    "alternatives": [
      "in summer"
    ]
  },
  {
    "id": "ex-0021",
    "difficulty": 1,
    "category": "time",
    "pattern": "on + specific morning",
    "explanationUk": "Коли названо конкретний день, використовуємо on.",
    "examples": [
      "on Friday evening",
      "on Sunday afternoon"
    ],
    "contextUk": "Зустрінемось у понеділок вранці.",
    "type": "contrast",
    "question": "Зустрінемось у понеділок вранці.",
    "options": [
      "on Monday morning",
      "in Monday morning",
      "at Monday morning"
    ],
    "correctAnswer": "on Monday morning",
    "wrongExplanations": {
      "in Monday morning": "Коли названо конкретний день, використовуємо on.",
      "at Monday morning": "Коли названо конкретний день, використовуємо on."
    }
  },
  {
    "id": "ex-0022",
    "difficulty": 1,
    "category": "time",
    "pattern": "on + specific morning",
    "explanationUk": "Коли названо конкретний день, використовуємо on.",
    "examples": [
      "on Friday evening",
      "on Sunday afternoon"
    ],
    "contextUk": "Зустрінемось у понеділок вранці.",
    "type": "translation",
    "question": "у понеділок вранці",
    "correctAnswer": "on Monday morning",
    "alternatives": [
      "on Monday morning"
    ]
  },
  {
    "id": "ex-0023",
    "difficulty": 1,
    "category": "time",
    "pattern": "no preposition + next",
    "explanationUk": "Перед next / last / every у часі прийменник не потрібен.",
    "examples": [
      "next month",
      "every day"
    ],
    "contextUk": "Побачимось наступного тижня.",
    "type": "contrast",
    "question": "Побачимось наступного тижня.",
    "options": [
      "See you next week.",
      "See you on next week.",
      "See you in next week."
    ],
    "correctAnswer": "See you next week.",
    "wrongExplanations": {
      "See you on next week.": "Перед next / last / every у часі прийменник не потрібен.",
      "See you in next week.": "Перед next / last / every у часі прийменник не потрібен."
    }
  },
  {
    "id": "ex-0024",
    "difficulty": 1,
    "category": "time",
    "pattern": "no preposition + next",
    "explanationUk": "Перед next / last / every у часі прийменник не потрібен.",
    "examples": [
      "next month",
      "every day"
    ],
    "contextUk": "Побачимось наступного тижня.",
    "type": "blocks",
    "question": "Побачимось наступного тижня.",
    "correctAnswer": "See you next week.",
    "blocks": [
      "See",
      "you",
      "next",
      "week"
    ]
  },
  {
    "id": "ex-0025",
    "difficulty": 1,
    "category": "time",
    "pattern": "for + duration",
    "explanationUk": "Тривалість: for + скільки часу.",
    "examples": [
      "for an hour",
      "for a week"
    ],
    "contextUk": "Я пробуду тут два дні.",
    "type": "contrast",
    "question": "Я пробуду тут два дні.",
    "options": [
      "for two days",
      "since two days",
      "at two days"
    ],
    "correctAnswer": "for two days",
    "wrongExplanations": {
      "since two days": "Тривалість: for + скільки часу.",
      "at two days": "Тривалість: for + скільки часу."
    }
  },
  {
    "id": "ex-0026",
    "difficulty": 1,
    "category": "time",
    "pattern": "for + duration",
    "explanationUk": "Тривалість: for + скільки часу.",
    "examples": [
      "for an hour",
      "for a week"
    ],
    "contextUk": "Я пробуду тут два дні.",
    "type": "translation",
    "question": "протягом двох днів",
    "correctAnswer": "for two days",
    "alternatives": [
      "for two days"
    ]
  },
  {
    "id": "ex-0027",
    "difficulty": 1,
    "category": "time",
    "pattern": "since + starting point",
    "explanationUk": "Початкова точка в часі — since.",
    "examples": [
      "since Monday",
      "since January"
    ],
    "contextUk": "Я живу тут з 2020 року.",
    "type": "contrast",
    "question": "Я живу тут з 2020 року.",
    "options": [
      "since 2020",
      "for 2020",
      "on 2020"
    ],
    "correctAnswer": "since 2020",
    "wrongExplanations": {
      "for 2020": "Початкова точка в часі — since.",
      "on 2020": "Початкова точка в часі — since."
    }
  },
  {
    "id": "ex-0028",
    "difficulty": 1,
    "category": "time",
    "pattern": "since + starting point",
    "explanationUk": "Початкова точка в часі — since.",
    "examples": [
      "since Monday",
      "since January"
    ],
    "contextUk": "Я живу тут з 2020 року.",
    "type": "translation",
    "question": "з 2020 року",
    "correctAnswer": "since 2020",
    "alternatives": [
      "since 2020"
    ]
  },
  {
    "id": "ex-0029",
    "difficulty": 1,
    "category": "time",
    "pattern": "by + deadline",
    "explanationUk": "By — не пізніше. Until — дія триває до певного часу.",
    "examples": [
      "Finish by noon.",
      "Reply by Monday."
    ],
    "contextUk": "Надішліть це не пізніше п’ятниці.",
    "type": "contrast",
    "question": "Надішліть це не пізніше п’ятниці.",
    "options": [
      "Send it by Friday.",
      "Send it until Friday.",
      "Send it in Friday."
    ],
    "correctAnswer": "Send it by Friday.",
    "wrongExplanations": {
      "Send it until Friday.": "By — не пізніше. Until — дія триває до певного часу.",
      "Send it in Friday.": "By — не пізніше. Until — дія триває до певного часу."
    }
  },
  {
    "id": "ex-0030",
    "difficulty": 1,
    "category": "time",
    "pattern": "by + deadline",
    "explanationUk": "By — не пізніше. Until — дія триває до певного часу.",
    "examples": [
      "Finish by noon.",
      "Reply by Monday."
    ],
    "contextUk": "Надішліть це не пізніше п’ятниці.",
    "type": "blocks",
    "question": "Надішліть це не пізніше п’ятниці.",
    "correctAnswer": "Send it by Friday.",
    "blocks": [
      "Send",
      "it",
      "by",
      "Friday"
    ]
  },
  {
    "id": "ex-0031",
    "difficulty": 1,
    "category": "time",
    "pattern": "until + end",
    "explanationUk": "Until показує, до якого часу триває дія.",
    "examples": [
      "Wait until noon.",
      "Stay until Monday."
    ],
    "contextUk": "Я працюю до п’ятої.",
    "type": "contrast",
    "question": "Я працюю до п’ятої.",
    "options": [
      "I work until 5.",
      "I work on 5.",
      "I work in 5."
    ],
    "correctAnswer": "I work until 5.",
    "wrongExplanations": {
      "I work on 5.": "Until показує, до якого часу триває дія.",
      "I work in 5.": "Until показує, до якого часу триває дія."
    }
  },
  {
    "id": "ex-0032",
    "difficulty": 1,
    "category": "time",
    "pattern": "until + end",
    "explanationUk": "Until показує, до якого часу триває дія.",
    "examples": [
      "Wait until noon.",
      "Stay until Monday."
    ],
    "contextUk": "Я працюю до п’ятої.",
    "type": "blocks",
    "question": "Я працюю до п’ятої.",
    "correctAnswer": "I work until 5.",
    "blocks": [
      "I",
      "work",
      "until",
      "5"
    ]
  },
  {
    "id": "ex-0033",
    "difficulty": 1,
    "category": "place",
    "pattern": "at home",
    "explanationUk": "Коли говоримо про власний дім загалом: at home.",
    "examples": [
      "She is at home.",
      "We work at home."
    ],
    "contextUk": "Я вдома.",
    "type": "contrast",
    "question": "Я вдома.",
    "options": [
      "I am at home.",
      "I am in home.",
      "I am at the home."
    ],
    "correctAnswer": "I am at home.",
    "wrongExplanations": {
      "I am in home.": "Коли говоримо про власний дім загалом: at home.",
      "I am at the home.": "Коли говоримо про власний дім загалом: at home."
    }
  },
  {
    "id": "ex-0034",
    "difficulty": 1,
    "category": "place",
    "pattern": "at home",
    "explanationUk": "Коли говоримо про власний дім загалом: at home.",
    "examples": [
      "She is at home.",
      "We work at home."
    ],
    "contextUk": "Я вдома.",
    "type": "translation",
    "question": "Я вдома.",
    "correctAnswer": "I am at home.",
    "alternatives": [
      "I am at home."
    ]
  },
  {
    "id": "ex-0035",
    "difficulty": 1,
    "category": "place",
    "pattern": "at home",
    "explanationUk": "Коли говоримо про власний дім загалом: at home.",
    "examples": [
      "She is at home.",
      "We work at home."
    ],
    "contextUk": "Я вдома.",
    "type": "blocks",
    "question": "Я вдома.",
    "correctAnswer": "I am at home.",
    "blocks": [
      "I",
      "am",
      "at",
      "home"
    ]
  },
  {
    "id": "ex-0036",
    "difficulty": 1,
    "category": "place",
    "pattern": "at work",
    "explanationUk": "На роботі — at work.",
    "examples": [
      "He is at work.",
      "They are at work."
    ],
    "contextUk": "Я на роботі.",
    "type": "contrast",
    "question": "Я на роботі.",
    "options": [
      "I am at work.",
      "I am in work.",
      "I am on work."
    ],
    "correctAnswer": "I am at work.",
    "wrongExplanations": {
      "I am in work.": "На роботі — at work.",
      "I am on work.": "На роботі — at work."
    }
  },
  {
    "id": "ex-0037",
    "difficulty": 1,
    "category": "place",
    "pattern": "at work",
    "explanationUk": "На роботі — at work.",
    "examples": [
      "He is at work.",
      "They are at work."
    ],
    "contextUk": "Я на роботі.",
    "type": "translation",
    "question": "Я на роботі.",
    "correctAnswer": "I am at work.",
    "alternatives": [
      "I am at work."
    ]
  },
  {
    "id": "ex-0038",
    "difficulty": 1,
    "category": "place",
    "pattern": "at work",
    "explanationUk": "На роботі — at work.",
    "examples": [
      "He is at work.",
      "They are at work."
    ],
    "contextUk": "Я на роботі.",
    "type": "blocks",
    "question": "Я на роботі.",
    "correctAnswer": "I am at work.",
    "blocks": [
      "I",
      "am",
      "at",
      "work"
    ]
  },
  {
    "id": "ex-0039",
    "difficulty": 1,
    "category": "place",
    "pattern": "at school",
    "explanationUk": "At school — у школі на заняттях. Перед school тут немає артикля.",
    "examples": [
      "He is at school.",
      "We meet at school."
    ],
    "contextUk": "Дитина зараз у школі на заняттях.",
    "type": "contrast",
    "question": "Дитина зараз у школі на заняттях.",
    "options": [
      "She is at school.",
      "She is on school.",
      "She is in school building."
    ],
    "correctAnswer": "She is at school.",
    "wrongExplanations": {
      "She is on school.": "At school — у школі на заняттях. Перед school тут немає артикля.",
      "She is in school building.": "At school — у школі на заняттях. Перед school тут немає артикля."
    }
  },
  {
    "id": "ex-0040",
    "difficulty": 1,
    "category": "place",
    "pattern": "at school",
    "explanationUk": "At school — у школі на заняттях. Перед school тут немає артикля.",
    "examples": [
      "He is at school.",
      "We meet at school."
    ],
    "contextUk": "Дитина зараз у школі на заняттях.",
    "type": "translation",
    "question": "Вона у школі.",
    "correctAnswer": "She is at school.",
    "alternatives": [
      "She is at school."
    ]
  },
  {
    "id": "ex-0041",
    "difficulty": 1,
    "category": "place",
    "pattern": "at school",
    "explanationUk": "At school — у школі на заняттях. Перед school тут немає артикля.",
    "examples": [
      "He is at school.",
      "We meet at school."
    ],
    "contextUk": "Дитина зараз у школі на заняттях.",
    "type": "blocks",
    "question": "Дитина зараз у школі на заняттях.",
    "correctAnswer": "She is at school.",
    "blocks": [
      "She",
      "is",
      "at",
      "school"
    ]
  },
  {
    "id": "ex-0042",
    "difficulty": 1,
    "category": "place",
    "pattern": "in the office",
    "explanationUk": "У конкретному офісі — in the office. At the office теж можливе, коли йдеться про місце роботи.",
    "examples": [
      "She is in the office.",
      "We are in the office."
    ],
    "contextUk": "Я всередині знайомого нам офісу.",
    "type": "contrast",
    "question": "Я всередині знайомого нам офісу.",
    "options": [
      "I am in the office.",
      "I am at office.",
      "I am in office building."
    ],
    "correctAnswer": "I am in the office.",
    "wrongExplanations": {
      "I am at office.": "У конкретному офісі — in the office. At the office теж можливе, коли йдеться про місце роботи.",
      "I am in office building.": "У конкретному офісі — in the office. At the office теж можливе, коли йдеться про місце роботи."
    }
  },
  {
    "id": "ex-0043",
    "difficulty": 1,
    "category": "place",
    "pattern": "in the office",
    "explanationUk": "У конкретному офісі — in the office. At the office теж можливе, коли йдеться про місце роботи.",
    "examples": [
      "She is in the office.",
      "We are in the office."
    ],
    "contextUk": "Я всередині знайомого нам офісу.",
    "type": "translation",
    "question": "Я в офісі.",
    "correctAnswer": "I am in the office.",
    "alternatives": [
      "I am in the office.",
      "I am at the office."
    ]
  },
  {
    "id": "ex-0044",
    "difficulty": 1,
    "category": "place",
    "pattern": "in the office",
    "explanationUk": "У конкретному офісі — in the office. At the office теж можливе, коли йдеться про місце роботи.",
    "examples": [
      "She is in the office.",
      "We are in the office."
    ],
    "contextUk": "Я всередині знайомого нам офісу.",
    "type": "blocks",
    "question": "Я всередині знайомого нам офісу.",
    "correctAnswer": "I am in the office.",
    "blocks": [
      "I",
      "am",
      "in",
      "the",
      "office"
    ]
  },
  {
    "id": "ex-0045",
    "difficulty": 1,
    "category": "place",
    "pattern": "in + enclosed place",
    "explanationUk": "Усередині конкретного будинку — in the house; keys — are.",
    "examples": [
      "in the room",
      "in the kitchen"
    ],
    "contextUk": "Ключі у будинку.",
    "type": "contrast",
    "question": "Ключі у будинку.",
    "options": [
      "The keys are in the house.",
      "The keys are in house.",
      "The keys is in the house."
    ],
    "correctAnswer": "The keys are in the house.",
    "wrongExplanations": {
      "The keys are in house.": "Усередині конкретного будинку — in the house; keys — are.",
      "The keys is in the house.": "Усередині конкретного будинку — in the house; keys — are."
    }
  },
  {
    "id": "ex-0046",
    "difficulty": 1,
    "category": "place",
    "pattern": "in + enclosed place",
    "explanationUk": "Усередині конкретного будинку — in the house; keys — are.",
    "examples": [
      "in the room",
      "in the kitchen"
    ],
    "contextUk": "Ключі у будинку.",
    "type": "translation",
    "question": "Ключі в будинку.",
    "correctAnswer": "The keys are in the house.",
    "alternatives": [
      "The keys are in the house."
    ]
  },
  {
    "id": "ex-0047",
    "difficulty": 1,
    "category": "place",
    "pattern": "in + enclosed place",
    "explanationUk": "Усередині конкретного будинку — in the house; keys — are.",
    "examples": [
      "in the room",
      "in the kitchen"
    ],
    "contextUk": "Ключі у будинку.",
    "type": "blocks",
    "question": "Ключі у будинку.",
    "correctAnswer": "The keys are in the house.",
    "blocks": [
      "The",
      "keys",
      "are",
      "in",
      "the",
      "house"
    ]
  },
  {
    "id": "ex-0048",
    "difficulty": 1,
    "category": "place",
    "pattern": "in the car",
    "explanationUk": "У салоні автомобіля — in the car. On the car означає на його поверхні.",
    "examples": [
      "She is in the car.",
      "Wait in the car."
    ],
    "contextUk": "Я їду пасажиром в автомобілі.",
    "type": "contrast",
    "question": "Я їду пасажиром в автомобілі.",
    "options": [
      "I am in the car.",
      "I am on the car.",
      "I am at car."
    ],
    "correctAnswer": "I am in the car.",
    "wrongExplanations": {
      "I am on the car.": "У салоні автомобіля — in the car. On the car означає на його поверхні.",
      "I am at car.": "У салоні автомобіля — in the car. On the car означає на його поверхні."
    }
  },
  {
    "id": "ex-0049",
    "difficulty": 1,
    "category": "place",
    "pattern": "in the car",
    "explanationUk": "У салоні автомобіля — in the car. On the car означає на його поверхні.",
    "examples": [
      "She is in the car.",
      "Wait in the car."
    ],
    "contextUk": "Я їду пасажиром в автомобілі.",
    "type": "translation",
    "question": "Я в машині.",
    "correctAnswer": "I am in the car.",
    "alternatives": [
      "I am in the car."
    ]
  },
  {
    "id": "ex-0050",
    "difficulty": 1,
    "category": "place",
    "pattern": "in the car",
    "explanationUk": "У салоні автомобіля — in the car. On the car означає на його поверхні.",
    "examples": [
      "She is in the car.",
      "Wait in the car."
    ],
    "contextUk": "Я їду пасажиром в автомобілі.",
    "type": "blocks",
    "question": "Я їду пасажиром в автомобілі.",
    "correctAnswer": "I am in the car.",
    "blocks": [
      "I",
      "am",
      "in",
      "the",
      "car"
    ]
  },
  {
    "id": "ex-0051",
    "difficulty": 1,
    "category": "place",
    "pattern": "on + public transport",
    "explanationUk": "Про поїздку зазвичай кажемо on the train. In the train можливе для фізичного простору всередині.",
    "examples": [
      "on the bus",
      "on the plane"
    ],
    "contextUk": "Я їду потягом.",
    "type": "contrast",
    "question": "Я їду потягом.",
    "options": [
      "I am on the train.",
      "I am at train.",
      "I am on train."
    ],
    "correctAnswer": "I am on the train.",
    "wrongExplanations": {
      "I am at train.": "Про поїздку зазвичай кажемо on the train. In the train можливе для фізичного простору всередині.",
      "I am on train.": "Про поїздку зазвичай кажемо on the train. In the train можливе для фізичного простору всередині."
    }
  },
  {
    "id": "ex-0052",
    "difficulty": 1,
    "category": "place",
    "pattern": "on + public transport",
    "explanationUk": "Про поїздку зазвичай кажемо on the train. In the train можливе для фізичного простору всередині.",
    "examples": [
      "on the bus",
      "on the plane"
    ],
    "contextUk": "Я їду потягом.",
    "type": "translation",
    "question": "Я їду потягом.",
    "correctAnswer": "I am on the train.",
    "alternatives": [
      "I am on the train.",
      "I am taking the train."
    ]
  },
  {
    "id": "ex-0053",
    "difficulty": 1,
    "category": "place",
    "pattern": "on + public transport",
    "explanationUk": "Про поїздку зазвичай кажемо on the train. In the train можливе для фізичного простору всередині.",
    "examples": [
      "on the bus",
      "on the plane"
    ],
    "contextUk": "Я їду потягом.",
    "type": "blocks",
    "question": "Я їду потягом.",
    "correctAnswer": "I am on the train.",
    "blocks": [
      "I",
      "am",
      "on",
      "the",
      "train"
    ]
  },
  {
    "id": "ex-0054",
    "difficulty": 1,
    "category": "place",
    "pattern": "in + city",
    "explanationUk": "Міста й країни — з in.",
    "examples": [
      "in Athens",
      "in Ukraine"
    ],
    "contextUk": "Я живу в Києві.",
    "type": "contrast",
    "question": "Я живу в Києві.",
    "options": [
      "I live in Kyiv.",
      "I live on Kyiv.",
      "I live at Kyiv."
    ],
    "correctAnswer": "I live in Kyiv.",
    "wrongExplanations": {
      "I live on Kyiv.": "Міста й країни — з in.",
      "I live at Kyiv.": "Міста й країни — з in."
    }
  },
  {
    "id": "ex-0055",
    "difficulty": 1,
    "category": "place",
    "pattern": "in + city",
    "explanationUk": "Міста й країни — з in.",
    "examples": [
      "in Athens",
      "in Ukraine"
    ],
    "contextUk": "Я живу в Києві.",
    "type": "translation",
    "question": "Я живу в Києві.",
    "correctAnswer": "I live in Kyiv.",
    "alternatives": [
      "I live in Kyiv."
    ]
  },
  {
    "id": "ex-0056",
    "difficulty": 1,
    "category": "place",
    "pattern": "in + city",
    "explanationUk": "Міста й країни — з in.",
    "examples": [
      "in Athens",
      "in Ukraine"
    ],
    "contextUk": "Я живу в Києві.",
    "type": "blocks",
    "question": "Я живу в Києві.",
    "correctAnswer": "I live in Kyiv.",
    "blocks": [
      "I",
      "live",
      "in",
      "Kyiv"
    ]
  },
  {
    "id": "ex-0057",
    "difficulty": 1,
    "category": "place",
    "pattern": "at + meeting point",
    "explanationUk": "Місце зустрічі — at the station.",
    "examples": [
      "at the airport",
      "at the cafe"
    ],
    "contextUk": "Чекай мене на станції.",
    "type": "contrast",
    "question": "Чекай мене на станції.",
    "options": [
      "Wait at the station.",
      "Wait at station.",
      "Wait on station."
    ],
    "correctAnswer": "Wait at the station.",
    "wrongExplanations": {
      "Wait at station.": "Місце зустрічі — at the station.",
      "Wait on station.": "Місце зустрічі — at the station."
    }
  },
  {
    "id": "ex-0058",
    "difficulty": 1,
    "category": "place",
    "pattern": "at + meeting point",
    "explanationUk": "Місце зустрічі — at the station.",
    "examples": [
      "at the airport",
      "at the cafe"
    ],
    "contextUk": "Чекай мене на станції.",
    "type": "blocks",
    "question": "Чекай мене на станції.",
    "correctAnswer": "Wait at the station.",
    "blocks": [
      "Wait",
      "at",
      "the",
      "station"
    ]
  },
  {
    "id": "ex-0059",
    "difficulty": 1,
    "category": "place",
    "pattern": "on + surface",
    "explanationUk": "На поверхні — on.",
    "examples": [
      "on the desk",
      "on the shelf"
    ],
    "contextUk": "Телефон лежить на столі.",
    "type": "contrast",
    "question": "Телефон лежить на столі.",
    "options": [
      "The phone is on the table.",
      "The phone is in the table.",
      "The phone is at table."
    ],
    "correctAnswer": "The phone is on the table.",
    "wrongExplanations": {
      "The phone is in the table.": "На поверхні — on.",
      "The phone is at table.": "На поверхні — on."
    }
  },
  {
    "id": "ex-0060",
    "difficulty": 1,
    "category": "place",
    "pattern": "on + surface",
    "explanationUk": "На поверхні — on.",
    "examples": [
      "on the desk",
      "on the shelf"
    ],
    "contextUk": "Телефон лежить на столі.",
    "type": "blocks",
    "question": "Телефон лежить на столі.",
    "correctAnswer": "The phone is on the table.",
    "blocks": [
      "The",
      "phone",
      "is",
      "on",
      "the",
      "table"
    ]
  },
  {
    "id": "ex-0061",
    "difficulty": 1,
    "category": "place",
    "pattern": "in + area",
    "explanationUk": "У межах міської зони — in the city center.",
    "examples": [
      "in the park",
      "in the neighborhood"
    ],
    "contextUk": "Зустрінемось у центрі міста.",
    "type": "contrast",
    "question": "Зустрінемось у центрі міста.",
    "options": [
      "in the city center",
      "on city center",
      "at city center"
    ],
    "correctAnswer": "in the city center",
    "wrongExplanations": {
      "on city center": "У межах міської зони — in the city center.",
      "at city center": "У межах міської зони — in the city center."
    }
  },
  {
    "id": "ex-0062",
    "difficulty": 1,
    "category": "place",
    "pattern": "in + area",
    "explanationUk": "У межах міської зони — in the city center.",
    "examples": [
      "in the park",
      "in the neighborhood"
    ],
    "contextUk": "Зустрінемось у центрі міста.",
    "type": "blocks",
    "question": "Зустрінемось у центрі міста.",
    "correctAnswer": "in the city center",
    "blocks": [
      "in",
      "the",
      "city",
      "center"
    ]
  },
  {
    "id": "ex-0063",
    "difficulty": 1,
    "category": "place",
    "pattern": "at + address",
    "explanationUk": "Повна адреса з номером будинку — at.",
    "examples": [
      "at 10 Park Avenue",
      "at 8 Oak Street"
    ],
    "contextUk": "Моя адреса — 25 Main Street.",
    "type": "contrast",
    "question": "Моя адреса — 25 Main Street.",
    "options": [
      "I live at 25 Main Street.",
      "I live on 25 Main Street.",
      "I live in 25 Main Street."
    ],
    "correctAnswer": "I live at 25 Main Street.",
    "wrongExplanations": {
      "I live on 25 Main Street.": "Повна адреса з номером будинку — at.",
      "I live in 25 Main Street.": "Повна адреса з номером будинку — at."
    }
  },
  {
    "id": "ex-0064",
    "difficulty": 1,
    "category": "place",
    "pattern": "at + address",
    "explanationUk": "Повна адреса з номером будинку — at.",
    "examples": [
      "at 10 Park Avenue",
      "at 8 Oak Street"
    ],
    "contextUk": "Моя адреса — 25 Main Street.",
    "type": "blocks",
    "question": "Моя адреса — 25 Main Street.",
    "correctAnswer": "I live at 25 Main Street.",
    "blocks": [
      "I",
      "live",
      "at",
      "25",
      "Main",
      "Street"
    ]
  },
  {
    "id": "ex-0065",
    "difficulty": 1,
    "category": "place",
    "pattern": "on + floor",
    "explanationUk": "Поверх — on the ... floor.",
    "examples": [
      "on the first floor",
      "on the third floor"
    ],
    "contextUk": "Офіс на другому поверсі.",
    "type": "contrast",
    "question": "Офіс на другому поверсі.",
    "options": [
      "on the second floor",
      "in the second floor",
      "at second floor"
    ],
    "correctAnswer": "on the second floor",
    "wrongExplanations": {
      "in the second floor": "Поверх — on the ... floor.",
      "at second floor": "Поверх — on the ... floor."
    }
  },
  {
    "id": "ex-0066",
    "difficulty": 1,
    "category": "place",
    "pattern": "on + floor",
    "explanationUk": "Поверх — on the ... floor.",
    "examples": [
      "on the first floor",
      "on the third floor"
    ],
    "contextUk": "Офіс на другому поверсі.",
    "type": "blocks",
    "question": "Офіс на другому поверсі.",
    "correctAnswer": "on the second floor",
    "blocks": [
      "on",
      "the",
      "second",
      "floor"
    ]
  },
  {
    "id": "ex-0067",
    "difficulty": 1,
    "category": "place",
    "pattern": "in + country",
    "explanationUk": "Країна — in; перед Ukraine артикль не потрібен.",
    "examples": [
      "in Canada",
      "in Poland"
    ],
    "contextUk": "Моя родина живе в Україні.",
    "type": "contrast",
    "question": "Моя родина живе в Україні.",
    "options": [
      "My family lives in Ukraine.",
      "My family lives at Ukraine.",
      "My family lives on Ukraine."
    ],
    "correctAnswer": "My family lives in Ukraine.",
    "wrongExplanations": {
      "My family lives at Ukraine.": "Країна — in; перед Ukraine артикль не потрібен.",
      "My family lives on Ukraine.": "Країна — in; перед Ukraine артикль не потрібен."
    }
  },
  {
    "id": "ex-0068",
    "difficulty": 1,
    "category": "place",
    "pattern": "in + country",
    "explanationUk": "Країна — in; перед Ukraine артикль не потрібен.",
    "examples": [
      "in Canada",
      "in Poland"
    ],
    "contextUk": "Моя родина живе в Україні.",
    "type": "blocks",
    "question": "Моя родина живе в Україні.",
    "correctAnswer": "My family lives in Ukraine.",
    "blocks": [
      "My",
      "family",
      "lives",
      "in",
      "Ukraine"
    ]
  },
  {
    "id": "ex-0069",
    "difficulty": 1,
    "category": "place",
    "pattern": "on + public transport",
    "explanationUk": "Про поїздку автобусом — on the bus. З we використовуємо are.",
    "examples": [
      "They are on the plane.",
      "He is on the train."
    ],
    "contextUk": "Ми пасажири автобуса.",
    "type": "contrast",
    "question": "Ми пасажири автобуса.",
    "options": [
      "We are on the bus.",
      "We are at bus.",
      "We is on the bus."
    ],
    "correctAnswer": "We are on the bus.",
    "wrongExplanations": {
      "We are at bus.": "Про поїздку автобусом — on the bus. З we використовуємо are.",
      "We is on the bus.": "Про поїздку автобусом — on the bus. З we використовуємо are."
    }
  },
  {
    "id": "ex-0070",
    "difficulty": 1,
    "category": "place",
    "pattern": "on + public transport",
    "explanationUk": "Про поїздку автобусом — on the bus. З we використовуємо are.",
    "examples": [
      "They are on the plane.",
      "He is on the train."
    ],
    "contextUk": "Ми пасажири автобуса.",
    "type": "blocks",
    "question": "Ми пасажири автобуса.",
    "correctAnswer": "We are on the bus.",
    "blocks": [
      "We",
      "are",
      "on",
      "the",
      "bus"
    ]
  },
  {
    "id": "ex-0071",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go home",
    "explanationUk": "Go home — без to.",
    "examples": [
      "Come home.",
      "She goes home."
    ],
    "contextUk": "Я йду додому.",
    "type": "contrast",
    "question": "Я йду додому.",
    "options": [
      "I go home.",
      "I go to home.",
      "I go at home."
    ],
    "correctAnswer": "I go home.",
    "wrongExplanations": {
      "I go to home.": "Go home — без to.",
      "I go at home.": "Go home — без to."
    }
  },
  {
    "id": "ex-0072",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go home",
    "explanationUk": "Go home — без to.",
    "examples": [
      "Come home.",
      "She goes home."
    ],
    "contextUk": "Я йду додому.",
    "type": "translation",
    "question": "Я йду додому.",
    "correctAnswer": "I go home.",
    "alternatives": [
      "I go home.",
      "I am going home."
    ]
  },
  {
    "id": "ex-0073",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to work",
    "explanationUk": "Go to work — без the.",
    "examples": [
      "He goes to work.",
      "We go to work at 8."
    ],
    "contextUk": "Я їду на роботу, не про конкретну будівлю.",
    "type": "contrast",
    "question": "Я їду на роботу, не про конкретну будівлю.",
    "options": [
      "I go to work.",
      "I go to the work.",
      "I go work."
    ],
    "correctAnswer": "I go to work.",
    "wrongExplanations": {
      "I go to the work.": "Go to work — без the.",
      "I go work.": "Go to work — без the."
    }
  },
  {
    "id": "ex-0074",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to work",
    "explanationUk": "Go to work — без the.",
    "examples": [
      "He goes to work.",
      "We go to work at 8."
    ],
    "contextUk": "Я їду на роботу, не про конкретну будівлю.",
    "type": "translation",
    "question": "Я ходжу на роботу.",
    "correctAnswer": "I go to work.",
    "alternatives": [
      "I go to work.",
      "I walk to work."
    ]
  },
  {
    "id": "ex-0075",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to work",
    "explanationUk": "Go to work — без the.",
    "examples": [
      "He goes to work.",
      "We go to work at 8."
    ],
    "contextUk": "Я їду на роботу, не про конкретну будівлю.",
    "type": "blocks",
    "question": "Я їду на роботу, не про конкретну будівлю.",
    "correctAnswer": "I go to work.",
    "blocks": [
      "I",
      "go",
      "to",
      "work"
    ]
  },
  {
    "id": "ex-0076",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to the office",
    "explanationUk": "До конкретного офісу — to the office.",
    "examples": [
      "She goes to the office.",
      "Come to the office."
    ],
    "contextUk": "Я йду до нашого офісу.",
    "type": "contrast",
    "question": "Я йду до нашого офісу.",
    "options": [
      "I go to the office.",
      "I go office.",
      "I go to office."
    ],
    "correctAnswer": "I go to the office.",
    "wrongExplanations": {
      "I go office.": "До конкретного офісу — to the office.",
      "I go to office.": "До конкретного офісу — to the office."
    }
  },
  {
    "id": "ex-0077",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to the office",
    "explanationUk": "До конкретного офісу — to the office.",
    "examples": [
      "She goes to the office.",
      "Come to the office."
    ],
    "contextUk": "Я йду до нашого офісу.",
    "type": "translation",
    "question": "Я ходжу до офісу.",
    "correctAnswer": "I go to the office.",
    "alternatives": [
      "I go to the office.",
      "I walk to the office."
    ]
  },
  {
    "id": "ex-0078",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to the office",
    "explanationUk": "До конкретного офісу — to the office.",
    "examples": [
      "She goes to the office.",
      "Come to the office."
    ],
    "contextUk": "Я йду до нашого офісу.",
    "type": "blocks",
    "question": "Я йду до нашого офісу.",
    "correctAnswer": "I go to the office.",
    "blocks": [
      "I",
      "go",
      "to",
      "the",
      "office"
    ]
  },
  {
    "id": "ex-0079",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to school",
    "explanationUk": "Ходити на навчання — go to school.",
    "examples": [
      "I go to school.",
      "They go to school."
    ],
    "contextUk": "Дитина ходить до школи на навчання.",
    "type": "contrast",
    "question": "Дитина ходить до школи на навчання.",
    "options": [
      "He goes to school.",
      "He goes school.",
      "He goes at school."
    ],
    "correctAnswer": "He goes to school.",
    "wrongExplanations": {
      "He goes school.": "Ходити на навчання — go to school.",
      "He goes at school.": "Ходити на навчання — go to school."
    }
  },
  {
    "id": "ex-0080",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to school",
    "explanationUk": "Ходити на навчання — go to school.",
    "examples": [
      "I go to school.",
      "They go to school."
    ],
    "contextUk": "Дитина ходить до школи на навчання.",
    "type": "blocks",
    "question": "Дитина ходить до школи на навчання.",
    "correctAnswer": "He goes to school.",
    "blocks": [
      "He",
      "goes",
      "to",
      "school"
    ]
  },
  {
    "id": "ex-0081",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to bed",
    "explanationUk": "Лягати спати — go to bed. To the bed — до конкретного ліжка як предмета.",
    "examples": [
      "Go to bed early.",
      "She goes to bed at 10."
    ],
    "contextUk": "Я лягаю спати об одинадцятій.",
    "type": "contrast",
    "question": "Я лягаю спати об одинадцятій.",
    "options": [
      "I go to bed at 11.",
      "I go bed at 11.",
      "I go to the bed at 11."
    ],
    "correctAnswer": "I go to bed at 11.",
    "wrongExplanations": {
      "I go bed at 11.": "Лягати спати — go to bed. To the bed — до конкретного ліжка як предмета.",
      "I go to the bed at 11.": "Лягати спати — go to bed. To the bed — до конкретного ліжка як предмета."
    }
  },
  {
    "id": "ex-0082",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to bed",
    "explanationUk": "Лягати спати — go to bed. To the bed — до конкретного ліжка як предмета.",
    "examples": [
      "Go to bed early.",
      "She goes to bed at 10."
    ],
    "contextUk": "Я лягаю спати об одинадцятій.",
    "type": "translation",
    "question": "Я лягаю спати об одинадцятій.",
    "correctAnswer": "I go to bed at 11.",
    "alternatives": [
      "I go to bed at 11."
    ]
  },
  {
    "id": "ex-0083",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to bed",
    "explanationUk": "Лягати спати — go to bed. To the bed — до конкретного ліжка як предмета.",
    "examples": [
      "Go to bed early.",
      "She goes to bed at 10."
    ],
    "contextUk": "Я лягаю спати об одинадцятій.",
    "type": "blocks",
    "question": "Я лягаю спати об одинадцятій.",
    "correctAnswer": "I go to bed at 11.",
    "blocks": [
      "I",
      "go",
      "to",
      "bed",
      "at",
      "11"
    ]
  },
  {
    "id": "ex-0084",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to the + destination",
    "explanationUk": "Напрямок — to; конкретне місце — the store.",
    "examples": [
      "go to the gym",
      "go to the airport"
    ],
    "contextUk": "Ми йдемо до магазину.",
    "type": "contrast",
    "question": "Ми йдемо до магазину.",
    "options": [
      "We go to the store.",
      "We go at the store.",
      "We go store."
    ],
    "correctAnswer": "We go to the store.",
    "wrongExplanations": {
      "We go at the store.": "Напрямок — to; конкретне місце — the store.",
      "We go store.": "Напрямок — to; конкретне місце — the store."
    }
  },
  {
    "id": "ex-0085",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to the + destination",
    "explanationUk": "Напрямок — to; конкретне місце — the store.",
    "examples": [
      "go to the gym",
      "go to the airport"
    ],
    "contextUk": "Ми йдемо до магазину.",
    "type": "blocks",
    "question": "Ми йдемо до магазину.",
    "correctAnswer": "We go to the store.",
    "blocks": [
      "We",
      "go",
      "to",
      "the",
      "store"
    ]
  },
  {
    "id": "ex-0086",
    "difficulty": 1,
    "category": "movement",
    "pattern": "get to",
    "explanationUk": "Дістатися кудись — get to. У запитанні: How do I ...?",
    "examples": [
      "get to the hotel",
      "get to the office"
    ],
    "contextUk": "Як дістатися до станції?",
    "type": "contrast",
    "question": "Як дістатися до станції?",
    "options": [
      "How do I get to the station?",
      "How do I get at the station?",
      "How I get to the station?"
    ],
    "correctAnswer": "How do I get to the station?",
    "wrongExplanations": {
      "How do I get at the station?": "Дістатися кудись — get to. У запитанні: How do I ...?",
      "How I get to the station?": "Дістатися кудись — get to. У запитанні: How do I ...?"
    }
  },
  {
    "id": "ex-0087",
    "difficulty": 1,
    "category": "movement",
    "pattern": "get to",
    "explanationUk": "Дістатися кудись — get to. У запитанні: How do I ...?",
    "examples": [
      "get to the hotel",
      "get to the office"
    ],
    "contextUk": "Як дістатися до станції?",
    "type": "blocks",
    "question": "Як дістатися до станції?",
    "correctAnswer": "How do I get to the station?",
    "blocks": [
      "How",
      "do",
      "I",
      "get",
      "to",
      "the",
      "station"
    ]
  },
  {
    "id": "ex-0088",
    "difficulty": 1,
    "category": "movement",
    "pattern": "arrive in",
    "explanationUk": "Прибути в місто або країну — arrive in.",
    "examples": [
      "arrive in Kyiv",
      "arrive in Canada"
    ],
    "contextUk": "Ми прибули до Афін.",
    "type": "contrast",
    "question": "Ми прибули до Афін.",
    "options": [
      "We arrived in Athens.",
      "We arrived to Athens.",
      "We arrived at Athens."
    ],
    "correctAnswer": "We arrived in Athens.",
    "wrongExplanations": {
      "We arrived to Athens.": "Прибути в місто або країну — arrive in.",
      "We arrived at Athens.": "Прибути в місто або країну — arrive in."
    }
  },
  {
    "id": "ex-0089",
    "difficulty": 1,
    "category": "movement",
    "pattern": "arrive in",
    "explanationUk": "Прибути в місто або країну — arrive in.",
    "examples": [
      "arrive in Kyiv",
      "arrive in Canada"
    ],
    "contextUk": "Ми прибули до Афін.",
    "type": "translation",
    "question": "Ми прибули до Афін.",
    "correctAnswer": "We arrived in Athens.",
    "alternatives": [
      "We arrived in Athens."
    ]
  },
  {
    "id": "ex-0090",
    "difficulty": 1,
    "category": "movement",
    "pattern": "arrive in",
    "explanationUk": "Прибути в місто або країну — arrive in.",
    "examples": [
      "arrive in Kyiv",
      "arrive in Canada"
    ],
    "contextUk": "Ми прибули до Афін.",
    "type": "blocks",
    "question": "Ми прибули до Афін.",
    "correctAnswer": "We arrived in Athens.",
    "blocks": [
      "We",
      "arrived",
      "in",
      "Athens"
    ]
  },
  {
    "id": "ex-0091",
    "difficulty": 1,
    "category": "movement",
    "pattern": "arrive at",
    "explanationUk": "Прибути в конкретне місце — arrive at.",
    "examples": [
      "arrive at the airport",
      "arrive at the station"
    ],
    "contextUk": "Ми прибули в готель.",
    "type": "contrast",
    "question": "Ми прибули в готель.",
    "options": [
      "We arrived at the hotel.",
      "We arrived to the hotel.",
      "We arrived hotel."
    ],
    "correctAnswer": "We arrived at the hotel.",
    "wrongExplanations": {
      "We arrived to the hotel.": "Прибути в конкретне місце — arrive at.",
      "We arrived hotel.": "Прибути в конкретне місце — arrive at."
    }
  },
  {
    "id": "ex-0092",
    "difficulty": 1,
    "category": "movement",
    "pattern": "arrive at",
    "explanationUk": "Прибути в конкретне місце — arrive at.",
    "examples": [
      "arrive at the airport",
      "arrive at the station"
    ],
    "contextUk": "Ми прибули в готель.",
    "type": "translation",
    "question": "Ми прибули в готель.",
    "correctAnswer": "We arrived at the hotel.",
    "alternatives": [
      "We arrived at the hotel."
    ]
  },
  {
    "id": "ex-0093",
    "difficulty": 1,
    "category": "movement",
    "pattern": "arrive at",
    "explanationUk": "Прибути в конкретне місце — arrive at.",
    "examples": [
      "arrive at the airport",
      "arrive at the station"
    ],
    "contextUk": "Ми прибули в готель.",
    "type": "blocks",
    "question": "Ми прибули в готель.",
    "correctAnswer": "We arrived at the hotel.",
    "blocks": [
      "We",
      "arrived",
      "at",
      "the",
      "hotel"
    ]
  },
  {
    "id": "ex-0094",
    "difficulty": 1,
    "category": "movement",
    "pattern": "leave for",
    "explanationUk": "Вирушати до місця — leave for.",
    "examples": [
      "leave for work",
      "leave for Chicago"
    ],
    "contextUk": "Я вирушаю до Нью-Йорка завтра.",
    "type": "contrast",
    "question": "Я вирушаю до Нью-Йорка завтра.",
    "options": [
      "I leave for New York tomorrow.",
      "I leave at New York tomorrow.",
      "I leave to New York tomorrow."
    ],
    "correctAnswer": "I leave for New York tomorrow.",
    "wrongExplanations": {
      "I leave at New York tomorrow.": "Вирушати до місця — leave for.",
      "I leave to New York tomorrow.": "Вирушати до місця — leave for."
    }
  },
  {
    "id": "ex-0095",
    "difficulty": 1,
    "category": "movement",
    "pattern": "leave for",
    "explanationUk": "Вирушати до місця — leave for.",
    "examples": [
      "leave for work",
      "leave for Chicago"
    ],
    "contextUk": "Я вирушаю до Нью-Йорка завтра.",
    "type": "blocks",
    "question": "Я вирушаю до Нью-Йорка завтра.",
    "correctAnswer": "I leave for New York tomorrow.",
    "blocks": [
      "I",
      "leave",
      "for",
      "New",
      "York",
      "tomorrow"
    ]
  },
  {
    "id": "ex-0096",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + singular noun",
    "explanationUk": "Один злічуваний предмет: a car.",
    "examples": [
      "a website",
      "a meeting"
    ],
    "contextUk": "У мене є одна машина.",
    "type": "contrast",
    "question": "У мене є одна машина.",
    "options": [
      "I have a car.",
      "I have car.",
      "I have an car."
    ],
    "correctAnswer": "I have a car.",
    "wrongExplanations": {
      "I have car.": "Один злічуваний предмет: a car.",
      "I have an car.": "Один злічуваний предмет: a car."
    }
  },
  {
    "id": "ex-0097",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + singular noun",
    "explanationUk": "Один злічуваний предмет: a car.",
    "examples": [
      "a website",
      "a meeting"
    ],
    "contextUk": "У мене є одна машина.",
    "type": "translation",
    "question": "У мене є машина.",
    "correctAnswer": "I have a car.",
    "alternatives": [
      "I have a car."
    ]
  },
  {
    "id": "ex-0098",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + singular noun",
    "explanationUk": "Один злічуваний предмет: a car.",
    "examples": [
      "a website",
      "a meeting"
    ],
    "contextUk": "У мене є одна машина.",
    "type": "blocks",
    "question": "У мене є одна машина.",
    "correctAnswer": "I have a car.",
    "blocks": [
      "I",
      "have",
      "a",
      "car"
    ]
  },
  {
    "id": "ex-0099",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + singular noun",
    "explanationUk": "Одна проблема — a problem.",
    "examples": [
      "a question",
      "a plan"
    ],
    "contextUk": "У мене виникла проблема.",
    "type": "contrast",
    "question": "У мене виникла проблема.",
    "options": [
      "I have a problem.",
      "I have problem.",
      "I have an problem."
    ],
    "correctAnswer": "I have a problem.",
    "wrongExplanations": {
      "I have problem.": "Одна проблема — a problem.",
      "I have an problem.": "Одна проблема — a problem."
    }
  },
  {
    "id": "ex-0100",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + singular noun",
    "explanationUk": "Одна проблема — a problem.",
    "examples": [
      "a question",
      "a plan"
    ],
    "contextUk": "У мене виникла проблема.",
    "type": "translation",
    "question": "У мене проблема.",
    "correctAnswer": "I have a problem.",
    "alternatives": [
      "I have a problem."
    ]
  },
  {
    "id": "ex-0101",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + singular noun",
    "explanationUk": "Одна проблема — a problem.",
    "examples": [
      "a question",
      "a plan"
    ],
    "contextUk": "У мене виникла проблема.",
    "type": "blocks",
    "question": "У мене виникла проблема.",
    "correctAnswer": "I have a problem.",
    "blocks": [
      "I",
      "have",
      "a",
      "problem"
    ]
  },
  {
    "id": "ex-0102",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + vowel sound",
    "explanationUk": "Перед голосним звуком — an.",
    "examples": [
      "an orange",
      "an egg"
    ],
    "contextUk": "Я з’їв одне яблуко.",
    "type": "contrast",
    "question": "Я з’їв одне яблуко.",
    "options": [
      "I ate an apple.",
      "I ate a apple.",
      "I ate apple."
    ],
    "correctAnswer": "I ate an apple.",
    "wrongExplanations": {
      "I ate a apple.": "Перед голосним звуком — an.",
      "I ate apple.": "Перед голосним звуком — an."
    }
  },
  {
    "id": "ex-0103",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + vowel sound",
    "explanationUk": "Перед голосним звуком — an.",
    "examples": [
      "an orange",
      "an egg"
    ],
    "contextUk": "Я з’їв одне яблуко.",
    "type": "blocks",
    "question": "Я з’їв одне яблуко.",
    "correctAnswer": "I ate an apple.",
    "blocks": [
      "I",
      "ate",
      "an",
      "apple"
    ]
  },
  {
    "id": "ex-0104",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + vowel sound",
    "explanationUk": "Office починається з голосного звуку: an office.",
    "examples": [
      "an airport",
      "an apartment"
    ],
    "contextUk": "Ми орендуємо один офіс.",
    "type": "contrast",
    "question": "Ми орендуємо один офіс.",
    "options": [
      "We rent an office.",
      "We rent a office.",
      "We rent office."
    ],
    "correctAnswer": "We rent an office.",
    "wrongExplanations": {
      "We rent a office.": "Office починається з голосного звуку: an office.",
      "We rent office.": "Office починається з голосного звуку: an office."
    }
  },
  {
    "id": "ex-0105",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + vowel sound",
    "explanationUk": "Office починається з голосного звуку: an office.",
    "examples": [
      "an airport",
      "an apartment"
    ],
    "contextUk": "Ми орендуємо один офіс.",
    "type": "blocks",
    "question": "Ми орендуємо один офіс.",
    "correctAnswer": "We rent an office.",
    "blocks": [
      "We",
      "rent",
      "an",
      "office"
    ]
  },
  {
    "id": "ex-0106",
    "difficulty": 1,
    "category": "articles",
    "pattern": "the + known noun",
    "explanationUk": "Зрозуміло, які саме двері: the door.",
    "examples": [
      "Open the window.",
      "Turn off the light."
    ],
    "contextUk": "Зачини двері, на які я показую.",
    "type": "contrast",
    "question": "Зачини двері, на які я показую.",
    "options": [
      "Close the door.",
      "Close door.",
      "Close an door."
    ],
    "correctAnswer": "Close the door.",
    "wrongExplanations": {
      "Close door.": "Зрозуміло, які саме двері: the door.",
      "Close an door.": "Зрозуміло, які саме двері: the door."
    }
  },
  {
    "id": "ex-0107",
    "difficulty": 1,
    "category": "articles",
    "pattern": "no article + help",
    "explanationUk": "Help загалом — без a/an. The help можливе для конкретної допомоги.",
    "examples": [
      "Ask for help.",
      "She needs help."
    ],
    "contextUk": "Мені потрібна допомога загалом.",
    "type": "contrast",
    "question": "Мені потрібна допомога загалом.",
    "options": [
      "I need help.",
      "I need a help.",
      "I need an help."
    ],
    "correctAnswer": "I need help.",
    "wrongExplanations": {
      "I need a help.": "Help загалом — без a/an. The help можливе для конкретної допомоги.",
      "I need an help.": "Help загалом — без a/an. The help можливе для конкретної допомоги."
    }
  },
  {
    "id": "ex-0108",
    "difficulty": 1,
    "category": "articles",
    "pattern": "no article + help",
    "explanationUk": "Help загалом — без a/an. The help можливе для конкретної допомоги.",
    "examples": [
      "Ask for help.",
      "She needs help."
    ],
    "contextUk": "Мені потрібна допомога загалом.",
    "type": "translation",
    "question": "Мені потрібна допомога.",
    "correctAnswer": "I need help.",
    "alternatives": [
      "I need help."
    ]
  },
  {
    "id": "ex-0109",
    "difficulty": 1,
    "category": "articles",
    "pattern": "no article + coffee",
    "explanationUk": "Кава як напій загалом — без артикля. A coffee може означати порцію.",
    "examples": [
      "I drink water.",
      "She likes tea."
    ],
    "contextUk": "Зазвичай я п’ю каву вранці.",
    "type": "contrast",
    "question": "Зазвичай я п’ю каву вранці.",
    "options": [
      "I usually drink coffee.",
      "I usually drink an coffee.",
      "I usually drinks coffee."
    ],
    "correctAnswer": "I usually drink coffee.",
    "wrongExplanations": {
      "I usually drink an coffee.": "Кава як напій загалом — без артикля. A coffee може означати порцію.",
      "I usually drinks coffee.": "Кава як напій загалом — без артикля. A coffee може означати порцію."
    }
  },
  {
    "id": "ex-0110",
    "difficulty": 1,
    "category": "articles",
    "pattern": "no article + coffee",
    "explanationUk": "Кава як напій загалом — без артикля. A coffee може означати порцію.",
    "examples": [
      "I drink water.",
      "She likes tea."
    ],
    "contextUk": "Зазвичай я п’ю каву вранці.",
    "type": "translation",
    "question": "Я зазвичай п’ю каву.",
    "correctAnswer": "I usually drink coffee.",
    "alternatives": [
      "I usually drink coffee.",
      "Usually I drink coffee."
    ]
  },
  {
    "id": "ex-0111",
    "difficulty": 1,
    "category": "articles",
    "pattern": "no article + coffee",
    "explanationUk": "Кава як напій загалом — без артикля. A coffee може означати порцію.",
    "examples": [
      "I drink water.",
      "She likes tea."
    ],
    "contextUk": "Зазвичай я п’ю каву вранці.",
    "type": "blocks",
    "question": "Зазвичай я п’ю каву вранці.",
    "correctAnswer": "I usually drink coffee.",
    "blocks": [
      "I",
      "usually",
      "drink",
      "coffee"
    ]
  },
  {
    "id": "ex-0112",
    "difficulty": 1,
    "category": "articles",
    "pattern": "watch TV",
    "explanationUk": "Дивитися телепередачі — watch TV. A TV — один телевізор як предмет.",
    "examples": [
      "We watch TV at night.",
      "She rarely watches TV."
    ],
    "contextUk": "Увечері я дивлюся телевізор.",
    "type": "contrast",
    "question": "Увечері я дивлюся телевізор.",
    "options": [
      "I watch TV.",
      "I watch an TV.",
      "I watches TV."
    ],
    "correctAnswer": "I watch TV.",
    "wrongExplanations": {
      "I watch an TV.": "Дивитися телепередачі — watch TV. A TV — один телевізор як предмет.",
      "I watches TV.": "Дивитися телепередачі — watch TV. A TV — один телевізор як предмет."
    }
  },
  {
    "id": "ex-0113",
    "difficulty": 1,
    "category": "articles",
    "pattern": "article before job",
    "explanationUk": "Професія однієї людини — a / an.",
    "examples": [
      "He is a designer.",
      "She is an engineer."
    ],
    "contextUk": "Вона працює веброзробницею.",
    "type": "contrast",
    "question": "Вона працює веброзробницею.",
    "options": [
      "She is a web developer.",
      "She is web developer.",
      "She is an web developer."
    ],
    "correctAnswer": "She is a web developer.",
    "wrongExplanations": {
      "She is web developer.": "Професія однієї людини — a / an.",
      "She is an web developer.": "Професія однієї людини — a / an."
    }
  },
  {
    "id": "ex-0114",
    "difficulty": 1,
    "category": "articles",
    "pattern": "article before job",
    "explanationUk": "Професія однієї людини — a / an.",
    "examples": [
      "He is a designer.",
      "She is an engineer."
    ],
    "contextUk": "Вона працює веброзробницею.",
    "type": "translation",
    "question": "Вона веброзробниця.",
    "correctAnswer": "She is a web developer.",
    "alternatives": [
      "She is a web developer."
    ]
  },
  {
    "id": "ex-0115",
    "difficulty": 1,
    "category": "articles",
    "pattern": "article before job",
    "explanationUk": "Професія однієї людини — a / an.",
    "examples": [
      "He is a designer.",
      "She is an engineer."
    ],
    "contextUk": "Вона працює веброзробницею.",
    "type": "blocks",
    "question": "Вона працює веброзробницею.",
    "correctAnswer": "She is a web developer.",
    "blocks": [
      "She",
      "is",
      "a",
      "web",
      "developer"
    ]
  },
  {
    "id": "ex-0116",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + silent h",
    "explanationUk": "Дивіться на звук: h у hour не вимовляється, тому an.",
    "examples": [
      "an honest answer",
      "an hour later"
    ],
    "contextUk": "У мене є година.",
    "type": "contrast",
    "question": "У мене є година.",
    "options": [
      "I have an hour.",
      "I have a hour.",
      "I have hour."
    ],
    "correctAnswer": "I have an hour.",
    "wrongExplanations": {
      "I have a hour.": "Дивіться на звук: h у hour не вимовляється, тому an.",
      "I have hour.": "Дивіться на звук: h у hour не вимовляється, тому an."
    }
  },
  {
    "id": "ex-0117",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + silent h",
    "explanationUk": "Дивіться на звук: h у hour не вимовляється, тому an.",
    "examples": [
      "an honest answer",
      "an hour later"
    ],
    "contextUk": "У мене є година.",
    "type": "translation",
    "question": "У мене є година.",
    "correctAnswer": "I have an hour.",
    "alternatives": [
      "I have an hour."
    ]
  },
  {
    "id": "ex-0118",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + silent h",
    "explanationUk": "Дивіться на звук: h у hour не вимовляється, тому an.",
    "examples": [
      "an honest answer",
      "an hour later"
    ],
    "contextUk": "У мене є година.",
    "type": "blocks",
    "question": "У мене є година.",
    "correctAnswer": "I have an hour.",
    "blocks": [
      "I",
      "have",
      "an",
      "hour"
    ]
  },
  {
    "id": "ex-0119",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + consonant sound",
    "explanationUk": "University починається зі звука «й»: a university.",
    "examples": [
      "a useful tool",
      "a user"
    ],
    "contextUk": "Це університет.",
    "type": "contrast",
    "question": "Це університет.",
    "options": [
      "This is a university.",
      "This is an university.",
      "This is university."
    ],
    "correctAnswer": "This is a university.",
    "wrongExplanations": {
      "This is an university.": "University починається зі звука «й»: a university.",
      "This is university.": "University починається зі звука «й»: a university."
    }
  },
  {
    "id": "ex-0120",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + consonant sound",
    "explanationUk": "University починається зі звука «й»: a university.",
    "examples": [
      "a useful tool",
      "a user"
    ],
    "contextUk": "Це університет.",
    "type": "blocks",
    "question": "Це університет.",
    "correctAnswer": "This is a university.",
    "blocks": [
      "This",
      "is",
      "a",
      "university"
    ]
  },
  {
    "id": "ex-0121",
    "difficulty": 1,
    "category": "articles",
    "pattern": "the + second mention",
    "explanationUk": "Перша згадка — a. Вже знайомий предмет — the.",
    "examples": [
      "I saw a dog. The dog was small.",
      "I have a car. The car is old."
    ],
    "contextUk": "Я купив телефон. Той телефон чорний.",
    "type": "contrast",
    "question": "Я купив телефон. Той телефон чорний.",
    "options": [
      "I bought a phone. The phone is black.",
      "I bought a phone. Phone is black.",
      "I bought a phone. An phone is black."
    ],
    "correctAnswer": "I bought a phone. The phone is black.",
    "wrongExplanations": {
      "I bought a phone. Phone is black.": "Перша згадка — a. Вже знайомий предмет — the.",
      "I bought a phone. An phone is black.": "Перша згадка — a. Вже знайомий предмет — the."
    }
  },
  {
    "id": "ex-0122",
    "difficulty": 1,
    "category": "articles",
    "pattern": "the + second mention",
    "explanationUk": "Перша згадка — a. Вже знайомий предмет — the.",
    "examples": [
      "I saw a dog. The dog was small.",
      "I have a car. The car is old."
    ],
    "contextUk": "Я купив телефон. Той телефон чорний.",
    "type": "blocks",
    "question": "Я купив телефон. Той телефон чорний.",
    "correctAnswer": "I bought a phone. The phone is black.",
    "blocks": [
      "I",
      "bought",
      "a",
      "phone.",
      "The",
      "phone",
      "is",
      "black"
    ]
  },
  {
    "id": "ex-0123",
    "difficulty": 1,
    "category": "articles",
    "pattern": "no article + plural general",
    "explanationUk": "Множина загалом — без артикля.",
    "examples": [
      "I like books.",
      "She likes cats."
    ],
    "contextUk": "Я люблю собак загалом.",
    "type": "contrast",
    "question": "Я люблю собак загалом.",
    "options": [
      "I like dogs.",
      "I like a dogs.",
      "I likes dogs."
    ],
    "correctAnswer": "I like dogs.",
    "wrongExplanations": {
      "I like a dogs.": "Множина загалом — без артикля.",
      "I likes dogs.": "Множина загалом — без артикля."
    }
  },
  {
    "id": "ex-0124",
    "difficulty": 1,
    "category": "articles",
    "pattern": "no article + plural general",
    "explanationUk": "Множина загалом — без артикля.",
    "examples": [
      "I like books.",
      "She likes cats."
    ],
    "contextUk": "Я люблю собак загалом.",
    "type": "translation",
    "question": "Я люблю собак.",
    "correctAnswer": "I like dogs.",
    "alternatives": [
      "I like dogs.",
      "I love dogs."
    ]
  },
  {
    "id": "ex-0125",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + singular noun",
    "explanationUk": "Website — один предмет; перед new стоїть a.",
    "examples": [
      "a new laptop",
      "a small apartment"
    ],
    "contextUk": "Нам потрібен новий сайт.",
    "type": "contrast",
    "question": "Нам потрібен новий сайт.",
    "options": [
      "We need a new website.",
      "We need new website.",
      "We need an new website."
    ],
    "correctAnswer": "We need a new website.",
    "wrongExplanations": {
      "We need new website.": "Website — один предмет; перед new стоїть a.",
      "We need an new website.": "Website — один предмет; перед new стоїть a."
    }
  },
  {
    "id": "ex-0126",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + singular noun",
    "explanationUk": "Website — один предмет; перед new стоїть a.",
    "examples": [
      "a new laptop",
      "a small apartment"
    ],
    "contextUk": "Нам потрібен новий сайт.",
    "type": "blocks",
    "question": "Нам потрібен новий сайт.",
    "correctAnswer": "We need a new website.",
    "blocks": [
      "We",
      "need",
      "a",
      "new",
      "website"
    ]
  },
  {
    "id": "ex-0127",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + vowel sound",
    "explanationUk": "Elevator починається з голосного звуку — an.",
    "examples": [
      "an email",
      "an idea"
    ],
    "contextUk": "У будинку є ліфт.",
    "type": "contrast",
    "question": "У будинку є ліфт.",
    "options": [
      "There is an elevator.",
      "There is a elevator.",
      "There is elevator."
    ],
    "correctAnswer": "There is an elevator.",
    "wrongExplanations": {
      "There is a elevator.": "Elevator починається з голосного звуку — an.",
      "There is elevator.": "Elevator починається з голосного звуку — an."
    }
  },
  {
    "id": "ex-0128",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + vowel sound",
    "explanationUk": "Elevator починається з голосного звуку — an.",
    "examples": [
      "an email",
      "an idea"
    ],
    "contextUk": "У будинку є ліфт.",
    "type": "blocks",
    "question": "У будинку є ліфт.",
    "correctAnswer": "There is an elevator.",
    "blocks": [
      "There",
      "is",
      "an",
      "elevator"
    ]
  },
  {
    "id": "ex-0129",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "wait for",
    "explanationUk": "Чекати на когось — wait for.",
    "examples": [
      "Wait for a reply.",
      "I am waiting for you."
    ],
    "contextUk": "Зачекай на мене.",
    "type": "contrast",
    "question": "Зачекай на мене.",
    "options": [
      "Wait for me.",
      "Wait me.",
      "Wait to me."
    ],
    "correctAnswer": "Wait for me.",
    "wrongExplanations": {
      "Wait me.": "Чекати на когось — wait for.",
      "Wait to me.": "Чекати на когось — wait for."
    }
  },
  {
    "id": "ex-0130",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "wait for",
    "explanationUk": "Чекати на когось — wait for.",
    "examples": [
      "Wait for a reply.",
      "I am waiting for you."
    ],
    "contextUk": "Зачекай на мене.",
    "type": "translation",
    "question": "Зачекай на мене.",
    "correctAnswer": "Wait for me.",
    "alternatives": [
      "Wait for me."
    ]
  },
  {
    "id": "ex-0131",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "listen to",
    "explanationUk": "Слухати щось — listen to. Listen for — прислухатися, очікуючи звук.",
    "examples": [
      "Listen to me.",
      "Listen to the podcast."
    ],
    "contextUk": "Я слухаю музику.",
    "type": "contrast",
    "question": "Я слухаю музику.",
    "options": [
      "I listen to music.",
      "I listen music.",
      "I listen for music."
    ],
    "correctAnswer": "I listen to music.",
    "wrongExplanations": {
      "I listen music.": "Слухати щось — listen to. Listen for — прислухатися, очікуючи звук.",
      "I listen for music.": "Слухати щось — listen to. Listen for — прислухатися, очікуючи звук."
    }
  },
  {
    "id": "ex-0132",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "listen to",
    "explanationUk": "Слухати щось — listen to. Listen for — прислухатися, очікуючи звук.",
    "examples": [
      "Listen to me.",
      "Listen to the podcast."
    ],
    "contextUk": "Я слухаю музику.",
    "type": "translation",
    "question": "Я слухаю музику.",
    "correctAnswer": "I listen to music.",
    "alternatives": [
      "I listen to music."
    ]
  },
  {
    "id": "ex-0133",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "listen to",
    "explanationUk": "Слухати щось — listen to. Listen for — прислухатися, очікуючи звук.",
    "examples": [
      "Listen to me.",
      "Listen to the podcast."
    ],
    "contextUk": "Я слухаю музику.",
    "type": "blocks",
    "question": "Я слухаю музику.",
    "correctAnswer": "I listen to music.",
    "blocks": [
      "I",
      "listen",
      "to",
      "music"
    ]
  },
  {
    "id": "ex-0134",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "ask for",
    "explanationUk": "Просити щось — ask for.",
    "examples": [
      "Ask for directions.",
      "Ask for a receipt."
    ],
    "contextUk": "Попроси допомоги.",
    "type": "contrast",
    "question": "Попроси допомоги.",
    "options": [
      "Ask for help.",
      "Ask help.",
      "Ask of help."
    ],
    "correctAnswer": "Ask for help.",
    "wrongExplanations": {
      "Ask help.": "Просити щось — ask for.",
      "Ask of help.": "Просити щось — ask for."
    }
  },
  {
    "id": "ex-0135",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "ask for",
    "explanationUk": "Просити щось — ask for.",
    "examples": [
      "Ask for directions.",
      "Ask for a receipt."
    ],
    "contextUk": "Попроси допомоги.",
    "type": "translation",
    "question": "Попроси допомоги.",
    "correctAnswer": "Ask for help.",
    "alternatives": [
      "Ask for help."
    ]
  },
  {
    "id": "ex-0136",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "pay for",
    "explanationUk": "Оплачувати покупку — pay for. Pay a ticket також може означати сплатити штраф.",
    "examples": [
      "Pay for dinner.",
      "Pay for the room."
    ],
    "contextUk": "Я купую квиток і оплачую його.",
    "type": "contrast",
    "question": "Я купую квиток і оплачую його.",
    "options": [
      "I pay for the ticket.",
      "I pay to the ticket.",
      "I pay of the ticket."
    ],
    "correctAnswer": "I pay for the ticket.",
    "wrongExplanations": {
      "I pay to the ticket.": "Оплачувати покупку — pay for. Pay a ticket також може означати сплатити штраф.",
      "I pay of the ticket.": "Оплачувати покупку — pay for. Pay a ticket також може означати сплатити штраф."
    }
  },
  {
    "id": "ex-0137",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "pay for",
    "explanationUk": "Оплачувати покупку — pay for. Pay a ticket також може означати сплатити штраф.",
    "examples": [
      "Pay for dinner.",
      "Pay for the room."
    ],
    "contextUk": "Я купую квиток і оплачую його.",
    "type": "blocks",
    "question": "Я купую квиток і оплачую його.",
    "correctAnswer": "I pay for the ticket.",
    "blocks": [
      "I",
      "pay",
      "for",
      "the",
      "ticket"
    ]
  },
  {
    "id": "ex-0138",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "talk to",
    "explanationUk": "Розмовляти з людиною — talk to або talk with.",
    "examples": [
      "Talk to your friend.",
      "Speak to the manager."
    ],
    "contextUk": "Я розмовляю з колегою.",
    "type": "contrast",
    "question": "Я розмовляю з колегою.",
    "options": [
      "I talk to my coworker.",
      "I talk my coworker.",
      "I talks to my coworker."
    ],
    "correctAnswer": "I talk to my coworker.",
    "wrongExplanations": {
      "I talk my coworker.": "Розмовляти з людиною — talk to або talk with.",
      "I talks to my coworker.": "Розмовляти з людиною — talk to або talk with."
    }
  },
  {
    "id": "ex-0139",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "talk to",
    "explanationUk": "Розмовляти з людиною — talk to або talk with.",
    "examples": [
      "Talk to your friend.",
      "Speak to the manager."
    ],
    "contextUk": "Я розмовляю з колегою.",
    "type": "blocks",
    "question": "Я розмовляю з колегою.",
    "correctAnswer": "I talk to my coworker.",
    "blocks": [
      "I",
      "talk",
      "to",
      "my",
      "coworker"
    ]
  },
  {
    "id": "ex-0140",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "look for",
    "explanationUk": "Шукати — look for. Look at — дивитися на.",
    "examples": [
      "Look for your keys.",
      "Look for a job."
    ],
    "contextUk": "Я шукаю телефон.",
    "type": "contrast",
    "question": "Я шукаю телефон.",
    "options": [
      "I am looking for my phone.",
      "I am looking my phone.",
      "I am looking to my phone."
    ],
    "correctAnswer": "I am looking for my phone.",
    "wrongExplanations": {
      "I am looking my phone.": "Шукати — look for. Look at — дивитися на.",
      "I am looking to my phone.": "Шукати — look for. Look at — дивитися на."
    }
  },
  {
    "id": "ex-0141",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "look for",
    "explanationUk": "Шукати — look for. Look at — дивитися на.",
    "examples": [
      "Look for your keys.",
      "Look for a job."
    ],
    "contextUk": "Я шукаю телефон.",
    "type": "translation",
    "question": "Я шукаю свій телефон.",
    "correctAnswer": "I am looking for my phone.",
    "alternatives": [
      "I am looking for my phone."
    ]
  },
  {
    "id": "ex-0142",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "look for",
    "explanationUk": "Шукати — look for. Look at — дивитися на.",
    "examples": [
      "Look for your keys.",
      "Look for a job."
    ],
    "contextUk": "Я шукаю телефон.",
    "type": "blocks",
    "question": "Я шукаю телефон.",
    "correctAnswer": "I am looking for my phone.",
    "blocks": [
      "I",
      "am",
      "looking",
      "for",
      "my",
      "phone"
    ]
  },
  {
    "id": "ex-0143",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "think about",
    "explanationUk": "Думати про щось — think about.",
    "examples": [
      "Think about your plans.",
      "Think about the question."
    ],
    "contextUk": "Я думаю про подорож.",
    "type": "contrast",
    "question": "Я думаю про подорож.",
    "options": [
      "I am thinking about the trip.",
      "I am thinking the trip.",
      "I am thinking for the trip."
    ],
    "correctAnswer": "I am thinking about the trip.",
    "wrongExplanations": {
      "I am thinking the trip.": "Думати про щось — think about.",
      "I am thinking for the trip.": "Думати про щось — think about."
    }
  },
  {
    "id": "ex-0144",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "think about",
    "explanationUk": "Думати про щось — think about.",
    "examples": [
      "Think about your plans.",
      "Think about the question."
    ],
    "contextUk": "Я думаю про подорож.",
    "type": "blocks",
    "question": "Я думаю про подорож.",
    "correctAnswer": "I am thinking about the trip.",
    "blocks": [
      "I",
      "am",
      "thinking",
      "about",
      "the",
      "trip"
    ]
  },
  {
    "id": "ex-0145",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "work on",
    "explanationUk": "Працювати над завданням — work on.",
    "examples": [
      "Work on a project.",
      "Work on your English."
    ],
    "contextUk": "Я працюю над сайтом.",
    "type": "contrast",
    "question": "Я працюю над сайтом.",
    "options": [
      "I am working on a website.",
      "I am working a website.",
      "I am working to a website."
    ],
    "correctAnswer": "I am working on a website.",
    "wrongExplanations": {
      "I am working a website.": "Працювати над завданням — work on.",
      "I am working to a website.": "Працювати над завданням — work on."
    }
  },
  {
    "id": "ex-0146",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "work on",
    "explanationUk": "Працювати над завданням — work on.",
    "examples": [
      "Work on a project.",
      "Work on your English."
    ],
    "contextUk": "Я працюю над сайтом.",
    "type": "translation",
    "question": "Я працюю над сайтом.",
    "correctAnswer": "I am working on a website.",
    "alternatives": [
      "I am working on a website."
    ]
  },
  {
    "id": "ex-0147",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "work on",
    "explanationUk": "Працювати над завданням — work on.",
    "examples": [
      "Work on a project.",
      "Work on your English."
    ],
    "contextUk": "Я працюю над сайтом.",
    "type": "blocks",
    "question": "Я працюю над сайтом.",
    "correctAnswer": "I am working on a website.",
    "blocks": [
      "I",
      "am",
      "working",
      "on",
      "a",
      "website"
    ]
  },
  {
    "id": "ex-0148",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "ready for",
    "explanationUk": "Готовий до чогось — ready for.",
    "examples": [
      "Get ready for work.",
      "Ready for the trip."
    ],
    "contextUk": "Я готовий до зустрічі.",
    "type": "contrast",
    "question": "Я готовий до зустрічі.",
    "options": [
      "I am ready for the meeting.",
      "I am ready the meeting.",
      "I am ready of the meeting."
    ],
    "correctAnswer": "I am ready for the meeting.",
    "wrongExplanations": {
      "I am ready the meeting.": "Готовий до чогось — ready for.",
      "I am ready of the meeting.": "Готовий до чогось — ready for."
    }
  },
  {
    "id": "ex-0149",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "ready for",
    "explanationUk": "Готовий до чогось — ready for.",
    "examples": [
      "Get ready for work.",
      "Ready for the trip."
    ],
    "contextUk": "Я готовий до зустрічі.",
    "type": "blocks",
    "question": "Я готовий до зустрічі.",
    "correctAnswer": "I am ready for the meeting.",
    "blocks": [
      "I",
      "am",
      "ready",
      "for",
      "the",
      "meeting"
    ]
  },
  {
    "id": "ex-0150",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "interested in",
    "explanationUk": "Зацікавлений у чомусь — interested in.",
    "examples": [
      "interested in music",
      "interested in design"
    ],
    "contextUk": "Мені цікаві технології.",
    "type": "contrast",
    "question": "Мені цікаві технології.",
    "options": [
      "I am interested in technology.",
      "I am interested on technology.",
      "I am interested for technology."
    ],
    "correctAnswer": "I am interested in technology.",
    "wrongExplanations": {
      "I am interested on technology.": "Зацікавлений у чомусь — interested in.",
      "I am interested for technology.": "Зацікавлений у чомусь — interested in."
    }
  },
  {
    "id": "ex-0151",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "interested in",
    "explanationUk": "Зацікавлений у чомусь — interested in.",
    "examples": [
      "interested in music",
      "interested in design"
    ],
    "contextUk": "Мені цікаві технології.",
    "type": "blocks",
    "question": "Мені цікаві технології.",
    "correctAnswer": "I am interested in technology.",
    "blocks": [
      "I",
      "am",
      "interested",
      "in",
      "technology"
    ]
  },
  {
    "id": "ex-0152",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "good at",
    "explanationUk": "Добре вміти щось — good at.",
    "examples": [
      "good at cooking",
      "good at English"
    ],
    "contextUk": "Я добре програмую.",
    "type": "contrast",
    "question": "Я добре програмую.",
    "options": [
      "I am good at programming.",
      "I am good in programming.",
      "I am good for programming."
    ],
    "correctAnswer": "I am good at programming.",
    "wrongExplanations": {
      "I am good in programming.": "Добре вміти щось — good at.",
      "I am good for programming.": "Добре вміти щось — good at."
    }
  },
  {
    "id": "ex-0153",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "good at",
    "explanationUk": "Добре вміти щось — good at.",
    "examples": [
      "good at cooking",
      "good at English"
    ],
    "contextUk": "Я добре програмую.",
    "type": "blocks",
    "question": "Я добре програмую.",
    "correctAnswer": "I am good at programming.",
    "blocks": [
      "I",
      "am",
      "good",
      "at",
      "programming"
    ]
  },
  {
    "id": "ex-0154",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "afraid of",
    "explanationUk": "Боятися чогось — afraid of.",
    "examples": [
      "afraid of heights",
      "afraid of dogs"
    ],
    "contextUk": "Вона боїться павуків.",
    "type": "contrast",
    "question": "Вона боїться павуків.",
    "options": [
      "She is afraid of spiders.",
      "She is afraid spiders.",
      "She is afraid to spiders."
    ],
    "correctAnswer": "She is afraid of spiders.",
    "wrongExplanations": {
      "She is afraid spiders.": "Боятися чогось — afraid of.",
      "She is afraid to spiders.": "Боятися чогось — afraid of."
    }
  },
  {
    "id": "ex-0155",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "afraid of",
    "explanationUk": "Боятися чогось — afraid of.",
    "examples": [
      "afraid of heights",
      "afraid of dogs"
    ],
    "contextUk": "Вона боїться павуків.",
    "type": "blocks",
    "question": "Вона боїться павуків.",
    "correctAnswer": "She is afraid of spiders.",
    "blocks": [
      "She",
      "is",
      "afraid",
      "of",
      "spiders"
    ]
  },
  {
    "id": "ex-0156",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "tired of",
    "explanationUk": "Щось набридло — tired of + дія з -ing або предмет.",
    "examples": [
      "tired of noise",
      "tired of delays"
    ],
    "contextUk": "Мені набридло чекати.",
    "type": "contrast",
    "question": "Мені набридло чекати.",
    "options": [
      "I am tired of waiting.",
      "I am tired to waiting.",
      "I am tired for waiting."
    ],
    "correctAnswer": "I am tired of waiting.",
    "wrongExplanations": {
      "I am tired to waiting.": "Щось набридло — tired of + дія з -ing або предмет.",
      "I am tired for waiting.": "Щось набридло — tired of + дія з -ing або предмет."
    }
  },
  {
    "id": "ex-0157",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "tired of",
    "explanationUk": "Щось набридло — tired of + дія з -ing або предмет.",
    "examples": [
      "tired of noise",
      "tired of delays"
    ],
    "contextUk": "Мені набридло чекати.",
    "type": "blocks",
    "question": "Мені набридло чекати.",
    "correctAnswer": "I am tired of waiting.",
    "blocks": [
      "I",
      "am",
      "tired",
      "of",
      "waiting"
    ]
  },
  {
    "id": "ex-0158",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "belong to",
    "explanationUk": "Належати комусь — belong to.",
    "examples": [
      "It belongs to her.",
      "The keys belong to him."
    ],
    "contextUk": "Ця сумка належить мені.",
    "type": "contrast",
    "question": "Ця сумка належить мені.",
    "options": [
      "This bag belongs to me.",
      "This bag belongs me.",
      "This bag belongs for me."
    ],
    "correctAnswer": "This bag belongs to me.",
    "wrongExplanations": {
      "This bag belongs me.": "Належати комусь — belong to.",
      "This bag belongs for me.": "Належати комусь — belong to."
    }
  },
  {
    "id": "ex-0159",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "belong to",
    "explanationUk": "Належати комусь — belong to.",
    "examples": [
      "It belongs to her.",
      "The keys belong to him."
    ],
    "contextUk": "Ця сумка належить мені.",
    "type": "blocks",
    "question": "Ця сумка належить мені.",
    "correctAnswer": "This bag belongs to me.",
    "blocks": [
      "This",
      "bag",
      "belongs",
      "to",
      "me"
    ]
  },
  {
    "id": "ex-0160",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "depend on",
    "explanationUk": "Залежати від — depend on.",
    "examples": [
      "It depends on you.",
      "We depend on the internet."
    ],
    "contextUk": "Це залежить від погоди.",
    "type": "contrast",
    "question": "Це залежить від погоди.",
    "options": [
      "It depends on the weather.",
      "It depends of the weather.",
      "It depends from the weather."
    ],
    "correctAnswer": "It depends on the weather.",
    "wrongExplanations": {
      "It depends of the weather.": "Залежати від — depend on.",
      "It depends from the weather.": "Залежати від — depend on."
    }
  },
  {
    "id": "ex-0161",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "depend on",
    "explanationUk": "Залежати від — depend on.",
    "examples": [
      "It depends on you.",
      "We depend on the internet."
    ],
    "contextUk": "Це залежить від погоди.",
    "type": "blocks",
    "question": "Це залежить від погоди.",
    "correctAnswer": "It depends on the weather.",
    "blocks": [
      "It",
      "depends",
      "on",
      "the",
      "weather"
    ]
  },
  {
    "id": "ex-0162",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "this introduces",
    "explanationUk": "This is — представляємо або показуємо предмет.",
    "examples": [
      "This is my car.",
      "This is my office."
    ],
    "contextUk": "Я показую свій телефон: «Це мій телефон».",
    "type": "contrast",
    "question": "Я показую свій телефон: «Це мій телефон».",
    "options": [
      "This is my phone.",
      "This my phone.",
      "Its is my phone."
    ],
    "correctAnswer": "This is my phone.",
    "wrongExplanations": {
      "This my phone.": "This is — представляємо або показуємо предмет.",
      "Its is my phone.": "This is — представляємо або показуємо предмет."
    }
  },
  {
    "id": "ex-0163",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "this introduces",
    "explanationUk": "This is — представляємо або показуємо предмет.",
    "examples": [
      "This is my car.",
      "This is my office."
    ],
    "contextUk": "Я показую свій телефон: «Це мій телефон».",
    "type": "translation",
    "question": "Це мій телефон.",
    "correctAnswer": "This is my phone.",
    "alternatives": [
      "This is my phone."
    ]
  },
  {
    "id": "ex-0164",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "this introduces",
    "explanationUk": "This is — представляємо або показуємо предмет.",
    "examples": [
      "This is my car.",
      "This is my office."
    ],
    "contextUk": "Я показую свій телефон: «Це мій телефон».",
    "type": "blocks",
    "question": "Я показую свій телефон: «Це мій телефон».",
    "correctAnswer": "This is my phone.",
    "blocks": [
      "This",
      "is",
      "my",
      "phone"
    ]
  },
  {
    "id": "ex-0165",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "it refers back",
    "explanationUk": "It замінює вже названий предмет. Не пропускайте it.",
    "examples": [
      "I have a car. It is old.",
      "Here is the key. It is small."
    ],
    "contextUk": "У мене є телефон. Він новий.",
    "type": "contrast",
    "question": "У мене є телефон. Він новий.",
    "options": [
      "I have a phone. It is new.",
      "I have a phone. Its is new.",
      "I have a phone. Is new."
    ],
    "correctAnswer": "I have a phone. It is new.",
    "wrongExplanations": {
      "I have a phone. Its is new.": "It замінює вже названий предмет. Не пропускайте it.",
      "I have a phone. Is new.": "It замінює вже названий предмет. Не пропускайте it."
    }
  },
  {
    "id": "ex-0166",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "it refers back",
    "explanationUk": "It замінює вже названий предмет. Не пропускайте it.",
    "examples": [
      "I have a car. It is old.",
      "Here is the key. It is small."
    ],
    "contextUk": "У мене є телефон. Він новий.",
    "type": "blocks",
    "question": "У мене є телефон. Він новий.",
    "correctAnswer": "I have a phone. It is new.",
    "blocks": [
      "I",
      "have",
      "a",
      "phone.",
      "It",
      "is",
      "new"
    ]
  },
  {
    "id": "ex-0167",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "it's = it is",
    "explanationUk": "It’s = it is. Its означає «його/її» для предмета або тварини.",
    "examples": [
      "It's cold.",
      "It's late."
    ],
    "contextUk": "Це добре. Скоротіть it is.",
    "type": "contrast",
    "question": "Це добре. Скоротіть it is.",
    "options": [
      "It's good.",
      "Its good.",
      "It's is good."
    ],
    "correctAnswer": "It's good.",
    "wrongExplanations": {
      "Its good.": "It’s = it is. Its означає «його/її» для предмета або тварини.",
      "It's is good.": "It’s = it is. Its означає «його/її» для предмета або тварини."
    }
  },
  {
    "id": "ex-0168",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "it's = it is",
    "explanationUk": "It’s = it is. Its означає «його/її» для предмета або тварини.",
    "examples": [
      "It's cold.",
      "It's late."
    ],
    "contextUk": "Це добре. Скоротіть it is.",
    "type": "translation",
    "question": "Це добре.",
    "correctAnswer": "It's good.",
    "alternatives": [
      "It's good."
    ]
  },
  {
    "id": "ex-0169",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "its = possession",
    "explanationUk": "Its + предмет — чий саме предмет. Апострофа немає.",
    "examples": [
      "Its screen is broken.",
      "Its color is blue."
    ],
    "contextUk": "Батарея цього телефона розряджена.",
    "type": "contrast",
    "question": "Батарея цього телефона розряджена.",
    "options": [
      "Its battery is dead.",
      "It's battery is dead.",
      "It battery is dead."
    ],
    "correctAnswer": "Its battery is dead.",
    "wrongExplanations": {
      "It's battery is dead.": "Its + предмет — чий саме предмет. Апострофа немає.",
      "It battery is dead.": "Its + предмет — чий саме предмет. Апострофа немає."
    }
  },
  {
    "id": "ex-0170",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "its = possession",
    "explanationUk": "Its + предмет — чий саме предмет. Апострофа немає.",
    "examples": [
      "Its screen is broken.",
      "Its color is blue."
    ],
    "contextUk": "Батарея цього телефона розряджена.",
    "type": "translation",
    "question": "Його батарея розряджена (про телефон).",
    "correctAnswer": "Its battery is dead.",
    "alternatives": [
      "Its battery is dead."
    ]
  },
  {
    "id": "ex-0171",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "its = possession",
    "explanationUk": "Its + предмет — чий саме предмет. Апострофа немає.",
    "examples": [
      "Its screen is broken.",
      "Its color is blue."
    ],
    "contextUk": "Батарея цього телефона розряджена.",
    "type": "blocks",
    "question": "Батарея цього телефона розряджена.",
    "correctAnswer": "Its battery is dead.",
    "blocks": [
      "Its",
      "battery",
      "is",
      "dead"
    ]
  },
  {
    "id": "ex-0172",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "its = possession",
    "explanationUk": "Його двигун — its engine. It’s = it is / it has.",
    "examples": [
      "Its doors are locked.",
      "Its wheels are new."
    ],
    "contextUk": "Двигун цієї машини справний.",
    "type": "contrast",
    "question": "Двигун цієї машини справний.",
    "options": [
      "Its engine is good.",
      "It's engine is good.",
      "It engine is good."
    ],
    "correctAnswer": "Its engine is good.",
    "wrongExplanations": {
      "It's engine is good.": "Його двигун — its engine. It’s = it is / it has.",
      "It engine is good.": "Його двигун — its engine. It’s = it is / it has."
    }
  },
  {
    "id": "ex-0173",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "its = possession",
    "explanationUk": "Його двигун — its engine. It’s = it is / it has.",
    "examples": [
      "Its doors are locked.",
      "Its wheels are new."
    ],
    "contextUk": "Двигун цієї машини справний.",
    "type": "blocks",
    "question": "Двигун цієї машини справний.",
    "correctAnswer": "Its engine is good.",
    "blocks": [
      "Its",
      "engine",
      "is",
      "good"
    ]
  },
  {
    "id": "ex-0174",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "it's = it is",
    "explanationUk": "It’s raining = It is raining. Для погоди потрібне it.",
    "examples": [
      "It's snowing.",
      "It's sunny."
    ],
    "contextUk": "Надворі дощить.",
    "type": "contrast",
    "question": "Надворі дощить.",
    "options": [
      "It's raining.",
      "Its raining.",
      "It's is raining."
    ],
    "correctAnswer": "It's raining.",
    "wrongExplanations": {
      "Its raining.": "It’s raining = It is raining. Для погоди потрібне it.",
      "It's is raining.": "It’s raining = It is raining. Для погоди потрібне it."
    }
  },
  {
    "id": "ex-0175",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "it's = it is",
    "explanationUk": "It’s raining = It is raining. Для погоди потрібне it.",
    "examples": [
      "It's snowing.",
      "It's sunny."
    ],
    "contextUk": "Надворі дощить.",
    "type": "translation",
    "question": "Дощить.",
    "correctAnswer": "It's raining.",
    "alternatives": [
      "It's raining."
    ]
  },
  {
    "id": "ex-0176",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "it's = it has",
    "explanationUk": "Перед been скорочення it’s означає it has.",
    "examples": [
      "It's been fun.",
      "It's been a busy week."
    ],
    "contextUk": "Уже було довго: скоротіть It has been a long day.",
    "type": "contrast",
    "question": "Уже було довго: скоротіть It has been a long day.",
    "options": [
      "It's been a long day.",
      "Its been a long day.",
      "It's has been a long day."
    ],
    "correctAnswer": "It's been a long day.",
    "wrongExplanations": {
      "Its been a long day.": "Перед been скорочення it’s означає it has.",
      "It's has been a long day.": "Перед been скорочення it’s означає it has."
    }
  },
  {
    "id": "ex-0177",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "it's = it has",
    "explanationUk": "Перед been скорочення it’s означає it has.",
    "examples": [
      "It's been fun.",
      "It's been a busy week."
    ],
    "contextUk": "Уже було довго: скоротіть It has been a long day.",
    "type": "blocks",
    "question": "Уже було довго: скоротіть It has been a long day.",
    "correctAnswer": "It's been a long day.",
    "blocks": [
      "It's",
      "been",
      "a",
      "long",
      "day"
    ]
  },
  {
    "id": "ex-0178",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "this introduces",
    "explanationUk": "Представити когось: This is my friend.",
    "examples": [
      "This is Anna.",
      "This is my coworker."
    ],
    "contextUk": "Я знайомлю вас із другом.",
    "type": "contrast",
    "question": "Я знайомлю вас із другом.",
    "options": [
      "This is my friend.",
      "Its my friend.",
      "This my friend is."
    ],
    "correctAnswer": "This is my friend.",
    "wrongExplanations": {
      "Its my friend.": "Представити когось: This is my friend.",
      "This my friend is.": "Представити когось: This is my friend."
    }
  },
  {
    "id": "ex-0179",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "this introduces",
    "explanationUk": "Представити когось: This is my friend.",
    "examples": [
      "This is Anna.",
      "This is my coworker."
    ],
    "contextUk": "Я знайомлю вас із другом.",
    "type": "translation",
    "question": "Це мій друг.",
    "correctAnswer": "This is my friend.",
    "alternatives": [
      "This is my friend."
    ]
  },
  {
    "id": "ex-0180",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "this introduces",
    "explanationUk": "Представити когось: This is my friend.",
    "examples": [
      "This is Anna.",
      "This is my coworker."
    ],
    "contextUk": "Я знайомлю вас із другом.",
    "type": "blocks",
    "question": "Я знайомлю вас із другом.",
    "correctAnswer": "This is my friend.",
    "blocks": [
      "This",
      "is",
      "my",
      "friend"
    ]
  },
  {
    "id": "ex-0181",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "it in questions",
    "explanationUk": "It — сам пристрій; does ставимо перед it у запитанні.",
    "examples": [
      "Is it new?",
      "Does it help?"
    ],
    "contextUk": "Питаю про відомий нам пристрій: він працює?",
    "type": "contrast",
    "question": "Питаю про відомий нам пристрій: він працює?",
    "options": [
      "Does it work?",
      "Does its work?",
      "Do it work?"
    ],
    "correctAnswer": "Does it work?",
    "wrongExplanations": {
      "Does its work?": "It — сам пристрій; does ставимо перед it у запитанні.",
      "Do it work?": "It — сам пристрій; does ставимо перед it у запитанні."
    }
  },
  {
    "id": "ex-0182",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "it in questions",
    "explanationUk": "It — сам пристрій; does ставимо перед it у запитанні.",
    "examples": [
      "Is it new?",
      "Does it help?"
    ],
    "contextUk": "Питаю про відомий нам пристрій: він працює?",
    "type": "translation",
    "question": "Воно працює?",
    "correctAnswer": "Does it work?",
    "alternatives": [
      "Does it work?"
    ]
  },
  {
    "id": "ex-0183",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "its = possession",
    "explanationUk": "Перед назвою того, що належить закладу: its pizza.",
    "examples": [
      "The hotel has its own pool.",
      "The app saves its settings."
    ],
    "contextUk": "Ресторан відомий своєю піцою.",
    "type": "contrast",
    "question": "Ресторан відомий своєю піцою.",
    "options": [
      "The restaurant is famous for its pizza.",
      "The restaurant is famous for it's pizza.",
      "The restaurant is famous for it pizza."
    ],
    "correctAnswer": "The restaurant is famous for its pizza.",
    "wrongExplanations": {
      "The restaurant is famous for it's pizza.": "Перед назвою того, що належить закладу: its pizza.",
      "The restaurant is famous for it pizza.": "Перед назвою того, що належить закладу: its pizza."
    }
  },
  {
    "id": "ex-0184",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "its = possession",
    "explanationUk": "Перед назвою того, що належить закладу: its pizza.",
    "examples": [
      "The hotel has its own pool.",
      "The app saves its settings."
    ],
    "contextUk": "Ресторан відомий своєю піцою.",
    "type": "blocks",
    "question": "Ресторан відомий своєю піцою.",
    "correctAnswer": "The restaurant is famous for its pizza.",
    "blocks": [
      "The",
      "restaurant",
      "is",
      "famous",
      "for",
      "its",
      "pizza"
    ]
  },
  {
    "id": "ex-0185",
    "difficulty": 1,
    "category": "be",
    "pattern": "I am + state",
    "explanationUk": "Стан: I am + busy / tired / happy.",
    "examples": [
      "I am tired.",
      "I am ready."
    ],
    "contextUk": "Я зайнятий.",
    "type": "contrast",
    "question": "Я зайнятий.",
    "options": [
      "I am busy.",
      "I have busy.",
      "I is busy."
    ],
    "correctAnswer": "I am busy.",
    "wrongExplanations": {
      "I have busy.": "Стан: I am + busy / tired / happy.",
      "I is busy.": "Стан: I am + busy / tired / happy."
    }
  },
  {
    "id": "ex-0186",
    "difficulty": 1,
    "category": "be",
    "pattern": "I am + state",
    "explanationUk": "Стан: I am + busy / tired / happy.",
    "examples": [
      "I am tired.",
      "I am ready."
    ],
    "contextUk": "Я зайнятий.",
    "type": "translation",
    "question": "Я зайнятий.",
    "correctAnswer": "I am busy.",
    "alternatives": [
      "I am busy."
    ]
  },
  {
    "id": "ex-0187",
    "difficulty": 1,
    "category": "be",
    "pattern": "he/she is",
    "explanationUk": "З he / she / it використовуємо is.",
    "examples": [
      "He is busy.",
      "It is ready."
    ],
    "contextUk": "Вона вдома.",
    "type": "contrast",
    "question": "Вона вдома.",
    "options": [
      "She is at home.",
      "She are at home.",
      "She am at home."
    ],
    "correctAnswer": "She is at home.",
    "wrongExplanations": {
      "She are at home.": "З he / she / it використовуємо is.",
      "She am at home.": "З he / she / it використовуємо is."
    }
  },
  {
    "id": "ex-0188",
    "difficulty": 1,
    "category": "be",
    "pattern": "he/she is",
    "explanationUk": "З he / she / it використовуємо is.",
    "examples": [
      "He is busy.",
      "It is ready."
    ],
    "contextUk": "Вона вдома.",
    "type": "blocks",
    "question": "Вона вдома.",
    "correctAnswer": "She is at home.",
    "blocks": [
      "She",
      "is",
      "at",
      "home"
    ]
  },
  {
    "id": "ex-0189",
    "difficulty": 1,
    "category": "be",
    "pattern": "we/they are",
    "explanationUk": "Стан із they / we / you — are.",
    "examples": [
      "We are ready.",
      "You are right."
    ],
    "contextUk": "Вони щасливі.",
    "type": "contrast",
    "question": "Вони щасливі.",
    "options": [
      "They are happy.",
      "They have happy.",
      "They is happy."
    ],
    "correctAnswer": "They are happy.",
    "wrongExplanations": {
      "They have happy.": "Стан із they / we / you — are.",
      "They is happy.": "Стан із they / we / you — are."
    }
  },
  {
    "id": "ex-0190",
    "difficulty": 1,
    "category": "be",
    "pattern": "we/they are",
    "explanationUk": "Стан із they / we / you — are.",
    "examples": [
      "We are ready.",
      "You are right."
    ],
    "contextUk": "Вони щасливі.",
    "type": "translation",
    "question": "Вони щасливі.",
    "correctAnswer": "They are happy.",
    "alternatives": [
      "They are happy."
    ]
  },
  {
    "id": "ex-0191",
    "difficulty": 1,
    "category": "be",
    "pattern": "be question",
    "explanationUk": "Зі станом ready запитання починається з are.",
    "examples": [
      "Is he busy?",
      "Are they tired?"
    ],
    "contextUk": "Ти готовий?",
    "type": "contrast",
    "question": "Ти готовий?",
    "options": [
      "Are you ready?",
      "Do you ready?",
      "You ready?"
    ],
    "correctAnswer": "Are you ready?",
    "wrongExplanations": {
      "Do you ready?": "Зі станом ready запитання починається з are.",
      "You ready?": "Зі станом ready запитання починається з are."
    }
  },
  {
    "id": "ex-0192",
    "difficulty": 1,
    "category": "be",
    "pattern": "be question",
    "explanationUk": "Зі станом ready запитання починається з are.",
    "examples": [
      "Is he busy?",
      "Are they tired?"
    ],
    "contextUk": "Ти готовий?",
    "type": "translation",
    "question": "Ти готовий?",
    "correctAnswer": "Are you ready?",
    "alternatives": [
      "Are you ready?"
    ]
  },
  {
    "id": "ex-0193",
    "difficulty": 1,
    "category": "be",
    "pattern": "be negative",
    "explanationUk": "Заперечення зі станом: is not / isn’t.",
    "examples": [
      "I am not busy.",
      "They are not ready."
    ],
    "contextUk": "Він не втомлений.",
    "type": "contrast",
    "question": "Він не втомлений.",
    "options": [
      "He is not tired.",
      "He does not tired.",
      "He not is tired."
    ],
    "correctAnswer": "He is not tired.",
    "wrongExplanations": {
      "He does not tired.": "Заперечення зі станом: is not / isn’t.",
      "He not is tired.": "Заперечення зі станом: is not / isn’t."
    }
  },
  {
    "id": "ex-0194",
    "difficulty": 1,
    "category": "be",
    "pattern": "be negative",
    "explanationUk": "Заперечення зі станом: is not / isn’t.",
    "examples": [
      "I am not busy.",
      "They are not ready."
    ],
    "contextUk": "Він не втомлений.",
    "type": "translation",
    "question": "Він не втомлений.",
    "correctAnswer": "He is not tired.",
    "alternatives": [
      "He is not tired."
    ]
  },
  {
    "id": "ex-0195",
    "difficulty": 1,
    "category": "be",
    "pattern": "be negative",
    "explanationUk": "Заперечення зі станом: is not / isn’t.",
    "examples": [
      "I am not busy.",
      "They are not ready."
    ],
    "contextUk": "Він не втомлений.",
    "type": "blocks",
    "question": "Він не втомлений.",
    "correctAnswer": "He is not tired.",
    "blocks": [
      "He",
      "is",
      "not",
      "tired"
    ]
  },
  {
    "id": "ex-0196",
    "difficulty": 1,
    "category": "have",
    "pattern": "I/they have",
    "explanationUk": "Мати щось: I / you / we / they have.",
    "examples": [
      "I have a laptop.",
      "We have a house."
    ],
    "contextUk": "У них є машина.",
    "type": "contrast",
    "question": "У них є машина.",
    "options": [
      "They have a car.",
      "They are a car.",
      "They has a car."
    ],
    "correctAnswer": "They have a car.",
    "wrongExplanations": {
      "They are a car.": "Мати щось: I / you / we / they have.",
      "They has a car.": "Мати щось: I / you / we / they have."
    }
  },
  {
    "id": "ex-0197",
    "difficulty": 1,
    "category": "have",
    "pattern": "I/they have",
    "explanationUk": "Мати щось: I / you / we / they have.",
    "examples": [
      "I have a laptop.",
      "We have a house."
    ],
    "contextUk": "У них є машина.",
    "type": "translation",
    "question": "У них є машина.",
    "correctAnswer": "They have a car.",
    "alternatives": [
      "They have a car."
    ]
  },
  {
    "id": "ex-0198",
    "difficulty": 1,
    "category": "have",
    "pattern": "I/they have",
    "explanationUk": "Мати щось: I / you / we / they have.",
    "examples": [
      "I have a laptop.",
      "We have a house."
    ],
    "contextUk": "У них є машина.",
    "type": "blocks",
    "question": "У них є машина.",
    "correctAnswer": "They have a car.",
    "blocks": [
      "They",
      "have",
      "a",
      "car"
    ]
  },
  {
    "id": "ex-0199",
    "difficulty": 1,
    "category": "have",
    "pattern": "he/she has",
    "explanationUk": "З he / she / it — has.",
    "examples": [
      "He has a car.",
      "It has a camera."
    ],
    "contextUk": "У неї є зустріч.",
    "type": "contrast",
    "question": "У неї є зустріч.",
    "options": [
      "She has a meeting.",
      "She have a meeting.",
      "She is a meeting."
    ],
    "correctAnswer": "She has a meeting.",
    "wrongExplanations": {
      "She have a meeting.": "З he / she / it — has.",
      "She is a meeting.": "З he / she / it — has."
    }
  },
  {
    "id": "ex-0200",
    "difficulty": 1,
    "category": "have",
    "pattern": "he/she has",
    "explanationUk": "З he / she / it — has.",
    "examples": [
      "He has a car.",
      "It has a camera."
    ],
    "contextUk": "У неї є зустріч.",
    "type": "translation",
    "question": "У неї зустріч.",
    "correctAnswer": "She has a meeting.",
    "alternatives": [
      "She has a meeting."
    ]
  },
  {
    "id": "ex-0201",
    "difficulty": 1,
    "category": "have",
    "pattern": "he/she has",
    "explanationUk": "З he / she / it — has.",
    "examples": [
      "He has a car.",
      "It has a camera."
    ],
    "contextUk": "У неї є зустріч.",
    "type": "blocks",
    "question": "У неї є зустріч.",
    "correctAnswer": "She has a meeting.",
    "blocks": [
      "She",
      "has",
      "a",
      "meeting"
    ]
  },
  {
    "id": "ex-0202",
    "difficulty": 1,
    "category": "have",
    "pattern": "have vs be",
    "explanationUk": "Є робота — have work; зайнятий — am busy.",
    "examples": [
      "I have a task.",
      "I am busy today."
    ],
    "contextUk": "У мене є робота, яку треба зробити.",
    "type": "contrast",
    "question": "У мене є робота, яку треба зробити.",
    "options": [
      "I have work to do.",
      "I am work to do.",
      "I has work to do."
    ],
    "correctAnswer": "I have work to do.",
    "wrongExplanations": {
      "I am work to do.": "Є робота — have work; зайнятий — am busy.",
      "I has work to do.": "Є робота — have work; зайнятий — am busy."
    }
  },
  {
    "id": "ex-0203",
    "difficulty": 1,
    "category": "have",
    "pattern": "have vs be",
    "explanationUk": "Є робота — have work; зайнятий — am busy.",
    "examples": [
      "I have a task.",
      "I am busy today."
    ],
    "contextUk": "У мене є робота, яку треба зробити.",
    "type": "blocks",
    "question": "У мене є робота, яку треба зробити.",
    "correctAnswer": "I have work to do.",
    "blocks": [
      "I",
      "have",
      "work",
      "to",
      "do"
    ]
  },
  {
    "id": "ex-0204",
    "difficulty": 1,
    "category": "have",
    "pattern": "does + have",
    "explanationUk": "Після does — have, без -s.",
    "examples": [
      "Does she have a car?",
      "Does it have a camera?"
    ],
    "contextUk": "У нього є час?",
    "type": "contrast",
    "question": "У нього є час?",
    "options": [
      "Does he have time?",
      "Does he has time?",
      "Is he have time?"
    ],
    "correctAnswer": "Does he have time?",
    "wrongExplanations": {
      "Does he has time?": "Після does — have, без -s.",
      "Is he have time?": "Після does — have, без -s."
    }
  },
  {
    "id": "ex-0205",
    "difficulty": 1,
    "category": "have",
    "pattern": "does + have",
    "explanationUk": "Після does — have, без -s.",
    "examples": [
      "Does she have a car?",
      "Does it have a camera?"
    ],
    "contextUk": "У нього є час?",
    "type": "translation",
    "question": "У нього є час?",
    "correctAnswer": "Does he have time?",
    "alternatives": [
      "Does he have time?"
    ]
  },
  {
    "id": "ex-0206",
    "difficulty": 1,
    "category": "have",
    "pattern": "does + have",
    "explanationUk": "Після does — have, без -s.",
    "examples": [
      "Does she have a car?",
      "Does it have a camera?"
    ],
    "contextUk": "У нього є час?",
    "type": "blocks",
    "question": "У нього є час?",
    "correctAnswer": "Does he have time?",
    "blocks": [
      "Does",
      "he",
      "have",
      "time"
    ]
  },
  {
    "id": "ex-0207",
    "difficulty": 1,
    "category": "have",
    "pattern": "do not have",
    "explanationUk": "Заперечення з have: don’t / doesn’t have.",
    "examples": [
      "I do not have time.",
      "She does not have a car."
    ],
    "contextUk": "У нас немає машини.",
    "type": "contrast",
    "question": "У нас немає машини.",
    "options": [
      "We don't have a car.",
      "We aren't have a car.",
      "We doesn't have a car."
    ],
    "correctAnswer": "We don't have a car.",
    "wrongExplanations": {
      "We aren't have a car.": "Заперечення з have: don’t / doesn’t have.",
      "We doesn't have a car.": "Заперечення з have: don’t / doesn’t have."
    }
  },
  {
    "id": "ex-0208",
    "difficulty": 1,
    "category": "have",
    "pattern": "do not have",
    "explanationUk": "Заперечення з have: don’t / doesn’t have.",
    "examples": [
      "I do not have time.",
      "She does not have a car."
    ],
    "contextUk": "У нас немає машини.",
    "type": "blocks",
    "question": "У нас немає машини.",
    "correctAnswer": "We don't have a car.",
    "blocks": [
      "We",
      "don't",
      "have",
      "a",
      "car"
    ]
  },
  {
    "id": "ex-0209",
    "difficulty": 1,
    "category": "do",
    "pattern": "do + you",
    "explanationUk": "Запитання про звичну дію: Do you + дієслово?",
    "examples": [
      "Do you drive?",
      "Do they live here?"
    ],
    "contextUk": "Ти працюєш?",
    "type": "contrast",
    "question": "Ти працюєш?",
    "options": [
      "Do you work?",
      "Are you work?",
      "Does you work?"
    ],
    "correctAnswer": "Do you work?",
    "wrongExplanations": {
      "Are you work?": "Запитання про звичну дію: Do you + дієслово?",
      "Does you work?": "Запитання про звичну дію: Do you + дієслово?"
    }
  },
  {
    "id": "ex-0210",
    "difficulty": 1,
    "category": "do",
    "pattern": "do + you",
    "explanationUk": "Запитання про звичну дію: Do you + дієслово?",
    "examples": [
      "Do you drive?",
      "Do they live here?"
    ],
    "contextUk": "Ти працюєш?",
    "type": "translation",
    "question": "Ти працюєш?",
    "correctAnswer": "Do you work?",
    "alternatives": [
      "Do you work?"
    ]
  },
  {
    "id": "ex-0211",
    "difficulty": 1,
    "category": "do",
    "pattern": "does + base verb",
    "explanationUk": "Does уже показує he; після нього work без -s.",
    "examples": [
      "Does she drive?",
      "Does it work?"
    ],
    "contextUk": "Він працює?",
    "type": "contrast",
    "question": "Він працює?",
    "options": [
      "Does he work?",
      "Does he works?",
      "Do he work?"
    ],
    "correctAnswer": "Does he work?",
    "wrongExplanations": {
      "Does he works?": "Does уже показує he; після нього work без -s.",
      "Do he work?": "Does уже показує he; після нього work без -s."
    }
  },
  {
    "id": "ex-0212",
    "difficulty": 1,
    "category": "do",
    "pattern": "does + base verb",
    "explanationUk": "Does уже показує he; після нього work без -s.",
    "examples": [
      "Does she drive?",
      "Does it work?"
    ],
    "contextUk": "Він працює?",
    "type": "translation",
    "question": "Він працює?",
    "correctAnswer": "Does he work?",
    "alternatives": [
      "Does he work?"
    ]
  },
  {
    "id": "ex-0213",
    "difficulty": 1,
    "category": "do",
    "pattern": "does not + base verb",
    "explanationUk": "He / she / it doesn’t + дієслово без -s.",
    "examples": [
      "She does not drive.",
      "It does not work."
    ],
    "contextUk": "Він не працює в неділю.",
    "type": "contrast",
    "question": "Він не працює в неділю.",
    "options": [
      "He doesn't work on Sunday.",
      "He doesn't works on Sunday.",
      "He don't work on Sunday."
    ],
    "correctAnswer": "He doesn't work on Sunday.",
    "wrongExplanations": {
      "He doesn't works on Sunday.": "He / she / it doesn’t + дієслово без -s.",
      "He don't work on Sunday.": "He / she / it doesn’t + дієслово без -s."
    }
  },
  {
    "id": "ex-0214",
    "difficulty": 1,
    "category": "do",
    "pattern": "does not + base verb",
    "explanationUk": "He / she / it doesn’t + дієслово без -s.",
    "examples": [
      "She does not drive.",
      "It does not work."
    ],
    "contextUk": "Він не працює в неділю.",
    "type": "blocks",
    "question": "Він не працює в неділю.",
    "correctAnswer": "He doesn't work on Sunday.",
    "blocks": [
      "He",
      "doesn't",
      "work",
      "on",
      "Sunday"
    ]
  },
  {
    "id": "ex-0215",
    "difficulty": 1,
    "category": "do",
    "pattern": "do not + verb",
    "explanationUk": "З I і звичною дією: don’t + дієслово.",
    "examples": [
      "I do not watch TV.",
      "We do not work on Sunday."
    ],
    "contextUk": "Я не ходжу гуляти часто.",
    "type": "contrast",
    "question": "Я не ходжу гуляти часто.",
    "options": [
      "I don't go out very often.",
      "I am not go out very often.",
      "I doesn't go out very often."
    ],
    "correctAnswer": "I don't go out very often.",
    "wrongExplanations": {
      "I am not go out very often.": "З I і звичною дією: don’t + дієслово.",
      "I doesn't go out very often.": "З I і звичною дією: don’t + дієслово."
    }
  },
  {
    "id": "ex-0216",
    "difficulty": 1,
    "category": "do",
    "pattern": "do not + verb",
    "explanationUk": "З I і звичною дією: don’t + дієслово.",
    "examples": [
      "I do not watch TV.",
      "We do not work on Sunday."
    ],
    "contextUk": "Я не ходжу гуляти часто.",
    "type": "blocks",
    "question": "Я не ходжу гуляти часто.",
    "correctAnswer": "I don't go out very often.",
    "blocks": [
      "I",
      "don't",
      "go",
      "out",
      "very",
      "often"
    ]
  },
  {
    "id": "ex-0217",
    "difficulty": 1,
    "category": "do",
    "pattern": "question word + do",
    "explanationUk": "Питальне слово + do you + дієслово.",
    "examples": [
      "When do you work?",
      "What do you need?"
    ],
    "contextUk": "Де ти живеш?",
    "type": "contrast",
    "question": "Де ти живеш?",
    "options": [
      "Where do you live?",
      "Where you live?",
      "Where are you live?"
    ],
    "correctAnswer": "Where do you live?",
    "wrongExplanations": {
      "Where you live?": "Питальне слово + do you + дієслово.",
      "Where are you live?": "Питальне слово + do you + дієслово."
    }
  },
  {
    "id": "ex-0218",
    "difficulty": 1,
    "category": "do",
    "pattern": "question word + do",
    "explanationUk": "Питальне слово + do you + дієслово.",
    "examples": [
      "When do you work?",
      "What do you need?"
    ],
    "contextUk": "Де ти живеш?",
    "type": "translation",
    "question": "Де ти живеш?",
    "correctAnswer": "Where do you live?",
    "alternatives": [
      "Where do you live?"
    ]
  },
  {
    "id": "ex-0219",
    "difficulty": 1,
    "category": "do",
    "pattern": "question word + do",
    "explanationUk": "Питальне слово + do you + дієслово.",
    "examples": [
      "When do you work?",
      "What do you need?"
    ],
    "contextUk": "Де ти живеш?",
    "type": "blocks",
    "question": "Де ти живеш?",
    "correctAnswer": "Where do you live?",
    "blocks": [
      "Where",
      "do",
      "you",
      "live"
    ]
  },
  {
    "id": "ex-0220",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "frequency before verb",
    "explanationUk": "Usually ставимо перед звичайним дієсловом.",
    "examples": [
      "I often work at home.",
      "I always eat breakfast."
    ],
    "contextUk": "Я зазвичай п’ю каву.",
    "type": "contrast",
    "question": "Я зазвичай п’ю каву.",
    "options": [
      "I usually drink coffee.",
      "I drink usually coffee.",
      "I usually drinks coffee."
    ],
    "correctAnswer": "I usually drink coffee.",
    "wrongExplanations": {
      "I drink usually coffee.": "Usually ставимо перед звичайним дієсловом.",
      "I usually drinks coffee.": "Usually ставимо перед звичайним дієсловом."
    }
  },
  {
    "id": "ex-0221",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "frequency before verb",
    "explanationUk": "Usually ставимо перед звичайним дієсловом.",
    "examples": [
      "I often work at home.",
      "I always eat breakfast."
    ],
    "contextUk": "Я зазвичай п’ю каву.",
    "type": "translation",
    "question": "Я зазвичай п’ю каву.",
    "correctAnswer": "I usually drink coffee.",
    "alternatives": [
      "I usually drink coffee.",
      "Usually I drink coffee."
    ]
  },
  {
    "id": "ex-0222",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "frequency before verb",
    "explanationUk": "Usually ставимо перед звичайним дієсловом.",
    "examples": [
      "I often work at home.",
      "I always eat breakfast."
    ],
    "contextUk": "Я зазвичай п’ю каву.",
    "type": "blocks",
    "question": "Я зазвичай п’ю каву.",
    "correctAnswer": "I usually drink coffee.",
    "blocks": [
      "I",
      "usually",
      "drink",
      "coffee"
    ]
  },
  {
    "id": "ex-0223",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "frequency after be",
    "explanationUk": "Нейтральний порядок: am / is / are + always / usually + стан.",
    "examples": [
      "He is often late.",
      "I am usually tired."
    ],
    "contextUk": "Я завжди зайнятий.",
    "type": "contrast",
    "question": "Я завжди зайнятий.",
    "options": [
      "I am always busy.",
      "I have always busy.",
      "I am always busily."
    ],
    "correctAnswer": "I am always busy.",
    "wrongExplanations": {
      "I have always busy.": "Нейтральний порядок: am / is / are + always / usually + стан.",
      "I am always busily.": "Нейтральний порядок: am / is / are + always / usually + стан."
    }
  },
  {
    "id": "ex-0224",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "frequency after be",
    "explanationUk": "Нейтральний порядок: am / is / are + always / usually + стан.",
    "examples": [
      "He is often late.",
      "I am usually tired."
    ],
    "contextUk": "Я завжди зайнятий.",
    "type": "translation",
    "question": "Я завжди зайнятий.",
    "correctAnswer": "I am always busy.",
    "alternatives": [
      "I am always busy."
    ]
  },
  {
    "id": "ex-0225",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "frequency after be",
    "explanationUk": "Нейтральний порядок: am / is / are + always / usually + стан.",
    "examples": [
      "He is often late.",
      "I am usually tired."
    ],
    "contextUk": "Я завжди зайнятий.",
    "type": "blocks",
    "question": "Я завжди зайнятий.",
    "correctAnswer": "I am always busy.",
    "blocks": [
      "I",
      "am",
      "always",
      "busy"
    ]
  },
  {
    "id": "ex-0226",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "never without not",
    "explanationUk": "Never уже означає «ніколи»; don’t додавати не треба.",
    "examples": [
      "I never smoke.",
      "She never drives."
    ],
    "contextUk": "Я ніколи не користуюся соцмережами.",
    "type": "contrast",
    "question": "Я ніколи не користуюся соцмережами.",
    "options": [
      "I never use social media.",
      "I don't never use social media.",
      "I never uses social media."
    ],
    "correctAnswer": "I never use social media.",
    "wrongExplanations": {
      "I don't never use social media.": "Never уже означає «ніколи»; don’t додавати не треба.",
      "I never uses social media.": "Never уже означає «ніколи»; don’t додавати не треба."
    }
  },
  {
    "id": "ex-0227",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "never without not",
    "explanationUk": "Never уже означає «ніколи»; don’t додавати не треба.",
    "examples": [
      "I never smoke.",
      "She never drives."
    ],
    "contextUk": "Я ніколи не користуюся соцмережами.",
    "type": "translation",
    "question": "Я ніколи не користуюся соцмережами.",
    "correctAnswer": "I never use social media.",
    "alternatives": [
      "I never use social media."
    ]
  },
  {
    "id": "ex-0228",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "never without not",
    "explanationUk": "Never уже означає «ніколи»; don’t додавати не треба.",
    "examples": [
      "I never smoke.",
      "She never drives."
    ],
    "contextUk": "Я ніколи не користуюся соцмережами.",
    "type": "blocks",
    "question": "Я ніколи не користуюся соцмережами.",
    "correctAnswer": "I never use social media.",
    "blocks": [
      "I",
      "never",
      "use",
      "social",
      "media"
    ]
  },
  {
    "id": "ex-0229",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "rarely",
    "explanationUk": "Rarely — рідко; ставимо перед дієсловом. Seldom також означає рідко.",
    "examples": [
      "I rarely go out.",
      "We seldom eat out."
    ],
    "contextUk": "Я рідко дивлюся телевізор.",
    "type": "contrast",
    "question": "Я рідко дивлюся телевізор.",
    "options": [
      "I rarely watch TV.",
      "I rare watch TV.",
      "I rarely watches TV."
    ],
    "correctAnswer": "I rarely watch TV.",
    "wrongExplanations": {
      "I rare watch TV.": "Rarely — рідко; ставимо перед дієсловом. Seldom також означає рідко.",
      "I rarely watches TV.": "Rarely — рідко; ставимо перед дієсловом. Seldom також означає рідко."
    }
  },
  {
    "id": "ex-0230",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "rarely",
    "explanationUk": "Rarely — рідко; ставимо перед дієсловом. Seldom також означає рідко.",
    "examples": [
      "I rarely go out.",
      "We seldom eat out."
    ],
    "contextUk": "Я рідко дивлюся телевізор.",
    "type": "translation",
    "question": "Я рідко дивлюся телевізор.",
    "correctAnswer": "I rarely watch TV.",
    "alternatives": [
      "I rarely watch TV.",
      "I seldom watch TV."
    ]
  },
  {
    "id": "ex-0231",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "rarely",
    "explanationUk": "Rarely — рідко; ставимо перед дієсловом. Seldom також означає рідко.",
    "examples": [
      "I rarely go out.",
      "We seldom eat out."
    ],
    "contextUk": "Я рідко дивлюся телевізор.",
    "type": "blocks",
    "question": "Я рідко дивлюся телевізор.",
    "correctAnswer": "I rarely watch TV.",
    "blocks": [
      "I",
      "rarely",
      "watch",
      "TV"
    ]
  },
  {
    "id": "ex-0232",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "sometimes",
    "explanationUk": "Звичайний порядок: I sometimes meet ...; Sometimes I meet ... теж правильно.",
    "examples": [
      "I sometimes cook.",
      "Sometimes we walk."
    ],
    "contextUk": "Я іноді зустрічаюсь із друзями.",
    "type": "contrast",
    "question": "Я іноді зустрічаюсь із друзями.",
    "options": [
      "I sometimes meet my friends.",
      "I meet sometimes my friends.",
      "I sometimes meets my friends."
    ],
    "correctAnswer": "I sometimes meet my friends.",
    "wrongExplanations": {
      "I meet sometimes my friends.": "Звичайний порядок: I sometimes meet ...; Sometimes I meet ... теж правильно.",
      "I sometimes meets my friends.": "Звичайний порядок: I sometimes meet ...; Sometimes I meet ... теж правильно."
    }
  },
  {
    "id": "ex-0233",
    "difficulty": 1,
    "category": "frequency",
    "pattern": "sometimes",
    "explanationUk": "Звичайний порядок: I sometimes meet ...; Sometimes I meet ... теж правильно.",
    "examples": [
      "I sometimes cook.",
      "Sometimes we walk."
    ],
    "contextUk": "Я іноді зустрічаюсь із друзями.",
    "type": "blocks",
    "question": "Я іноді зустрічаюсь із друзями.",
    "correctAnswer": "I sometimes meet my friends.",
    "blocks": [
      "I",
      "sometimes",
      "meet",
      "my",
      "friends"
    ]
  },
  {
    "id": "ex-0234",
    "difficulty": 1,
    "category": "order",
    "pattern": "subject + verb + place",
    "explanationUk": "Хто → що робить → де.",
    "examples": [
      "She works in an office.",
      "We live in Kyiv."
    ],
    "contextUk": "Я працюю вдома.",
    "type": "contrast",
    "question": "Я працюю вдома.",
    "options": [
      "I work at home.",
      "I at home work.",
      "Work I at home."
    ],
    "correctAnswer": "I work at home.",
    "wrongExplanations": {
      "I at home work.": "Хто → що робить → де.",
      "Work I at home.": "Хто → що робить → де."
    }
  },
  {
    "id": "ex-0235",
    "difficulty": 1,
    "category": "order",
    "pattern": "subject + verb + place",
    "explanationUk": "Хто → що робить → де.",
    "examples": [
      "She works in an office.",
      "We live in Kyiv."
    ],
    "contextUk": "Я працюю вдома.",
    "type": "translation",
    "question": "Я працюю вдома.",
    "correctAnswer": "I work at home.",
    "alternatives": [
      "I work at home.",
      "I work from home."
    ]
  },
  {
    "id": "ex-0236",
    "difficulty": 1,
    "category": "order",
    "pattern": "subject + verb + place",
    "explanationUk": "Хто → що робить → де.",
    "examples": [
      "She works in an office.",
      "We live in Kyiv."
    ],
    "contextUk": "Я працюю вдома.",
    "type": "blocks",
    "question": "Я працюю вдома.",
    "correctAnswer": "I work at home.",
    "blocks": [
      "I",
      "work",
      "at",
      "home"
    ]
  },
  {
    "id": "ex-0237",
    "difficulty": 1,
    "category": "order",
    "pattern": "verb + object + time",
    "explanationUk": "Хто → дія → що → коли. In the morning I drink coffee теж природно.",
    "examples": [
      "I read books at night.",
      "We eat lunch at noon."
    ],
    "contextUk": "Я п’ю каву вранці.",
    "type": "contrast",
    "question": "Я п’ю каву вранці.",
    "options": [
      "I drink coffee in the morning.",
      "I drink in the morning coffee.",
      "Drink I coffee in the morning."
    ],
    "correctAnswer": "I drink coffee in the morning.",
    "wrongExplanations": {
      "I drink in the morning coffee.": "Хто → дія → що → коли. In the morning I drink coffee теж природно.",
      "Drink I coffee in the morning.": "Хто → дія → що → коли. In the morning I drink coffee теж природно."
    }
  },
  {
    "id": "ex-0238",
    "difficulty": 1,
    "category": "order",
    "pattern": "verb + object + time",
    "explanationUk": "Хто → дія → що → коли. In the morning I drink coffee теж природно.",
    "examples": [
      "I read books at night.",
      "We eat lunch at noon."
    ],
    "contextUk": "Я п’ю каву вранці.",
    "type": "blocks",
    "question": "Я п’ю каву вранці.",
    "correctAnswer": "I drink coffee in the morning.",
    "blocks": [
      "I",
      "drink",
      "coffee",
      "in",
      "the",
      "morning"
    ]
  },
  {
    "id": "ex-0239",
    "difficulty": 1,
    "category": "order",
    "pattern": "question word + should",
    "explanationUk": "У запитанні: What time + should we + meet?",
    "examples": [
      "Where should we go?",
      "When can we talk?"
    ],
    "contextUk": "О котрій нам зустрітися?",
    "type": "contrast",
    "question": "О котрій нам зустрітися?",
    "options": [
      "What time should we meet?",
      "What time we should meet?",
      "What time should meet we?"
    ],
    "correctAnswer": "What time should we meet?",
    "wrongExplanations": {
      "What time we should meet?": "У запитанні: What time + should we + meet?",
      "What time should meet we?": "У запитанні: What time + should we + meet?"
    }
  },
  {
    "id": "ex-0240",
    "difficulty": 1,
    "category": "order",
    "pattern": "question word + should",
    "explanationUk": "У запитанні: What time + should we + meet?",
    "examples": [
      "Where should we go?",
      "When can we talk?"
    ],
    "contextUk": "О котрій нам зустрітися?",
    "type": "blocks",
    "question": "О котрій нам зустрітися?",
    "correctAnswer": "What time should we meet?",
    "blocks": [
      "What",
      "time",
      "should",
      "we",
      "meet"
    ]
  },
  {
    "id": "ex-0241",
    "difficulty": 1,
    "category": "order",
    "pattern": "can + base verb",
    "explanationUk": "Після can — meet, без to та -s.",
    "examples": [
      "I can help.",
      "She can drive."
    ],
    "contextUk": "Ми можемо зустрітися о сьомій.",
    "type": "contrast",
    "question": "Ми можемо зустрітися о сьомій.",
    "options": [
      "We can meet at 7.",
      "We can to meet at 7.",
      "We can meets at 7."
    ],
    "correctAnswer": "We can meet at 7.",
    "wrongExplanations": {
      "We can to meet at 7.": "Після can — meet, без to та -s.",
      "We can meets at 7.": "Після can — meet, без to та -s."
    }
  },
  {
    "id": "ex-0242",
    "difficulty": 1,
    "category": "order",
    "pattern": "can + base verb",
    "explanationUk": "Після can — meet, без to та -s.",
    "examples": [
      "I can help.",
      "She can drive."
    ],
    "contextUk": "Ми можемо зустрітися о сьомій.",
    "type": "translation",
    "question": "Ми можемо зустрітися о сьомій.",
    "correctAnswer": "We can meet at 7.",
    "alternatives": [
      "We can meet at 7."
    ]
  },
  {
    "id": "ex-0243",
    "difficulty": 1,
    "category": "order",
    "pattern": "can + base verb",
    "explanationUk": "Після can — meet, без to та -s.",
    "examples": [
      "I can help.",
      "She can drive."
    ],
    "contextUk": "Ми можемо зустрітися о сьомій.",
    "type": "blocks",
    "question": "Ми можемо зустрітися о сьомій.",
    "correctAnswer": "We can meet at 7.",
    "blocks": [
      "We",
      "can",
      "meet",
      "at",
      "7"
    ]
  },
  {
    "id": "ex-0244",
    "difficulty": 1,
    "category": "order",
    "pattern": "want to + verb",
    "explanationUk": "Хочу щось зробити — want to + дієслово.",
    "examples": [
      "I want to travel.",
      "She wants to help."
    ],
    "contextUk": "Я хочу вивчати англійську.",
    "type": "contrast",
    "question": "Я хочу вивчати англійську.",
    "options": [
      "I want to learn English.",
      "I want learn English.",
      "I want learning English."
    ],
    "correctAnswer": "I want to learn English.",
    "wrongExplanations": {
      "I want learn English.": "Хочу щось зробити — want to + дієслово.",
      "I want learning English.": "Хочу щось зробити — want to + дієслово."
    }
  },
  {
    "id": "ex-0245",
    "difficulty": 1,
    "category": "order",
    "pattern": "want to + verb",
    "explanationUk": "Хочу щось зробити — want to + дієслово.",
    "examples": [
      "I want to travel.",
      "She wants to help."
    ],
    "contextUk": "Я хочу вивчати англійську.",
    "type": "translation",
    "question": "Я хочу вивчати англійську.",
    "correctAnswer": "I want to learn English.",
    "alternatives": [
      "I want to learn English."
    ]
  },
  {
    "id": "ex-0246",
    "difficulty": 1,
    "category": "order",
    "pattern": "want to + verb",
    "explanationUk": "Хочу щось зробити — want to + дієслово.",
    "examples": [
      "I want to travel.",
      "She wants to help."
    ],
    "contextUk": "Я хочу вивчати англійську.",
    "type": "blocks",
    "question": "Я хочу вивчати англійську.",
    "correctAnswer": "I want to learn English.",
    "blocks": [
      "I",
      "want",
      "to",
      "learn",
      "English"
    ]
  },
  {
    "id": "ex-0247",
    "difficulty": 1,
    "category": "routine",
    "pattern": "every day",
    "explanationUk": "Every day — без прийменника.",
    "examples": [
      "I walk every day.",
      "She reads every night."
    ],
    "contextUk": "Я щодня йду на роботу.",
    "type": "contrast",
    "question": "Я щодня йду на роботу.",
    "options": [
      "I go to work every day.",
      "I go to work on every day.",
      "I go to work in every day."
    ],
    "correctAnswer": "I go to work every day.",
    "wrongExplanations": {
      "I go to work on every day.": "Every day — без прийменника.",
      "I go to work in every day.": "Every day — без прийменника."
    }
  },
  {
    "id": "ex-0248",
    "difficulty": 1,
    "category": "routine",
    "pattern": "every day",
    "explanationUk": "Every day — без прийменника.",
    "examples": [
      "I walk every day.",
      "She reads every night."
    ],
    "contextUk": "Я щодня йду на роботу.",
    "type": "blocks",
    "question": "Я щодня йду на роботу.",
    "correctAnswer": "I go to work every day.",
    "blocks": [
      "I",
      "go",
      "to",
      "work",
      "every",
      "day"
    ]
  },
  {
    "id": "ex-0249",
    "difficulty": 1,
    "category": "routine",
    "pattern": "have breakfast",
    "explanationUk": "Снідати — have breakfast.",
    "examples": [
      "We have lunch at noon.",
      "She has dinner at 7."
    ],
    "contextUk": "Я снідаю о восьмій.",
    "type": "contrast",
    "question": "Я снідаю о восьмій.",
    "options": [
      "I have breakfast at 8.",
      "I am breakfast at 8.",
      "I has breakfast at 8."
    ],
    "correctAnswer": "I have breakfast at 8.",
    "wrongExplanations": {
      "I am breakfast at 8.": "Снідати — have breakfast.",
      "I has breakfast at 8.": "Снідати — have breakfast."
    }
  },
  {
    "id": "ex-0250",
    "difficulty": 1,
    "category": "routine",
    "pattern": "have breakfast",
    "explanationUk": "Снідати — have breakfast.",
    "examples": [
      "We have lunch at noon.",
      "She has dinner at 7."
    ],
    "contextUk": "Я снідаю о восьмій.",
    "type": "translation",
    "question": "Я снідаю о восьмій.",
    "correctAnswer": "I have breakfast at 8.",
    "alternatives": [
      "I have breakfast at 8."
    ]
  },
  {
    "id": "ex-0251",
    "difficulty": 1,
    "category": "routine",
    "pattern": "have breakfast",
    "explanationUk": "Снідати — have breakfast.",
    "examples": [
      "We have lunch at noon.",
      "She has dinner at 7."
    ],
    "contextUk": "Я снідаю о восьмій.",
    "type": "blocks",
    "question": "Я снідаю о восьмій.",
    "correctAnswer": "I have breakfast at 8.",
    "blocks": [
      "I",
      "have",
      "breakfast",
      "at",
      "8"
    ]
  },
  {
    "id": "ex-0252",
    "difficulty": 1,
    "category": "routine",
    "pattern": "get up at",
    "explanationUk": "Get up — вставати; точний час — at.",
    "examples": [
      "I wake up at 6.",
      "She gets up at 8."
    ],
    "contextUk": "Я встаю о сьомій.",
    "type": "contrast",
    "question": "Я встаю о сьомій.",
    "options": [
      "I get up at 7.",
      "I get up on 7.",
      "I get up in 7."
    ],
    "correctAnswer": "I get up at 7.",
    "wrongExplanations": {
      "I get up on 7.": "Get up — вставати; точний час — at.",
      "I get up in 7.": "Get up — вставати; точний час — at."
    }
  },
  {
    "id": "ex-0253",
    "difficulty": 1,
    "category": "routine",
    "pattern": "get up at",
    "explanationUk": "Get up — вставати; точний час — at.",
    "examples": [
      "I wake up at 6.",
      "She gets up at 8."
    ],
    "contextUk": "Я встаю о сьомій.",
    "type": "translation",
    "question": "Я встаю о сьомій.",
    "correctAnswer": "I get up at 7.",
    "alternatives": [
      "I get up at 7."
    ]
  },
  {
    "id": "ex-0254",
    "difficulty": 1,
    "category": "routine",
    "pattern": "get up at",
    "explanationUk": "Get up — вставати; точний час — at.",
    "examples": [
      "I wake up at 6.",
      "She gets up at 8."
    ],
    "contextUk": "Я встаю о сьомій.",
    "type": "blocks",
    "question": "Я встаю о сьомій.",
    "correctAnswer": "I get up at 7.",
    "blocks": [
      "I",
      "get",
      "up",
      "at",
      "7"
    ]
  },
  {
    "id": "ex-0255",
    "difficulty": 1,
    "category": "work",
    "pattern": "work as",
    "explanationUk": "Працювати кимось — work as a / an. Like — бути схожим за способом дії.",
    "examples": [
      "She works as a designer.",
      "He works as an engineer."
    ],
    "contextUk": "Я працюю веброзробником.",
    "type": "contrast",
    "question": "Я працюю веброзробником.",
    "options": [
      "I work as a web developer.",
      "I work like a web developer.",
      "I work as web developer."
    ],
    "correctAnswer": "I work as a web developer.",
    "wrongExplanations": {
      "I work like a web developer.": "Працювати кимось — work as a / an. Like — бути схожим за способом дії.",
      "I work as web developer.": "Працювати кимось — work as a / an. Like — бути схожим за способом дії."
    }
  },
  {
    "id": "ex-0256",
    "difficulty": 1,
    "category": "work",
    "pattern": "work as",
    "explanationUk": "Працювати кимось — work as a / an. Like — бути схожим за способом дії.",
    "examples": [
      "She works as a designer.",
      "He works as an engineer."
    ],
    "contextUk": "Я працюю веброзробником.",
    "type": "translation",
    "question": "Я працюю веброзробником.",
    "correctAnswer": "I work as a web developer.",
    "alternatives": [
      "I work as a web developer."
    ]
  },
  {
    "id": "ex-0257",
    "difficulty": 1,
    "category": "work",
    "pattern": "work as",
    "explanationUk": "Працювати кимось — work as a / an. Like — бути схожим за способом дії.",
    "examples": [
      "She works as a designer.",
      "He works as an engineer."
    ],
    "contextUk": "Я працюю веброзробником.",
    "type": "blocks",
    "question": "Я працюю веброзробником.",
    "correctAnswer": "I work as a web developer.",
    "blocks": [
      "I",
      "work",
      "as",
      "a",
      "web",
      "developer"
    ]
  },
  {
    "id": "ex-0258",
    "difficulty": 1,
    "category": "work",
    "pattern": "have a meeting",
    "explanationUk": "Мати зустріч — have a meeting; час — at.",
    "examples": [
      "We have a meeting today.",
      "She has a meeting at noon."
    ],
    "contextUk": "У мене зустріч о третій.",
    "type": "contrast",
    "question": "У мене зустріч о третій.",
    "options": [
      "I have a meeting at 3.",
      "I am a meeting at 3.",
      "I have meeting at 3."
    ],
    "correctAnswer": "I have a meeting at 3.",
    "wrongExplanations": {
      "I am a meeting at 3.": "Мати зустріч — have a meeting; час — at.",
      "I have meeting at 3.": "Мати зустріч — have a meeting; час — at."
    }
  },
  {
    "id": "ex-0259",
    "difficulty": 1,
    "category": "work",
    "pattern": "have a meeting",
    "explanationUk": "Мати зустріч — have a meeting; час — at.",
    "examples": [
      "We have a meeting today.",
      "She has a meeting at noon."
    ],
    "contextUk": "У мене зустріч о третій.",
    "type": "translation",
    "question": "У мене зустріч о третій.",
    "correctAnswer": "I have a meeting at 3.",
    "alternatives": [
      "I have a meeting at 3."
    ]
  },
  {
    "id": "ex-0260",
    "difficulty": 1,
    "category": "work",
    "pattern": "have a meeting",
    "explanationUk": "Мати зустріч — have a meeting; час — at.",
    "examples": [
      "We have a meeting today.",
      "She has a meeting at noon."
    ],
    "contextUk": "У мене зустріч о третій.",
    "type": "blocks",
    "question": "У мене зустріч о третій.",
    "correctAnswer": "I have a meeting at 3.",
    "blocks": [
      "I",
      "have",
      "a",
      "meeting",
      "at",
      "3"
    ]
  },
  {
    "id": "ex-0261",
    "difficulty": 1,
    "category": "work",
    "pattern": "send to",
    "explanationUk": "Напрямок або отримувач: send something to someone.",
    "examples": [
      "Send it to Anna.",
      "Give it to me."
    ],
    "contextUk": "Надішли файл мені.",
    "type": "contrast",
    "question": "Надішли файл мені.",
    "options": [
      "Send the file to me.",
      "Send the file for to me.",
      "Send the file at me."
    ],
    "correctAnswer": "Send the file to me.",
    "wrongExplanations": {
      "Send the file for to me.": "Напрямок або отримувач: send something to someone.",
      "Send the file at me.": "Напрямок або отримувач: send something to someone."
    }
  },
  {
    "id": "ex-0262",
    "difficulty": 1,
    "category": "work",
    "pattern": "send to",
    "explanationUk": "Напрямок або отримувач: send something to someone.",
    "examples": [
      "Send it to Anna.",
      "Give it to me."
    ],
    "contextUk": "Надішли файл мені.",
    "type": "blocks",
    "question": "Надішли файл мені.",
    "correctAnswer": "Send the file to me.",
    "blocks": [
      "Send",
      "the",
      "file",
      "to",
      "me"
    ]
  },
  {
    "id": "ex-0263",
    "difficulty": 1,
    "category": "travel",
    "pattern": "stay at a hotel",
    "explanationUk": "Staying at a hotel — тимчасово проживати в готелі. In a hotel також можливе.",
    "examples": [
      "We are staying at a hotel.",
      "She is staying in Athens."
    ],
    "contextUk": "Я зупинився в одному з готелів.",
    "type": "contrast",
    "question": "Я зупинився в одному з готелів.",
    "options": [
      "I am staying at a hotel.",
      "I am staying at hotel.",
      "I am stay at a hotel."
    ],
    "correctAnswer": "I am staying at a hotel.",
    "wrongExplanations": {
      "I am staying at hotel.": "Staying at a hotel — тимчасово проживати в готелі. In a hotel також можливе.",
      "I am stay at a hotel.": "Staying at a hotel — тимчасово проживати в готелі. In a hotel також можливе."
    }
  },
  {
    "id": "ex-0264",
    "difficulty": 1,
    "category": "travel",
    "pattern": "stay at a hotel",
    "explanationUk": "Staying at a hotel — тимчасово проживати в готелі. In a hotel також можливе.",
    "examples": [
      "We are staying at a hotel.",
      "She is staying in Athens."
    ],
    "contextUk": "Я зупинився в одному з готелів.",
    "type": "blocks",
    "question": "Я зупинився в одному з готелів.",
    "correctAnswer": "I am staying at a hotel.",
    "blocks": [
      "I",
      "am",
      "staying",
      "at",
      "a",
      "hotel"
    ]
  },
  {
    "id": "ex-0265",
    "difficulty": 1,
    "category": "travel",
    "pattern": "on vacation",
    "explanationUk": "Американський вираз: on vacation.",
    "examples": [
      "She is on vacation.",
      "We go on vacation in June."
    ],
    "contextUk": "Я зараз у відпустці.",
    "type": "contrast",
    "question": "Я зараз у відпустці.",
    "options": [
      "I am on vacation.",
      "I am in vacation.",
      "I am at vacation."
    ],
    "correctAnswer": "I am on vacation.",
    "wrongExplanations": {
      "I am in vacation.": "Американський вираз: on vacation.",
      "I am at vacation.": "Американський вираз: on vacation."
    }
  },
  {
    "id": "ex-0266",
    "difficulty": 1,
    "category": "travel",
    "pattern": "on vacation",
    "explanationUk": "Американський вираз: on vacation.",
    "examples": [
      "She is on vacation.",
      "We go on vacation in June."
    ],
    "contextUk": "Я зараз у відпустці.",
    "type": "translation",
    "question": "Я у відпустці.",
    "correctAnswer": "I am on vacation.",
    "alternatives": [
      "I am on vacation.",
      "I'm on vacation."
    ]
  },
  {
    "id": "ex-0267",
    "difficulty": 1,
    "category": "travel",
    "pattern": "on vacation",
    "explanationUk": "Американський вираз: on vacation.",
    "examples": [
      "She is on vacation.",
      "We go on vacation in June."
    ],
    "contextUk": "Я зараз у відпустці.",
    "type": "blocks",
    "question": "Я зараз у відпустці.",
    "correctAnswer": "I am on vacation.",
    "blocks": [
      "I",
      "am",
      "on",
      "vacation"
    ]
  },
  {
    "id": "ex-0268",
    "difficulty": 1,
    "category": "travel",
    "pattern": "by + transport",
    "explanationUk": "Спосіб пересування: by train без артикля. А бути пасажиром — on the train.",
    "examples": [
      "by bus",
      "by car"
    ],
    "contextUk": "Я їжджу потягом.",
    "type": "contrast",
    "question": "Я їжджу потягом.",
    "options": [
      "I travel by train.",
      "I travel by the train.",
      "I travel on train."
    ],
    "correctAnswer": "I travel by train.",
    "wrongExplanations": {
      "I travel by the train.": "Спосіб пересування: by train без артикля. А бути пасажиром — on the train.",
      "I travel on train.": "Спосіб пересування: by train без артикля. А бути пасажиром — on the train."
    }
  },
  {
    "id": "ex-0269",
    "difficulty": 1,
    "category": "travel",
    "pattern": "by + transport",
    "explanationUk": "Спосіб пересування: by train без артикля. А бути пасажиром — on the train.",
    "examples": [
      "by bus",
      "by car"
    ],
    "contextUk": "Я їжджу потягом.",
    "type": "blocks",
    "question": "Я їжджу потягом.",
    "correctAnswer": "I travel by train.",
    "blocks": [
      "I",
      "travel",
      "by",
      "train"
    ]
  },
  {
    "id": "ex-0270",
    "difficulty": 1,
    "category": "meetings",
    "pattern": "let's + verb",
    "explanationUk": "Після let’s — дієслово без to. День — on.",
    "examples": [
      "Let's go home.",
      "Let's talk tomorrow."
    ],
    "contextUk": "Зустрінемось у суботу.",
    "type": "contrast",
    "question": "Зустрінемось у суботу.",
    "options": [
      "Let's meet on Saturday.",
      "Let's to meet on Saturday.",
      "Let's meets on Saturday."
    ],
    "correctAnswer": "Let's meet on Saturday.",
    "wrongExplanations": {
      "Let's to meet on Saturday.": "Після let’s — дієслово без to. День — on.",
      "Let's meets on Saturday.": "Після let’s — дієслово без to. День — on."
    }
  },
  {
    "id": "ex-0271",
    "difficulty": 1,
    "category": "meetings",
    "pattern": "let's + verb",
    "explanationUk": "Після let’s — дієслово без to. День — on.",
    "examples": [
      "Let's go home.",
      "Let's talk tomorrow."
    ],
    "contextUk": "Зустрінемось у суботу.",
    "type": "translation",
    "question": "Зустрінемось у суботу.",
    "correctAnswer": "Let's meet on Saturday.",
    "alternatives": [
      "Let's meet on Saturday.",
      "Let us meet on Saturday.",
      "Let us meet on Saturday."
    ]
  },
  {
    "id": "ex-0272",
    "difficulty": 1,
    "category": "meetings",
    "pattern": "let's + verb",
    "explanationUk": "Після let’s — дієслово без to. День — on.",
    "examples": [
      "Let's go home.",
      "Let's talk tomorrow."
    ],
    "contextUk": "Зустрінемось у суботу.",
    "type": "blocks",
    "question": "Зустрінемось у суботу.",
    "correctAnswer": "Let's meet on Saturday.",
    "blocks": [
      "Let's",
      "meet",
      "on",
      "Saturday"
    ]
  },
  {
    "id": "ex-0273",
    "difficulty": 1,
    "category": "meetings",
    "pattern": "meet at",
    "explanationUk": "Точка зустрічі — meet at the cafe.",
    "examples": [
      "Let's meet at the station.",
      "Let's meet at the airport."
    ],
    "contextUk": "Зустрінемось біля кафе як у точці зустрічі.",
    "type": "contrast",
    "question": "Зустрінемось біля кафе як у точці зустрічі.",
    "options": [
      "Let's meet at the cafe.",
      "Let's meet at cafe.",
      "Let's meet to the cafe."
    ],
    "correctAnswer": "Let's meet at the cafe.",
    "wrongExplanations": {
      "Let's meet at cafe.": "Точка зустрічі — meet at the cafe.",
      "Let's meet to the cafe.": "Точка зустрічі — meet at the cafe."
    }
  },
  {
    "id": "ex-0274",
    "difficulty": 1,
    "category": "meetings",
    "pattern": "meet at",
    "explanationUk": "Точка зустрічі — meet at the cafe.",
    "examples": [
      "Let's meet at the station.",
      "Let's meet at the airport."
    ],
    "contextUk": "Зустрінемось біля кафе як у точці зустрічі.",
    "type": "blocks",
    "question": "Зустрінемось біля кафе як у точці зустрічі.",
    "correctAnswer": "Let's meet at the cafe.",
    "blocks": [
      "Let's",
      "meet",
      "at",
      "the",
      "cafe"
    ]
  },
  {
    "id": "ex-0275",
    "difficulty": 1,
    "category": "meetings",
    "pattern": "go to the movies",
    "explanationUk": "Американський вираз: go to the movies.",
    "examples": [
      "We go to the movies on Friday.",
      "I rarely go to the movies."
    ],
    "contextUk": "Ходімо в кіно.",
    "type": "contrast",
    "question": "Ходімо в кіно.",
    "options": [
      "Let's go to the movies.",
      "Let's go movies.",
      "Let's go at the movies."
    ],
    "correctAnswer": "Let's go to the movies.",
    "wrongExplanations": {
      "Let's go movies.": "Американський вираз: go to the movies.",
      "Let's go at the movies.": "Американський вираз: go to the movies."
    }
  },
  {
    "id": "ex-0276",
    "difficulty": 1,
    "category": "meetings",
    "pattern": "go to the movies",
    "explanationUk": "Американський вираз: go to the movies.",
    "examples": [
      "We go to the movies on Friday.",
      "I rarely go to the movies."
    ],
    "contextUk": "Ходімо в кіно.",
    "type": "translation",
    "question": "Ходімо в кіно.",
    "correctAnswer": "Let's go to the movies.",
    "alternatives": [
      "Let's go to the movies.",
      "Let us go to the movies."
    ]
  },
  {
    "id": "ex-0277",
    "difficulty": 1,
    "category": "meetings",
    "pattern": "go to the movies",
    "explanationUk": "Американський вираз: go to the movies.",
    "examples": [
      "We go to the movies on Friday.",
      "I rarely go to the movies."
    ],
    "contextUk": "Ходімо в кіно.",
    "type": "blocks",
    "question": "Ходімо в кіно.",
    "correctAnswer": "Let's go to the movies.",
    "blocks": [
      "Let's",
      "go",
      "to",
      "the",
      "movies"
    ]
  },
  {
    "id": "ex-0278",
    "difficulty": 1,
    "category": "time",
    "pattern": "on + day",
    "explanationUk": "З днями використовуємо on.",
    "examples": [
      "on Monday",
      "on my birthday"
    ],
    "contextUk": "Зустрінемось у суботу.",
    "type": "multiple-choice",
    "question": "Let's meet ___ Saturday.",
    "correctAnswer": "on",
    "options": [
      "in",
      "on",
      "at"
    ]
  },
  {
    "id": "ex-0279",
    "difficulty": 1,
    "category": "time",
    "pattern": "on + day",
    "explanationUk": "З днями використовуємо on.",
    "examples": [
      "on Monday",
      "on my birthday"
    ],
    "contextUk": "Зустрінемось у суботу.",
    "type": "fill",
    "question": "Let's meet ___ Saturday.",
    "correctAnswer": "on",
    "alternatives": [
      "on"
    ]
  },
  {
    "id": "ex-0280",
    "difficulty": 1,
    "category": "time",
    "pattern": "at + time",
    "explanationUk": "Точний час — at.",
    "examples": [
      "at 5:30",
      "at 8 pm"
    ],
    "contextUk": "Зустріч о шостій.",
    "type": "multiple-choice",
    "question": "The meeting starts ___ 6.",
    "correctAnswer": "at",
    "options": [
      "on",
      "at",
      "in"
    ]
  },
  {
    "id": "ex-0281",
    "difficulty": 1,
    "category": "time",
    "pattern": "at + time",
    "explanationUk": "Точний час — at.",
    "examples": [
      "at 5:30",
      "at 8 pm"
    ],
    "contextUk": "Зустріч о шостій.",
    "type": "fill",
    "question": "The meeting starts ___ 6.",
    "correctAnswer": "at",
    "alternatives": [
      "at"
    ]
  },
  {
    "id": "ex-0282",
    "difficulty": 1,
    "category": "time",
    "pattern": "in + month",
    "explanationUk": "Місяці — з in.",
    "examples": [
      "in January",
      "in April"
    ],
    "contextUk": "Відпустка у вересні.",
    "type": "multiple-choice",
    "question": "My vacation is ___ September.",
    "correctAnswer": "in",
    "options": [
      "at",
      "on",
      "in"
    ]
  },
  {
    "id": "ex-0283",
    "difficulty": 1,
    "category": "time",
    "pattern": "in + month",
    "explanationUk": "Місяці — з in.",
    "examples": [
      "in January",
      "in April"
    ],
    "contextUk": "Відпустка у вересні.",
    "type": "fill",
    "question": "My vacation is ___ September.",
    "correctAnswer": "in",
    "alternatives": [
      "in"
    ]
  },
  {
    "id": "ex-0284",
    "difficulty": 1,
    "category": "place",
    "pattern": "at home",
    "explanationUk": "Коли говоримо про власний дім загалом: at home.",
    "examples": [
      "She is at home.",
      "We work at home."
    ],
    "contextUk": "Я вдома.",
    "type": "multiple-choice",
    "question": "I am ___ home.",
    "correctAnswer": "at",
    "options": [
      "in",
      "at",
      "on"
    ]
  },
  {
    "id": "ex-0285",
    "difficulty": 1,
    "category": "place",
    "pattern": "at home",
    "explanationUk": "Коли говоримо про власний дім загалом: at home.",
    "examples": [
      "She is at home.",
      "We work at home."
    ],
    "contextUk": "Я вдома.",
    "type": "fill",
    "question": "I am ___ home.",
    "correctAnswer": "at",
    "alternatives": [
      "at"
    ]
  },
  {
    "id": "ex-0286",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to work",
    "explanationUk": "Go to work — без the.",
    "examples": [
      "He goes to work.",
      "We go to work at 8."
    ],
    "contextUk": "Я їду на роботу, не про конкретну будівлю.",
    "type": "multiple-choice",
    "question": "I go ___ work every day.",
    "correctAnswer": "to",
    "options": [
      "at",
      "to",
      "for"
    ]
  },
  {
    "id": "ex-0287",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to work",
    "explanationUk": "Go to work — без the.",
    "examples": [
      "He goes to work.",
      "We go to work at 8."
    ],
    "contextUk": "Я їду на роботу, не про конкретну будівлю.",
    "type": "fill",
    "question": "I go ___ work every day.",
    "correctAnswer": "to",
    "alternatives": [
      "to"
    ]
  },
  {
    "id": "ex-0288",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + vowel sound",
    "explanationUk": "Перед голосним звуком — an.",
    "examples": [
      "an orange",
      "an egg"
    ],
    "contextUk": "Я з’їв одне яблуко.",
    "type": "multiple-choice",
    "question": "She works in ___ office.",
    "correctAnswer": "an",
    "options": [
      "a",
      "an",
      "—"
    ]
  },
  {
    "id": "ex-0289",
    "difficulty": 1,
    "category": "articles",
    "pattern": "an + vowel sound",
    "explanationUk": "Перед голосним звуком — an.",
    "examples": [
      "an orange",
      "an egg"
    ],
    "contextUk": "Я з’їв одне яблуко.",
    "type": "fill",
    "question": "She works in ___ office.",
    "correctAnswer": "an",
    "alternatives": [
      "an"
    ]
  },
  {
    "id": "ex-0290",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + singular noun",
    "explanationUk": "Один злічуваний предмет: a car.",
    "examples": [
      "a website",
      "a meeting"
    ],
    "contextUk": "У мене є одна машина.",
    "type": "multiple-choice",
    "question": "I have ___ question.",
    "correctAnswer": "a",
    "options": [
      "an",
      "a",
      "—"
    ]
  },
  {
    "id": "ex-0291",
    "difficulty": 1,
    "category": "articles",
    "pattern": "a + singular noun",
    "explanationUk": "Один злічуваний предмет: a car.",
    "examples": [
      "a website",
      "a meeting"
    ],
    "contextUk": "У мене є одна машина.",
    "type": "fill",
    "question": "I have ___ question.",
    "correctAnswer": "a",
    "alternatives": [
      "a"
    ]
  },
  {
    "id": "ex-0292",
    "difficulty": 1,
    "category": "articles",
    "pattern": "no article + help",
    "explanationUk": "Help загалом — без a/an. The help можливе для конкретної допомоги.",
    "examples": [
      "Ask for help.",
      "She needs help."
    ],
    "contextUk": "Мені потрібна допомога загалом.",
    "type": "multiple-choice",
    "question": "I need ___ help.",
    "correctAnswer": "—",
    "options": [
      "a",
      "an",
      "—"
    ]
  },
  {
    "id": "ex-0293",
    "difficulty": 1,
    "category": "articles",
    "pattern": "no article + help",
    "explanationUk": "Help загалом — без a/an. The help можливе для конкретної допомоги.",
    "examples": [
      "Ask for help.",
      "She needs help."
    ],
    "contextUk": "Мені потрібна допомога загалом.",
    "type": "fill",
    "question": "I need ___ help.",
    "correctAnswer": "—",
    "alternatives": [
      "",
      "no article",
      "без артикля",
      "—"
    ]
  },
  {
    "id": "ex-0294",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "wait for",
    "explanationUk": "Чекати на когось — wait for.",
    "examples": [
      "Wait for a reply.",
      "I am waiting for you."
    ],
    "contextUk": "Зачекай на мене.",
    "type": "multiple-choice",
    "question": "wait ___ me",
    "correctAnswer": "for",
    "options": [
      "to",
      "for",
      "of"
    ]
  },
  {
    "id": "ex-0295",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "wait for",
    "explanationUk": "Чекати на когось — wait for.",
    "examples": [
      "Wait for a reply.",
      "I am waiting for you."
    ],
    "contextUk": "Зачекай на мене.",
    "type": "chunk",
    "question": "wait ___ me",
    "correctAnswer": "for",
    "alternatives": [
      "for"
    ]
  },
  {
    "id": "ex-0296",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "listen to",
    "explanationUk": "Слухати щось — listen to. Listen for — прислухатися, очікуючи звук.",
    "examples": [
      "Listen to me.",
      "Listen to the podcast."
    ],
    "contextUk": "Я слухаю музику.",
    "type": "multiple-choice",
    "question": "listen ___ music",
    "correctAnswer": "to",
    "options": [
      "for",
      "to",
      "at"
    ]
  },
  {
    "id": "ex-0297",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "listen to",
    "explanationUk": "Слухати щось — listen to. Listen for — прислухатися, очікуючи звук.",
    "examples": [
      "Listen to me.",
      "Listen to the podcast."
    ],
    "contextUk": "Я слухаю музику.",
    "type": "chunk",
    "question": "listen ___ music",
    "correctAnswer": "to",
    "alternatives": [
      "to"
    ]
  },
  {
    "id": "ex-0298",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "afraid of",
    "explanationUk": "Боятися чогось — afraid of.",
    "examples": [
      "afraid of heights",
      "afraid of dogs"
    ],
    "contextUk": "Вона боїться павуків.",
    "type": "multiple-choice",
    "question": "afraid ___ heights",
    "correctAnswer": "of",
    "options": [
      "to",
      "of",
      "at"
    ]
  },
  {
    "id": "ex-0299",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "afraid of",
    "explanationUk": "Боятися чогось — afraid of.",
    "examples": [
      "afraid of heights",
      "afraid of dogs"
    ],
    "contextUk": "Вона боїться павуків.",
    "type": "chunk",
    "question": "afraid ___ heights",
    "correctAnswer": "of",
    "alternatives": [
      "of"
    ]
  },
  {
    "id": "ex-0300",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "work on",
    "explanationUk": "Працювати над завданням — work on.",
    "examples": [
      "Work on a project.",
      "Work on your English."
    ],
    "contextUk": "Я працюю над сайтом.",
    "type": "multiple-choice",
    "question": "work ___ a project",
    "correctAnswer": "on",
    "options": [
      "to",
      "on",
      "of"
    ]
  },
  {
    "id": "ex-0301",
    "difficulty": 1,
    "category": "chunks",
    "pattern": "work on",
    "explanationUk": "Працювати над завданням — work on.",
    "examples": [
      "Work on a project.",
      "Work on your English."
    ],
    "contextUk": "Я працюю над сайтом.",
    "type": "chunk",
    "question": "work ___ a project",
    "correctAnswer": "on",
    "alternatives": [
      "on"
    ]
  },
  {
    "id": "ex-0302",
    "difficulty": 1,
    "category": "do",
    "pattern": "does + base verb",
    "explanationUk": "Does уже показує he; після нього work без -s.",
    "examples": [
      "Does she drive?",
      "Does it work?"
    ],
    "contextUk": "Він працює?",
    "type": "multiple-choice",
    "question": "___ he work here?",
    "correctAnswer": "Does",
    "options": [
      "Do",
      "Does",
      "Is"
    ]
  },
  {
    "id": "ex-0303",
    "difficulty": 1,
    "category": "do",
    "pattern": "does + base verb",
    "explanationUk": "Does уже показує he; після нього work без -s.",
    "examples": [
      "Does she drive?",
      "Does it work?"
    ],
    "contextUk": "Він працює?",
    "type": "fill",
    "question": "___ he work here?",
    "correctAnswer": "Does",
    "alternatives": [
      "Does"
    ]
  },
  {
    "id": "ex-0304",
    "difficulty": 1,
    "category": "have",
    "pattern": "he/she has",
    "explanationUk": "З he / she / it — has.",
    "examples": [
      "He has a car.",
      "It has a camera."
    ],
    "contextUk": "У неї є зустріч.",
    "type": "multiple-choice",
    "question": "She ___ a car.",
    "correctAnswer": "has",
    "options": [
      "have",
      "has",
      "is"
    ]
  },
  {
    "id": "ex-0305",
    "difficulty": 1,
    "category": "have",
    "pattern": "he/she has",
    "explanationUk": "З he / she / it — has.",
    "examples": [
      "He has a car.",
      "It has a camera."
    ],
    "contextUk": "У неї є зустріч.",
    "type": "fill",
    "question": "She ___ a car.",
    "correctAnswer": "has",
    "alternatives": [
      "has"
    ]
  },
  {
    "id": "ex-0306",
    "difficulty": 1,
    "category": "be",
    "pattern": "we/they are",
    "explanationUk": "Стан із they / we / you — are.",
    "examples": [
      "We are ready.",
      "You are right."
    ],
    "contextUk": "Вони щасливі.",
    "type": "multiple-choice",
    "question": "They ___ ready.",
    "correctAnswer": "are",
    "options": [
      "am",
      "is",
      "are"
    ]
  },
  {
    "id": "ex-0307",
    "difficulty": 1,
    "category": "be",
    "pattern": "we/they are",
    "explanationUk": "Стан із they / we / you — are.",
    "examples": [
      "We are ready.",
      "You are right."
    ],
    "contextUk": "Вони щасливі.",
    "type": "fill",
    "question": "They ___ ready.",
    "correctAnswer": "are",
    "alternatives": [
      "are"
    ]
  },
  {
    "id": "ex-0308",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to work",
    "explanationUk": "Go to work — без the.",
    "examples": [
      "He goes to work.",
      "We go to work at 8."
    ],
    "contextUk": "Я їду на роботу, не про конкретну будівлю.",
    "type": "mistake",
    "question": "I go to the work every day.",
    "correctAnswer": "the",
    "correctSentence": "I go to work every day.",
    "options": [
      "I",
      "go",
      "to",
      "the",
      "work",
      "every",
      "day"
    ]
  },
  {
    "id": "ex-0309",
    "difficulty": 1,
    "category": "do",
    "pattern": "does + base verb",
    "explanationUk": "Does уже показує he; після нього work без -s.",
    "examples": [
      "Does she drive?",
      "Does it work?"
    ],
    "contextUk": "Він працює?",
    "type": "mistake",
    "question": "Does he works here?",
    "correctAnswer": "works",
    "correctSentence": "Does he work here?",
    "options": [
      "Does",
      "he",
      "works",
      "here"
    ]
  },
  {
    "id": "ex-0310",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "its = possession",
    "explanationUk": "Its + предмет — чий саме предмет. Апострофа немає.",
    "examples": [
      "Its screen is broken.",
      "Its color is blue."
    ],
    "contextUk": "Батарея цього телефона розряджена.",
    "type": "mistake",
    "question": "It's battery is dead.",
    "correctAnswer": "It's",
    "correctSentence": "Its battery is dead.",
    "options": [
      "It's",
      "battery",
      "is",
      "dead"
    ]
  },
  {
    "id": "ex-0311",
    "difficulty": 1,
    "category": "be",
    "pattern": "I am + state",
    "explanationUk": "Стан: I am + busy / tired / happy.",
    "examples": [
      "I am tired.",
      "I am ready."
    ],
    "contextUk": "Я зайнятий.",
    "type": "mistake",
    "question": "I have tired.",
    "correctAnswer": "have",
    "correctSentence": "I am tired.",
    "options": [
      "I",
      "have",
      "tired"
    ]
  },
  {
    "id": "ex-0312",
    "difficulty": 1,
    "category": "time",
    "pattern": "on + day",
    "explanationUk": "З днями використовуємо on.",
    "examples": [
      "on Monday",
      "on my birthday"
    ],
    "contextUk": "Зустрінемось у суботу.",
    "type": "mistake",
    "question": "We meet in Saturday.",
    "correctAnswer": "in",
    "correctSentence": "We meet on Saturday.",
    "options": [
      "We",
      "meet",
      "in",
      "Saturday"
    ]
  },
  {
    "id": "ex-0313",
    "difficulty": 1,
    "category": "movement",
    "pattern": "go to work",
    "explanationUk": "Go to work — без the.",
    "examples": [
      "He goes to work.",
      "We go to work at 8."
    ],
    "contextUk": "Я їду на роботу, не про конкретну будівлю.",
    "type": "context",
    "question": "Говорите саме про роботу як заняття, а не про офісну будівлю. Що точніше?",
    "options": [
      "I go to work.",
      "I go to the office."
    ],
    "correctAnswer": "I go to work."
  },
  {
    "id": "ex-0314",
    "difficulty": 1,
    "category": "pronouns",
    "pattern": "this introduces",
    "explanationUk": "This is — представляємо або показуємо предмет.",
    "examples": [
      "This is my car.",
      "This is my office."
    ],
    "contextUk": "Я показую свій телефон: «Це мій телефон».",
    "type": "context",
    "question": "Показуєте людині свій телефон уперше. Як його представити?",
    "options": [
      "This is my phone.",
      "It is old."
    ],
    "correctAnswer": "This is my phone."
  },
  {
    "id": "ex-0315",
    "difficulty": 1,
    "category": "place",
    "pattern": "in the car",
    "explanationUk": "У салоні автомобіля — in the car. On the car означає на його поверхні.",
    "examples": [
      "She is in the car.",
      "Wait in the car."
    ],
    "contextUk": "Я їду пасажиром в автомобілі.",
    "type": "context",
    "question": "Ви в салоні автомобіля. Яка фраза передає це?",
    "options": [
      "I am in the car.",
      "I am on the car."
    ],
    "correctAnswer": "I am in the car."
  }
];
