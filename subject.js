"use strict";

(() => {
  /* =========================
     НАСТРОЙКИ ПРЕДМЕТОВ

     groups — какие классы ведёт
     преподаватель в каждой заготовке.

     exams — отдельные разделы экзаменов.
     ========================= */

  const subjects = {
    math: {
      title: "Математика",
      symbol: "x²",
      description:
        "Учимся понимать числа, замечать закономерности " +
        "и находить решения. От первых примеров " +
        "до сложных задач и подготовки к экзаменам.",

      groups: [
        [1],
        [2],
        [3],
        [4],
        [5, 6, 7, 8],
        [9, 10, 11]
      ],

      exams: ["oge", "ege"]
    },

    russian: {
      title: "Русский язык",
      symbol: "Аа",
      description:
        "Разбираемся в правилах, учимся писать грамотно " +
        "и уверенно выражать свои мысли.",

      groups: [
        [1],
        [2],
        [3],
        [4],
        [5, 6, 7, 8],
        [9, 10, 11]
      ],

      exams: ["oge", "ege"]
    },

    reading: {
      title: "Чтение",
      symbol: "АБ",
      description:
        "Учимся читать осмысленно, понимать истории, " +
        "пересказывать и обсуждать прочитанное.",

      groups: [
        [1],
        [2],
        [3],
        [4]
      ],

      exams: []
    },

    literature: {
      title: "Литература",
      symbol: "« »",
      description:
        "Знакомимся с произведениями, обсуждаем героев " +
        "и учимся аргументировать своё мнение.",

      groups: [
        [5, 6, 7, 8],
        [9],
        [10, 11]
      ],

      exams: ["oge", "ege"]
    },

    english: {
      title: "Английский язык",
      symbol: "Aa",
      description:
        "Расширяем словарный запас, разбираемся " +
        "в грамматике и учимся понимать английскую речь.",

      groups: [
        [1],
        [2],
        [3],
        [4],
        [5, 6, 7, 8],
        [9, 10, 11]
      ],

      exams: ["oge", "ege"]
    },

    history: {
      title: "История",
      symbol: "⌛",
      description:
        "Разбираемся в событиях прошлого, " +
        "их причинах и последствиях. " +
        "Учимся видеть связи между эпохами.",

      groups: [
        [5, 6, 7, 8],
        [9],
        [10, 11]
      ],

      exams: ["oge", "ege"]
    },

    social: {
      title: "Обществознание",
      symbol: "§",
      description:
        "Обсуждаем, как устроено общество, " +
        "разбираем понятия и учимся применять " +
        "знания на примерах.",

      groups: [
        [6, 7, 8],
        [9],
        [10, 11]
      ],

      exams: ["oge", "ege"]
    },

    physics: {
      title: "Физика",
      symbol: "F",
      description:
        "Объясняем явления вокруг нас, " +
        "разбираемся в формулах и учимся решать задачи.",

      groups: [
        [7, 8],
        [9],
        [10, 11]
      ],

      exams: ["oge", "ege"]
    },

    chemistry: {
      title: "Химия",
      symbol: "H₂",
      description:
        "Знакомимся с веществами и реакциями, " +
        "разбираемся в формулах и химических задачах.",

      groups: [
        [8],
        [9],
        [10, 11]
      ],

      exams: ["oge", "ege"]
    },

    biology: {
      title: "Биология",
      symbol: "❀",
      description:
        "Изучаем живой мир, находим связи " +
        "между процессами и разбираем сложные темы.",

      groups: [
        [5, 6, 7, 8],
        [9],
        [10, 11]
      ],

      exams: ["oge", "ege"]
    },

    geography: {
      title: "География",
      symbol: "◎",
      description:
        "Исследуем нашу планету, учимся работать " +
        "с картами и понимать природные процессы.",

      groups: [
        [5, 6, 7, 8],
        [9],
        [10, 11]
      ],

      exams: ["oge", "ege"]
    },

    informatics: {
      title: "Информатика",
      symbol: "01",
      description:
        "Развиваем логическое мышление, " +
        "разбираемся в алгоритмах и решаем " +
        "задачи по информатике.",

      groups: [
        [5, 6, 7, 8],
        [9],
        [10, 11]
      ],

      exams: ["oge", "ege"]
    },

    programming: {
      title: "Программирование",
      symbol: "</>",
      description:
        "Учимся создавать программы, " +
        "разбивать задачи на шаги " +
        "и воплощать собственные идеи.",

      groups: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11]
      ],

      exams: []
    }
  };

  /* =========================
     ДАННЫЕ ПРЕПОДАВАТЕЛЕЙ

     Пока здесь пустые поля.

     name — имя.
     photo — путь к фотографии.
     about — описание.
     grades — классы.
     modes — направления:
       school — школьная программа;
       oge — подготовка к ОГЭ;
       ege — подготовка к ЕГЭ.

     Ключи карточек:
       math-school-1 — первая школьная карточка;
       math-school-2 — вторая школьная карточка;
       math-oge — преподаватель ОГЭ;
       math-ege — преподаватель ЕГЭ.

     Для других предметов заменяем math:
       russian-school-1
       english-school-1
       physics-oge
       chemistry-ege
       и так далее.
     ========================= */

  const teacherDetails = {
    "math-school-1": {
  name: "Здесь настоящее имя преподавателя",
  photo: "images/teachers/math-teacher-1.jpg",
  about: "Здесь информация о преподавателе.",
  grades: [1, 2],
  modes: ["school"]
},

    "math-school-2": {
      name: "Здесь настоящее имя преподавателя",
      photo: "images/teachers/math-teacher-2.jpg",
      about: "Здесь информация о преподавателе.",
      grades: [3, 4],
      modes: ["school"]
    },

    "math-school-3": {
      name: "Здесь настоящее имя преподавателя",
      photo: "images/teachers/math-teacher-3.jpg",
      about: "Здесь информация о преподавателе.",
      grades: [5, 6],
      modes: ["school"]
    },

    "math-school-4": {
      name: "Здесь настоящее имя преподавателя",
      photo: "images/teachers/math-teacher-4.jpg",
      about: "Здесь информация о преподавателе.",
      grades: [7, 8],
      modes: ["school"]
    },

    "math-school-5": {
      name: "Здесь настоящее имя преподавателя",
      photo: "images/teachers/math-teacher-5.jpg",
      about: "Здесь информация о преподавателе.",
      grades: [9],
      modes: ["school"]
    },

    "math-school-6": {
      name: "Здесь настоящее имя преподавателя",
      photo: "images/teachers/math-teacher-1.jpg",
      about: "Здесь информация о преподавателе.",
      grades: [10, 11],
      modes: ["school"]
    },

    "math-oge": {
      name: "Здесь настоящее имя преподавателя",
      photo: "images/teachers/math-teacher-2.jpg",
      about: "Здесь информация о преподавателе.",
      grades: [5, 6, 7, 8],
      modes: ["school", "oge"]
    },

    "math-ege": {
      name: "Здесь настоящее имя преподавателя",
      photo: "images/teachers/math-teacher-3.jpg",
      about: "Здесь информация о преподавателе.",
      grades: [11],
      modes: ["school", "ege"]
    }

    /*
      Здесь можно добавлять данные других предметов.

      Например, после предыдущего объекта поставь
      запятую и добавь:

      "russian-school-1": {
        name: "",
        photo: "",
        about: ""
      }
    */
  };

  /* =========================
     ДОПОЛНИТЕЛЬНЫЕ КАРТОЧКИ

     Если на один класс нужно несколько
     преподавателей, добавляй их сюда.

     Пример заготовки:

     {
       id: "math-extra-1",
       subject: "math",
       name: "",
       photo: "",
       about: "",
       grades: [5, 6, 7, 8],
       modes: ["school"]
     }
     ========================= */

  const additionalTeachers = [];

  /* =========================
     ОПРЕДЕЛЯЕМ ТЕКУЩУЮ СТРАНИЦУ

     math.html → math
     russian.html → russian
     ========================= */

  const fileName = location.pathname
    .split("/")
    .pop()
    .toLowerCase();

  const subjectKey = fileName.replace(/\.html$/, "");
  const subject = subjects[subjectKey];

  if (!subject) {
    document.querySelector("#subject-title").textContent =
      "Страница предмета";

    document.querySelector("#subject-description").textContent =
      "Проверьте название HTML-файла: " +
      "например, math.html или russian.html.";

    return;
  }

  /* =========================
     ЗАПОЛНЯЕМ ПЕРВЫЙ ЭКРАН
     ========================= */

  document.title =
    `${subject.title} — Азимут знаний`;

  document.querySelector("#subject-title").textContent =
    subject.title;

  document.querySelector("#breadcrumb-subject").textContent =
    subject.title;

  document.querySelector("#subject-description").textContent =
    subject.description;

  document.querySelector("#subject-symbol").textContent =
    subject.symbol;

  document
    .querySelector('meta[name="description"]')
    .setAttribute(
      "content",
      `${subject.title}: преподаватели и направления занятий ` +
      "онлайн-центра «Азимут знаний»."
    );

  /* =========================
     СОЗДАЁМ ПУСТЫЕ КАРТОЧКИ
     ========================= */

  function createBlankTeacher(id, grades, modes) {
    return {
      id,
      subject: subjectKey,
      name: "",
      photo: "",
      about: "",
      grades,
      modes
    };
  }

  const blankTeachers = subject.groups.map(
    (grades, index) => {
      return createBlankTeacher(
        `${subjectKey}-school-${index + 1}`,
        grades,
        ["school"]
      );
    }
  );

  subject.exams.forEach((exam) => {
    blankTeachers.push(
      createBlankTeacher(
        `${subjectKey}-${exam}`,
        [],
        [exam]
      )
    );
  });

  const teachers = [
    ...blankTeachers.map((teacher) => {
      return {
        ...teacher,
        ...(teacherDetails[teacher.id] || {})
      };
    }),

    ...additionalTeachers.filter((teacher) => {
      return teacher.subject === subjectKey;
    })
  ];

  /* =========================
     ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
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

  function formatGrades(grades = []) {
    const sorted = [
      ...new Set(grades)
    ].sort((a, b) => a - b);

    if (sorted.length === 0) {
      return "";
    }

    if (sorted.length === 1) {
      return `${sorted[0]} класс`;
    }

    const consecutive = sorted.every((grade, index) => {
      return index === 0 || grade === sorted[index - 1] + 1;
    });

    if (consecutive) {
      return (
        `${sorted[0]}–${sorted[sorted.length - 1]} классы`
      );
    }

    return `${sorted.join(", ")} классы`;
  }

  const modeTitles = {
    school: "Школьная программа",
    oge: "Подготовка к ОГЭ",
    ege: "Подготовка к ЕГЭ"
  };

  /* =========================
     СОЗДАЁМ ФИЛЬТРЫ
     ========================= */

  const modesContainer = document.querySelector(
    "#teacher-modes"
  );

  const classesContainer = document.querySelector(
    "#teacher-classes"
  );

  const classesBlock = document.querySelector(
    "#class-filter-block"
  );

  const availableModes = [
    "school",
    "oge",
    "ege"
  ].filter((mode) => {
    return teachers.some((teacher) => {
      return teacher.modes.includes(mode);
    });
  });

  const availableGrades = [
    ...new Set(
      teachers
        .filter((teacher) => teacher.modes.includes("school"))
        .flatMap((teacher) => teacher.grades)
    )
  ].sort((a, b) => a - b);

  let selectedMode = "school";
  let selectedGrade = "all";

  availableModes.forEach((mode) => {
    const button = element(
      "button",
      "teacher-mode",
      modeTitles[mode]
    );

    button.type = "button";
    button.dataset.mode = mode;

    button.setAttribute(
      "aria-pressed",
      String(mode === selectedMode)
    );

    button.setAttribute(
      "aria-controls",
      "teacher-grid"
    );

    button.addEventListener("click", () => {
      selectedMode = mode;
      renderTeachers();
    });

    modesContainer.append(button);
  });

  function addClassButton(value, title) {
    const button = element(
      "button",
      "teacher-class",
      title
    );

    button.type = "button";
    button.dataset.grade = String(value);

    button.setAttribute(
      "aria-pressed",
      String(value === selectedGrade)
    );

    button.setAttribute(
      "aria-controls",
      "teacher-grid"
    );

    button.addEventListener("click", () => {
      selectedGrade = value;
      renderTeachers();
    });

    classesContainer.append(button);
  }

  addClassButton("all", "Все классы");

  availableGrades.forEach((grade) => {
    addClassButton(grade, `${grade} класс`);
  });

  /* =========================
     МЕСТО ДЛЯ ФОТОГРАФИИ
     ========================= */

  function createPhotoPlaceholder() {
    const placeholder = element(
      "div",
      "teacher-placeholder"
    );

    const avatar = element(
      "div",
      "teacher-avatar"
    );

    avatar.setAttribute("aria-hidden", "true");

    const text = element(
      "p",
      "",
      "Фото преподавателя"
    );

    placeholder.append(avatar, text);

    return placeholder;
  }

  /* =========================
     КАРТОЧКА ПРЕПОДАВАТЕЛЯ
     ========================= */

  function createTeacherCard(teacher) {
    const card = element(
      "article",
      "teacher-card"
    );

    const photoArea = element(
      "div",
      "teacher-photo-area"
    );

    if (teacher.photo.trim()) {
      const image = element(
        "img",
        "teacher-photo"
      );

      image.src = teacher.photo;
      image.alt = teacher.name
        ? `Преподаватель: ${teacher.name}`
        : "Фото преподавателя";

      image.loading = "lazy";
      image.decoding = "async";

      image.addEventListener(
        "error",
        () => {
          image.replaceWith(createPhotoPlaceholder());
        },
        { once: true }
      );

      photoArea.append(image);
    } else {
      photoArea.append(createPhotoPlaceholder());
    }

    const photoBadge = element(
      "span",
      "teacher-photo-badge",
      modeTitles[selectedMode]
    );

    photoArea.append(photoBadge);

    const content = element(
      "div",
      "teacher-content"
    );

    const name = element(
      "h4",
      "teacher-name",
      teacher.name.trim() || "Имя преподавателя"
    );

    const subjectName = element(
      "p",
      "teacher-subject",
      subject.title
    );

    const badges = element(
      "div",
      "teacher-badges"
    );

    const gradesLabel = formatGrades(teacher.grades);

    if (gradesLabel) {
      badges.append(
        element("span", "", gradesLabel)
      );
    }

    if (teacher.modes.includes("oge")) {
      badges.append(
        element("span", "", "Подготовка к ОГЭ")
      );
    }

    if (teacher.modes.includes("ege")) {
      badges.append(
        element("span", "", "Подготовка к ЕГЭ")
      );
    }

    const about = element(
      "p",
      "teacher-about",
      teacher.about.trim() ||
      "Информация о преподавателе скоро появится."
    );

    const bottom = element(
      "div",
      "teacher-bottom"
    );

    if (teacher.name.trim()) {
      const link = element(
        "a",
        "button button-outline",
        "Посмотреть тарифы"
      );

      const target = selectedMode === "school"
        ? "catalog"
        : selectedMode;

      link.href = `tariffs.html#${target}`;

      bottom.append(link);
    } else {
      bottom.append(
        element(
          "p",
          "teacher-soon",
          "Знакомство с преподавателем — скоро"
        )
      );
    }

    content.append(
      name,
      subjectName,
      badges,
      about,
      bottom
    );

    card.append(photoArea, content);

    return card;
  }

  /* =========================
     ПОКАЗ ПОДХОДЯЩИХ КАРТОЧЕК
     ========================= */

  const grid = document.querySelector(
    "#teacher-grid"
  );

  const emptyMessage = document.querySelector(
    "#teachers-empty"
  );

  const count = document.querySelector(
    "#teacher-count"
  );

  const sectionTitle = document.querySelector(
    "#teacher-section-title"
  );

  function renderTeachers() {
    const visibleTeachers = teachers.filter((teacher) => {
      const matchesMode = teacher.modes.includes(
        selectedMode
      );

      const matchesGrade = (
        selectedMode !== "school" ||
        selectedGrade === "all" ||
        teacher.grades.includes(selectedGrade)
      );

      return matchesMode && matchesGrade;
    });

    grid.replaceChildren();

    visibleTeachers.forEach((teacher) => {
      grid.append(createTeacherCard(teacher));
    });

    classesBlock.hidden = selectedMode !== "school";

    modesContainer
      .querySelectorAll("[data-mode]")
      .forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.mode === selectedMode)
        );
      });

    classesContainer
      .querySelectorAll("[data-grade]")
      .forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(
            button.dataset.grade === String(selectedGrade)
          )
        );
      });

    const classSuffix = (
      selectedMode === "school" &&
      selectedGrade !== "all"
    )
      ? ` · ${selectedGrade} класс`
      : "";

    sectionTitle.textContent =
      modeTitles[selectedMode] + classSuffix;

    const hasPlaceholders = visibleTeachers.some((teacher) => {
      return !teacher.name.trim();
    });

    count.textContent = hasPlaceholders
      ? "Информация о команде готовится"
      : `Найдено преподавателей: ${visibleTeachers.length}`;

    emptyMessage.hidden = visibleTeachers.length > 0;
  }

  renderTeachers();

  /* =========================
     ДРУГИЕ ПРЕДМЕТЫ
     ========================= */

  const otherSubjects = document.querySelector(
    "#other-subjects"
  );

  Object.entries(subjects).forEach(([key, item]) => {
    if (key === subjectKey) {
      return;
    }

    const link = element(
      "a",
      "other-subject-link"
    );

    link.href = `${key}.html`;

    const icon = element(
      "span",
      "other-subject-icon",
      item.symbol
    );

    icon.setAttribute("aria-hidden", "true");

    const title = element(
      "span",
      "",
      item.title
    );

    link.append(icon, title);

    otherSubjects.append(link);
  });
})();