"use strict";

(() => {
  /*
    Здесь позже укажем адрес сервиса,
    который принимает заявки.

    Он должен принимать JSON методом POST
    и возвращать JSON:
    { "ok": true }

    Секретные ключи сюда не вставляем.
  */

  const APPLICATION_ENDPOINT = "";

  const form = document.querySelector("#request-form");

  if (!form) {
    return;
  }

  const button = form.querySelector(
    ".school-application__submit"
  );

  const status = document.querySelector("#form-status");

  if (!button || !status) {
    return;
  }

  let sending = false;

  if (APPLICATION_ENDPOINT) {
    button.disabled = false;

    status.textContent =
      "После отправки откроется страница " +
      "с подробностями бесплатной диагностики.";
  } else {
    button.disabled = true;

    status.textContent =
      "Онлайн-запись скоро откроется. " +
      "О бесплатной диагностике можно прочитать " +
      "по кнопке рядом.";
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!APPLICATION_ENDPOINT || sending) {
      return;
    }

    if (!form.reportValidity()) {
      return;
    }

    const fields = new FormData(form);

    const application = {
      parentName: String(
        fields.get("parentName") || ""
      ).trim(),

      phone: String(
        fields.get("phone") || ""
      ).trim(),

      grade: String(
        fields.get("grade") || ""
      ),

      purpose: String(
        fields.get("purpose") || ""
      ),

      goal: String(
        fields.get("goal") || ""
      ).trim(),

      source: "Бесплатная диагностика"
    };

    sending = true;
    button.disabled = true;
    button.textContent = "Отправляем…";

    form.setAttribute("aria-busy", "true");
    status.textContent = "Отправляем вашу заявку.";

    try {
      const response = await fetch(
        APPLICATION_ENDPOINT,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(application)
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      const result = await response.json();

      if (result.ok !== true) {
        throw new Error("Отправка не подтверждена");
      }

      // Переходим только после подтверждения
      // от сервиса приёма заявок.
      window.location.assign("diagnostic.html");
    } catch {
      status.textContent =
        "Не удалось подтвердить отправку заявки. " +
        "Проверьте соединение и попробуйте ещё раз.";

      sending = false;
      button.disabled = false;
      button.textContent = "Отправить заявку";
      form.removeAttribute("aria-busy");
    }
  });
})();