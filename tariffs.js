"use strict";

(() => {
  /* =========================
     СОЗДАНИЕ ОБЪЕКТА ТАРИФА
     ========================= */

  function tariff(
    name,
    price,
    period,
    features = [],
    tone = "purple",
    label = ""
  ) {
    return {
      name,
      price,
      period,
      features,
      tone,
      label
    };
  }

  /* =========================
     ОСНОВНЫЕ ПРОГРАММЫ
     ========================= */

  const programs = [
    {
      id: "preschool",
      title: "Дошкольники",
      description:
        "Любопытство, первые открытия и подготовка к школе.",

      cards: [
        tariff(
          "«Умный малыш»",
          "3 490 ₽",
          "/ мес",
          [
            "Речь · математика · логика",
            "Внимание · память · творчество"
          ],
          "yellow",
          "4–5 лет"
        ),

        tariff(
          "«Умный малыш» — индивидуально",
          "8 900 ₽",
          "/ мес",
          [
            "8 занятий",
            "Персональная программа"
          ],
          "pink",
          "4–5 лет"
        ),

        tariff(
          "«Подготовка к школе»",
          "4 490 ₽",
          "/ мес",
          [
            "Чтение · письмо · математика",
            "Логика · речь · окружающий мир"
          ],
          "blue",
          "5–7 лет"
        ),

        tariff(
          "«Будущий первоклассник PRO»",
          "6 490 ₽",
          "/ мес",
          [
            "Всё необходимое для уверенного старта в школе",
            "Контроль прогресса",
            "Рекомендации родителям"
          ],
          "purple",
          "5–7 лет"
        ),

        tariff(
          "Подготовка к школе — индивидуально",
          "9 900 ₽",
          "/ мес",
          [],
          "green",
          "5–7 лет"
        )
      ]
    },

    {
      id: "primary",
      title: "1–4 класс",
      description:
        "Знакомимся с предметами и укрепляем основу знаний.",

      cards: [
        tariff(
          "START",
          "1 990 ₽",
          "/ мес",
          [
            "Самостоятельное обучение",
            "Видеокурс",
            "Задания и тесты",
            "Личный кабинет",
            "Прогресс"
          ],
          "blue"
        ),

        tariff(
          "GROUP",
          "3 990 ₽",
          "/ мес",
          [
            "8 занятий",
            "Мини-группа",
            "Преподаватель",
            "Домашние задания и проверка",
            "Чат"
          ],
          "green"
        ),

        tariff(
          "GROUP PRO",
          "5 490 ₽",
          "/ мес",
          [
            "Всё из GROUP",
            "Работа над пробелами",
            "Разбор ошибок",
            "Контроль прогресса",
            "Отчёт родителям"
          ],
          "purple"
        ),

        tariff(
          "PERSONAL",
          "9 900 ₽",
          "/ мес",
          [
            "8 индивидуальных занятий",
            "Персональная программа",
            "Домашние задания и проверка",
            "Сопровождение"
          ],
          "pink"
        )
      ],

      groups: [
        {
          title: "Комплексные программы",

          cards: [
            tariff(
              "2 предмета",
              "6 990 ₽",
              "/ мес",
              [],
              "blue"
            ),

            tariff(
              "3 предмета",
              "9 490 ₽",
              "/ мес",
              [],
              "yellow"
            ),

            tariff(
              "Вся начальная школа",
              "11 990 ₽",
              "/ мес",
              [],
              "pink"
            )
          ],

          note:
            "Математика · русский · чтение · английский · " +
            "помощь с ДЗ · контроль успеваемости"
        }
      ]
    },

    {
      id: "middle",
      title: "5–9 класс",
      description:
        "Единая тарифная система для школьных предметов.",

      cards: [
        tariff(
          "START",
          "1 990 ₽",
          "/ мес",
          [
            "Самостоятельное обучение"
          ],
          "blue"
        ),

        tariff(
          "GROUP",
          "3 990 ₽",
          "/ мес",
          [
            "8 занятий с преподавателем"
          ],
          "green"
        ),

        tariff(
          "GROUP PRO",
          "5 490 ₽",
          "/ мес",
          [
            "Занятия",
            "Сопровождение",
            "Контроль"
          ],
          "purple"
        ),

        tariff(
          "PERSONAL",
          "9 900 ₽",
          "/ мес",
          [
            "8 индивидуальных занятий"
          ],
          "pink"
        )
      ],

      note:
        "Предметы: русский · литература · английский · история · " +
        "обществознание · математика · физика · химия · биология · " +
        "география · информатика · программирование.",

      groups: [
        {
          title: "Комплексы",

          cards: [
            tariff(
              "«Уверенный ученик»",
              "6 990 ₽",
              "/ мес",
              [
                "2 предмета"
              ],
              "blue"
            ),

            tariff(
              "«Без пробелов»",
              "9 490 ₽",
              "/ мес",
              [
                "3 предмета"
              ],
              "yellow"
            ),

            tariff(
              "«Вся школа»",
              "11 990 ₽",
              "/ мес",
              [
                "4 основных предмета",
                "Контроль прогресса"
              ],
              "pink"
            )
          ]
        }
      ]
    },

    {
      id: "senior",
      title: "10–11 класс",
      description:
        "Поддержка по школьной программе в старших классах.",

      cards: [
        tariff(
          "START",
          "1 990 ₽",
          "/ мес",
          [
            "Самостоятельный курс"
          ],
          "blue"
        ),

        tariff(
          "GROUP",
          "3 990 ₽",
          "/ мес",
          [
            "8 групповых занятий"
          ],
          "green"
        ),

        tariff(
          "GROUP PRO",
          "5 490 ₽",
          "/ мес",
          [
            "8 занятий",
            "Сопровождение"
          ],
          "purple"
        ),

        tariff(
          "PERSONAL",
          "9 900 ₽",
          "/ мес",
          [
            "8 индивидуальных занятий"
          ],
          "pink"
        )
      ]
    },

    {
      id: "oge",
      title: "Подготовка к ОГЭ",
      description:
        "Выберите подходящий формат подготовки к экзаменам.",

      cards: [
        tariff(
          "GROUP",
          "5 990 ₽",
          "/ мес · за предмет",
          [
            "8 занятий",
            "Домашние задания",
            "Банк заданий",
            "Проверка",
            "Пробники",
            "Разбор ошибок",
            "Чат"
          ],
          "blue"
        ),

        tariff(
          "PRO",
          "9 990 ₽",
          "/ мес",
          [
            "Расширенная проверка",
            "Индивидуальные рекомендации",
            "Пробники",
            "Контроль динамики"
          ],
          "purple"
        ),

        tariff(
          "PERSONAL",
          "13 900 ₽",
          "/ мес",
          [
            "8 индивидуальных занятий",
            "Персональный план",
            "Проверка работ",
            "Пробники",
            "Анализ результатов"
          ],
          "pink"
        )
      ]
    },

    {
      id: "ege",
      title: "Подготовка к ЕГЭ",
      description:
        "От групповых занятий до персонального плана подготовки.",

      cards: [
        tariff(
          "GROUP",
          "6 990 ₽",
          "/ мес · за предмет",
          [
            "8 занятий",
            "Домашние задания и проверка",
            "Банк заданий",
            "Пробники",
            "Разбор ошибок"
          ],
          "blue"
        ),

        tariff(
          "PRO",
          "9 990 ₽",
          "/ мес · за предмет",
          [
            "Расширенная проверка",
            "Рекомендации",
            "Регулярные пробники",
            "Контроль динамики"
          ],
          "purple"
        ),

        tariff(
          "PERSONAL",
          "14 900 ₽",
          "/ мес · за предмет",
          [
            "8 индивидуальных занятий",
            "Персональный план",
            "Задания и проверка",
            "Пробники",
            "Анализ результатов"
          ],
          "pink"
        )
      ],

      groups: [
        {
          title: "Пакеты подготовки",

          cards: [
            tariff(
              "2 предмета",
              "18 900 ₽",
              "/ мес",
              [],
              "blue"
            ),

            tariff(
              "3 предмета",
              "26 900 ₽",
              "/ мес",
              [],
              "yellow"
            ),

            tariff(
              "«ЕГЭ PRO»",
              "24 900 ₽",
              "/ мес",
              [
                "Индивидуальные занятия",
                "Куратор",
                "Персональный план",
                "Домашние задания и проверка",
                "Пробники",
                "Еженедельный контроль",
                "Отчёт родителям"
              ],
              "purple"
            )
          ]
        }
      ]
    }
  ];

  /* =========================
     МИНИ-КУРСЫ
     ========================= */

  const miniCourseNames = [
    "«Дроби без страха»",
    "«Таблица умножения без зубрёжки»",
    "«Грамотность за 30 дней»",
    "«Научись решать задачи»",
    "«Подготовка к контрольной»",
    "«Переход в 5 класс»",
    "«Переход в 10 класс»"
  ];

  const colors = [
    "blue",
    "yellow",
    "pink",
    "green",
    "purple"
  ];

  const miniCourses = miniCourseNames.map((name, index) => {
    return tariff(
      name,
      "990–2 990 ₽",
      "",
      [
        "Стоимость зависит от выбранного мини-курса"
      ],
      colors[index % colors.length]
    );
  });

  /* =========================
     ЛЕТНИЕ ПРОГРАММЫ
     ========================= */

  const summerPrograms = [
    tariff(
      "«Лето без пробелов»",
      "3 990 ₽",
      "/ мес",
      [
        "1–4 класс",
        "Математика + русский + чтение"
      ],
      "yellow"
    ),

    tariff(
      "«Летний рывок»",
      "4 490 ₽",
      "/ мес",
      [
        "5–8 класс",
        "Повторение",
        "Подготовка к следующему классу"
      ],
      "blue"
    ),

    tariff(
      "«Старт в 9 класс»",
      "5 490 ₽",
      "",
      [
        "Повторение ключевых тем 8 класса"
      ],
      "green"
    ),

    tariff(
      "«Старт в 11 класс»",
      "5 990 ₽",
      "",
      [
        "Повторение базы",
        "Диагностика",
        "План подготовки"
      ],
      "pink"
    )
  ];

  /* =========================
     ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
     ========================= */

  const extraServices = [
    tariff(
      "Индивидуальное занятие",
      "1 500 ₽",
      "/ 60 мин",
      [],
      "blue"
    ),

    tariff(
      "Консультация преподавателя",
      "1 500 ₽",
      "/ 60 мин",
      [],
      "green"
    ),

    tariff(
      "Разбор контрольной",
      "990 ₽",
      "",
      [],
      "pink"
    ),

    tariff(
      "Подготовка к контрольной",
      "990–1 490 ₽",
      "",
      [],
      "yellow"
    ),

    tariff(
      "Дополнительная диагностика",
      "Бесплатно",
      "",
      [
        "Для действующих учеников"
      ],
      "purple"
    )
  ];

  /* =========================
     СОЗДАНИЕ HTML-ЭЛЕМЕНТОВ
     ========================= */

  function element(tag, className = "", text = "") {
    const node = document.createElement(tag);

    if (className) {
      node.className = className;
    }

    if (text) {
      node.textContent = text;
    }

    return node;
  }

  function createCard(item, context, headingLevel = "h4") {
    const card = element("article", "tariff-card");

    card.dataset.tone = item.tone;

    const top = element("div", "tariff-top");

    const labelText = item.label
      ? `${context} · ${item.label}`
      : context;

    const label = element(
      "span",
      "tariff-label",
      labelText
    );

    const star = element("span", "tariff-star", "✦");
    star.setAttribute("aria-hidden", "true");

    top.append(label, star);

    const title = element(
      headingLevel,
      "tariff-title",
      item.name
    );

    const price = element(
      "p",
      "tariff-price",
      item.price
    );

    if (item.period) {
      const period = element(
        "span",
        "tariff-period",
        item.period
      );

      price.append(period);
    }

    const features = element("ul", "tariff-features");

    item.features.forEach((feature) => {
      features.append(element("li", "", feature));
    });

    const button = element(
      "button",
      "button button-outline"
    );

    button.type = "button";

    button.dataset.choice = [
      context,
      item.label,
      item.name
    ].filter(Boolean).join(" · ");

    button.dataset.price = [
      item.price,
      item.period
    ].filter(Boolean).join(" ");

    const buttonText = element(
      "span",
      "",
      "Выбрать тариф"
    );

    const arrow = element("span", "", "↗");
    arrow.setAttribute("aria-hidden", "true");

    button.append(buttonText, arrow);

    card.append(
      top,
      title,
      price,
      features,
      button
    );

    return card;
  }

  function createGrid(cards, context, headingLevel = "h4") {
    const grid = element("div", "tariff-grid");

    cards.forEach((item) => {
      grid.append(createCard(item, context, headingLevel));
    });

    return grid;
  }

  function createProgram(program) {
    const section = element(
      "section",
      "program-section"
    );

    section.id = program.id;

    const headingId = `${program.id}-heading`;

    section.setAttribute(
      "aria-labelledby",
      headingId
    );

    const heading = element(
      "div",
      "program-heading"
    );

    const title = element(
      "h3",
      "",
      program.title
    );

    title.id = headingId;

    const description = element(
      "p",
      "",
      program.description
    );

    heading.append(title, description);

    section.append(
      heading,
      createGrid(program.cards, program.title)
    );

    if (program.note) {
      section.append(
        element("p", "program-note", program.note)
      );
    }

    if (program.groups) {
      program.groups.forEach((group) => {
        const groupSection = element(
          "div",
          "subprogram"
        );

        const groupTitle = element(
          "h4",
          "",
          group.title
        );

        groupSection.append(
          groupTitle,
          createGrid(
            group.cards,
            `${program.title} · ${group.title}`,
            "h5"
          )
        );

        if (group.note) {
          groupSection.append(
            element("p", "program-note", group.note)
          );
        }

        section.append(groupSection);
      });
    }

    return section;
  }

  /* =========================
     ВЫВОД ТАРИФОВ
     ========================= */

  const programsContainer = document.querySelector(
    "#programs"
  );

  programs.forEach((program) => {
    programsContainer.append(createProgram(program));
  });

  function fillExtraSection(selector, cards, context) {
    const container = document.querySelector(selector);

    cards.forEach((item) => {
      container.append(createCard(item, context, "h3"));
    });
  }

  fillExtraSection(
    "#mini-cards",
    miniCourses,
    "Мини-курс"
  );

  fillExtraSection(
    "#summer-cards",
    summerPrograms,
    "Летняя программа"
  );

  fillExtraSection(
    "#extra-cards",
    extraServices,
    "Дополнительно"
  );

  /* =========================
     ПЕРЕКЛЮЧЕНИЕ РАЗДЕЛОВ
     ========================= */

  const categoryButtons = [
    ...document.querySelectorAll("[data-category]")
  ];

  const sections = [
    ...document.querySelectorAll(".program-section")
  ];

  const filterStatus = document.querySelector(
    "#filter-status"
  );

  function isKnownCategory(category) {
    return (
      category === "all" ||
      programs.some((program) => program.id === category)
    );
  }

  function selectCategory(category, updateAddress = false) {
    if (!isKnownCategory(category)) {
      return;
    }

    sections.forEach((section) => {
      section.hidden = (
        category !== "all" &&
        section.id !== category
      );
    });

    categoryButtons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.category === category)
      );
    });

    if (category === "all") {
      filterStatus.textContent =
        "Показаны все возрастные разделы и экзамены.";
    } else {
      const selected = programs.find((program) => {
        return program.id === category;
      });

      filterStatus.textContent =
        `Выбран раздел: ${selected.title}.`;
    }

    if (updateAddress) {
      const hash = category === "all"
        ? "#catalog"
        : `#${category}`;

      // Некоторые браузеры ограничивают history
      // при открытии страницы напрямую с компьютера.
      try {
        history.replaceState(null, "", hash);
      } catch {
        // Переключение тарифов продолжит работать.
      }
    }
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectCategory(button.dataset.category, true);
    });
  });

  const initialHash = location.hash.slice(1);

  if (initialHash === "catalog") {
    selectCategory("all");
  } else if (isKnownCategory(initialHash)) {
    selectCategory(initialHash);
  } else {
    selectCategory("primary");
  }

  function syncCategoryWithHash() {
    const category = location.hash.slice(1);

    if (isKnownCategory(category)) {
      selectCategory(category);
    } else if (category === "catalog") {
      selectCategory("all");
    }
  }

  window.addEventListener(
    "hashchange",
    syncCategoryWithHash
  );

  window.addEventListener(
    "popstate",
    syncCategoryWithHash
  );

  /* =========================
     ОКНО ВЫБРАННОГО ТАРИФА
     ========================= */

  const dialog = document.querySelector(
    "#choice-dialog"
  );

  const choiceName = document.querySelector(
    "#choice-name"
  );

  const choicePrice = document.querySelector(
    "#choice-price"
  );

  const copyButton = document.querySelector(
    "#copy-choice"
  );

  const copyStatus = document.querySelector(
    "#copy-status"
  );

  let previousButton = null;

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const button = event.target.closest("[data-choice]");

    if (!button) {
      return;
    }

    previousButton = button;

    choiceName.textContent = button.dataset.choice;
    choicePrice.textContent = button.dataset.price;

    copyStatus.textContent = "";

    dialog.showModal();
  });

  // Закрытие при нажатии за пределами окна.

  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) {
      return;
    }

    const bounds = dialog.getBoundingClientRect();

    const outside = (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    );

    if (outside) {
      dialog.close();
    }
  });

  // После закрытия возвращаем фокус
  // на кнопку выбранного тарифа.

  dialog.addEventListener("close", () => {
    previousButton?.focus();
  });

  /* =========================
     КОПИРОВАНИЕ ВЫБОРА
     ========================= */

  copyButton.addEventListener("click", async () => {
    const text = [
      "Азимут знаний",
      choiceName.textContent,
      choicePrice.textContent
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);

      copyStatus.textContent =
        "Название программы и стоимость скопированы. " +
        "Заявка не отправлена.";
    } catch {
      copyStatus.textContent =
        "Автоматическое копирование недоступно. " +
        "Выделите и скопируйте название и стоимость выше.";
    }
  });
})();