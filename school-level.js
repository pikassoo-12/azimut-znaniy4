"use strict";

(() => {
  const subjectNames = {
    math: ["Математика", "x²"],
    russian: ["Русский язык", "Аа"],
    reading: ["Чтение", "АБ"],
    english: ["Английский язык", "Aa"],
    literature: ["Литература", "« »"],
    history: ["История", "⌛"],
    social: ["Обществознание", "§"],
    physics: ["Физика", "F"],
    chemistry: ["Химия", "H₂"],
    biology: ["Биология", "❀"],
    geography: ["География", "◎"],
    informatics: ["Информатика", "01"],
    programming: ["Программирование", "</>"]
  };

  const levels = {
    "school-primary": {
      label: "Начальная школа · 1–4 классы",

      title:
        "Укрепляем основу знаний и сохраняем интерес к учёбе",

      description:
        "Читаем, считаем, учимся писать и понимать задания. " +
        "Помогаем разобраться в темах, которые пока не получаются, " +
        "и постепенно двигаться к самостоятельности.",

      symbol: "🎒",
      color: "#fff5cc",
      noteTitle: "Сначала понять. Потом — попробовать.",

      notes: [
        "Чтение и понимание текста",
        "Математика и логика",
        "Русский язык и первые шаги в английском"
      ],

      needs: [
        [
          "Домашние задания вызывают трудности",
          "Разбираем непонятные темы и способы решения, " +
          "чтобы ребёнок лучше понимал, как подступиться к заданию."
        ],
        [
          "Есть пробелы в базовых навыках",
          "Возвращаемся к чтению, счёту и письму — " +
          "к тому, на что опирается дальнейшее обучение."
        ],
        [
          "Хочется поддержать интерес",
          "Подбираем направление под учебную задачу: " +
          "укрепить базу, потренироваться или изучить тему глубже."
        ]
      ],

      subjects: [
        "math",
        "russian",
        "reading",
        "english"
      ],

      teacher:
        "Для младших школьников особенно важно понятное объяснение " +
        "и возможность вернуться к трудному месту. " +
        "На страницах предметов можно выбрать класс и увидеть " +
        "преподавателей, которые с ним работают.",

      pack:
        "2 предмета — 6 990 ₽ / мес; 3 предмета — 9 490 ₽ / мес. " +
        "Программа «Вся начальная школа» — 11 990 ₽ / мес. " +
        "Подробный состав смотрите в тарифах.",

      grades: [1, 2, 3, 4]
    },

    "school-middle": {
      label: "Средняя школа · 5–8 классы",

      title:
        "Разбираемся в сложном и учимся действовать самостоятельно",

      description:
        "Предметов становится больше, а темы — сложнее. " +
        "Помогаем разобраться в объяснениях, " +
        "потренироваться на заданиях и укрепить школьную базу.",

      symbol: "🌍",
      color: "#e0f3ff",
      noteTitle: "Больше понимания. Меньше растерянности.",

      notes: [
        "Разбор трудных тем",
        "Практика по школьным предметам",
        "Постепенное развитие самостоятельности"
      ],

      needs: [
        [
          "После урока остались вопросы",
          "Возвращаемся к теме и разбираем её по шагам, " +
          "с объяснениями и практикой."
        ],
        [
          "Пробелы мешают двигаться дальше",
          "Определяем, каких знаний не хватает " +
          "для текущих заданий, и работаем с этой основой."
        ],
        [
          "Нужна поддержка по нескольким предметам",
          "Можно выбрать отдельные занятия или комплекс: " +
          "сначала обсудим, какие направления сейчас важнее."
        ]
      ],

      subjects: [
        "math",
        "russian",
        "literature",
        "english",
        "history",
        "social",
        "physics",
        "chemistry",
        "biology",
        "geography",
        "informatics",
        "programming"
      ],

      teacher:
        "Один преподаватель может работать с отдельным классом, " +
        "другой — с несколькими, например с 5–8 классами. " +
        "На странице предмета используйте фильтр класса, " +
        "чтобы посмотреть подходящие карточки.",

      pack:
        "«Уверенный ученик» — 2 предмета за 6 990 ₽ / мес. " +
        "«Без пробелов» — 3 предмета за 9 490 ₽ / мес. " +
        "«Вся школа» — 4 основных предмета и контроль прогресса " +
        "за 11 990 ₽ / мес.",

      grades: [5, 6, 7, 8]
    },

    "school-senior": {
      label: "Школьная программа и экзамены · 9–11 классы",

      title:
        "Определяем цель и готовимся к следующему этапу",

      description:
        "Разделяем задачи: разобраться в школьной программе, " +
        "повторить базу или готовиться к ОГЭ и ЕГЭ. " +
        "Для каждой цели подбираем своё направление занятий.",

      symbol: "🚀",
      color: "#eee6ff",
      noteTitle: "Понятная цель. Последовательные шаги.",

      notes: [
        "Поддержка по школьным предметам",
        "Подготовка к ОГЭ и ЕГЭ",
        "Практика и разбор ошибок"
      ],

      needs: [
        [
          "Нужна помощь с текущей программой",
          "Разбираем темы и задания, которые вызывают трудности, " +
          "и повторяем необходимые основы."
        ],
        [
          "Пора готовиться к экзаменам",
          "Выбираем экзаменационную программу " +
          "с учётом предмета и текущего уровня знаний."
        ],
        [
          "Нужен персональный план",
          "Для индивидуальной работы есть отдельные тарифы " +
          "по школьным предметам и подготовке к экзаменам."
        ]
      ],

      subjects: [
        "math",
        "russian",
        "literature",
        "english",
        "history",
        "social",
        "physics",
        "chemistry",
        "biology",
        "geography",
        "informatics"
      ],

      teacher:
        "На страницах предметов школьная программа, ОГЭ и ЕГЭ " +
        "разделены на отдельные направления. " +
        "Это помогает выбирать преподавателя " +
        "именно под вашу задачу.",

      pack:
        "Для 9 класса доступны комплексы раздела «5–9 класс». " +
        "Для подготовки к ЕГЭ предусмотрены отдельные пакеты " +
        "на 2 и 3 предмета, а также программа «ЕГЭ PRO». " +
        "Их стоимость и состав указаны на странице тарифов.",

      grades: [9, 10, 11]
    }
  };

  /* Примеры задач для каждого класса.
     Это описание направлений, а не фиксированная
     программа всех занятий. */

  const classPrograms = {
    1: {
      title: "Осваиваем первые учебные навыки",

      description:
        "Помогаем освоиться с заданиями " +
        "и постепенно укреплять базовые навыки.",

      tasks: [
        "Читать и понимать короткие тексты",
        "Разбираться в числах и простых действиях",
        "Тренировать письмо и работу со словами",
        "Учиться внимательно читать условие задания"
      ]
    },

    2: {
      title: "Закрепляем базу и пробуем самостоятельно",

      description:
        "Возвращаемся к тому, что вызывает вопросы, " +
        "и добавляем практику.",

      tasks: [
        "Тренировать вычисления и решение задач",
        "Применять изученные правила русского языка",
        "Пересказывать и отвечать на вопросы по тексту",
        "Проверять выполненное задание"
      ]
    },

    3: {
      title: "Учимся объяснять ход решения",

      description:
        "Важно не только получить ответ, " +
        "но и понимать, почему он получился.",

      tasks: [
        "Разбирать задачи в несколько действий",
        "Объяснять выбор действия или правила",
        "Находить главную мысль текста",
        "Повторять темы, в которых остались пробелы"
      ]
    },

    4: {
      title: "Собираем знания перед средней школой",

      description:
        "Укрепляем основу начальной школы " +
        "и готовимся к более самостоятельной работе.",

      tasks: [
        "Повторять ключевые темы по математике",
        "Закреплять грамотное письмо",
        "Работать с текстом и вопросами к нему",
        "Планировать выполнение заданий"
      ]
    },

    5: {
      title: "Осваиваемся с новым этапом",

      description:
        "Помогаем справиться с переходом " +
        "к большему числу предметов и требований.",

      tasks: [
        "Повторять базу начальной школы при необходимости",
        "Разбирать новые темы по математике и русскому",
        "Учиться выделять главное в учебном тексте",
        "Разделять большое задание на понятные шаги"
      ]
    },

    6: {
      title: "Укрепляем понимание и учебные привычки",

      description:
        "Работаем с темами, которые нужны " +
        "для уверенного движения дальше.",

      tasks: [
        "Тренироваться в вычислениях и текстовых задачах",
        "Закреплять правила и разборы по русскому",
        "Систематизировать сведения по другим предметам",
        "Учиться замечать и объяснять ошибки"
      ]
    },

    7: {
      title: "Разбираемся в новых понятиях",

      description:
        "Связываем новые темы с тем, " +
        "что ребёнок уже знает.",

      tasks: [
        "Работать с алгебраическими выражениями и уравнениями",
        "Разбирать геометрические задачи",
        "Учиться применять формулы в задачах по физике",
        "Укреплять знания по выбранным школьным предметам"
      ]
    },

    8: {
      title: "Систематизируем знания перед 9 классом",

      description:
        "Обращаем внимание на темы, " +
        "которые станут опорой на следующем этапе.",

      tasks: [
        "Разбирать сложные задания по школьной программе",
        "Повторять темы, в которых есть пробелы",
        "Тренировать работу с формулами и условиями",
        "Определять приоритетные предметы для дальнейшей подготовки"
      ]
    },

    9: {
      title: "Совмещаем школьные задачи и подготовку к ОГЭ",

      description:
        "Помощь с текущими уроками и подготовка " +
        "к экзамену — разные цели. Выбираем нужную.",

      tasks: [
        "Укреплять знания по выбранному предмету",
        "В программе ОГЭ — разбирать экзаменационные задания",
        "Практиковаться и анализировать ошибки",
        "По выбранному тарифу — работать с пробниками"
      ]
    },

    10: {
      title: "Создаём основу для старшей школы и ЕГЭ",

      description:
        "Разбираем текущую программу " +
        "и определяем направления дальнейшей подготовки.",

      tasks: [
        "Повторять необходимые темы прошлых лет",
        "Разбираться в программе старших классов",
        "Выбирать предметы для целевой подготовки",
        "В программе ЕГЭ — знакомиться с экзаменационными задачами"
      ]
    },

    11: {
      title: "Работаем по выбранной цели",

      description:
        "Определяем, каким темам и типам заданий " +
        "сейчас нужно уделить больше внимания.",

      tasks: [
        "Разбирать трудные темы и задания",
        "В программе ЕГЭ — тренировать экзаменационные навыки",
        "Анализировать ошибки и результаты пробников",
        "В индивидуальном формате — работать по персональному плану"
      ]
    }
  };

  /* ОПРЕДЕЛЯЕМ СТРАНИЦУ */

  const filename = location.pathname.split("/").pop();
  const pageKey = filename.replace(/\.html$/i, "");
  const config = levels[pageKey];

  if (!config) {
    document.querySelector("#level-title").textContent =
      "Проверьте название файла страницы";

    document.querySelector("#level-description").textContent =
      "Используйте school-primary.html, " +
      "school-middle.html или school-senior.html.";

    return;
  }

  const setText = (selector, text) => {
    document.querySelector(selector).textContent = text;
  };

  function node(tag, className = "", text = "") {
    const item = document.createElement(tag);
    item.className = className;
    item.textContent = text;
    return item;
  }

  document.title = `${config.label} — Азимут знаний`;

  document.body.style.setProperty(
    "--level-soft",
    config.color
  );

  document.querySelector('meta[name="description"]').content =
    config.description;

  setText("#level-breadcrumb", config.label);
  setText("#level-label", config.label);
  setText("#level-title", config.title);
  setText("#level-description", config.description);
  setText("#level-symbol", config.symbol);
  setText("#level-note-title", config.noteTitle);
  setText("#level-teacher-description", config.teacher);
  setText("#level-pack-description", config.pack);

  const noteList = document.querySelector("#level-note-list");

  config.notes.forEach((text) => {
    noteList.append(node("li", "", text));
  });

  /* КОМУ ПОДОЙДУТ ЗАНЯТИЯ */

  const needsContainer = document.querySelector("#level-needs");

  config.needs.forEach(([title, text], index) => {
    const card = node("article", "level-info-card");

    card.append(
      node(
        "span",
        "level-card-number",
        String(index + 1).padStart(2, "0")
      ),
      node("h3", "", title),
      node("p", "", text)
    );

    needsContainer.append(card);
  });

  /* ПРЕДМЕТЫ */

  const subjectsContainer = document.querySelector(
    "#level-subjects"
  );

  config.subjects.forEach((key) => {
    const [title, symbol] = subjectNames[key];

    const link = node("a", "level-subject");
    link.href = `${key}.html`;

    const icon = node("span", "", symbol);
    icon.setAttribute("aria-hidden", "true");

    link.append(
      icon,
      node("strong", "", title),
      node("small", "", "О предмете и преподавателях ↗")
    );

    subjectsContainer.append(link);
  });

  /* ФОРМАТЫ ОБУЧЕНИЯ */

  const formats = [
    {
      title: "START",
      price: "1 990 ₽",
      text: "Самостоятельный курс. Подходит для работы в своём темпе."
    },
    {
      title: "GROUP",
      price: "3 990 ₽",
      text: "8 занятий с преподавателем в группе."
    },
    {
      title: "GROUP PRO",
      price: "5 490 ₽",
      text: "Групповые занятия с дополнительным сопровождением."
    },
    {
      title: "PERSONAL",
      price: "9 900 ₽",
      text: "8 индивидуальных занятий."
    }
  ];

  const formatsContainer = document.querySelector(
    "#level-formats"
  );

  const formatLinks = [];

  formats.forEach((format) => {
    const card = node("article", "level-format");

    const price = node(
      "p",
      "level-format-price",
      format.price
    );

    price.append(node("span", "", "/ мес"));

    const link = node(
      "a",
      "button button-outline",
      "Состав тарифа"
    );

    formatLinks.push(link);

    card.append(
      node("h3", "", format.title),
      price,
      node("p", "", format.text),
      link
    );

    formatsContainer.append(card);
  });

  document.querySelector("#level-exams").hidden =
    pageKey !== "school-senior";

  /* ПЕРЕКЛЮЧЕНИЕ КЛАССОВ */

  const tabs = document.querySelector("#level-class-tabs");

  const tasks = document.querySelector(
    "#selected-class-tasks"
  );

  function selectGrade(grade) {
    const program = classPrograms[grade];

    setText("#selected-class-label", `${grade} класс`);
    setText("#selected-class-title", program.title);
    setText(
      "#selected-class-description",
      program.description
    );

    tasks.replaceChildren();

    program.tasks.forEach((text) => {
      tasks.append(node("li", "", text));
    });

    tabs.querySelectorAll("button").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(Number(button.dataset.grade) === grade)
      );
    });

    const tariffSection = grade <= 4
      ? "primary"
      : grade <= 9
        ? "middle"
        : "senior";

    const tariffURL = `tariffs.html#${tariffSection}`;

    formatLinks.forEach((link) => {
      link.href = tariffURL;
    });

    document.querySelector("#level-tariffs-link").href =
      tariffURL;

    setText(
      "#level-class-status",
      `Показаны примеры задач для ${grade} класса.`
    );
  }

  config.grades.forEach((grade) => {
    const button = node(
      "button",
      "level-class-tab",
      `${grade} класс`
    );

    button.type = "button";
    button.dataset.grade = String(grade);

    button.setAttribute("aria-pressed", "false");
    button.setAttribute(
      "aria-controls",
      "level-class-panel"
    );

    button.addEventListener("click", () => {
      selectGrade(grade);
    });

    tabs.append(button);
  });

  selectGrade(config.grades[0]);

  /* ВЫДЕЛЯЕМ ТЕКУЩУЮ СТУПЕНЬ ВНИЗУ */

  document
    .querySelectorAll(".level-other-pages a")
    .forEach((link) => {
      if (link.getAttribute("href") === filename) {
        link.setAttribute("aria-current", "page");
      }
    });
})();