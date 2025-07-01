document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");

  // Если есть переключатель темы, настраиваем его
  if (toggle) {
    // Применяем сохранённую тему из localStorage
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      toggle.checked = true;
    }

    // Слушатель изменения переключателя
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    });
  }

  // --- Здесь можно добавить код, который нужен только для страницы услуг ---
});
