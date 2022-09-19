import "./assets/styles/scss/main.scss";

// menu
const sublinks = document.querySelectorAll(".nav__sublinks");
const sublinksClickHandler = (e) => e.target.classList.toggle("active");
sublinks.forEach((link) =>
  link.addEventListener("click", sublinksClickHandler)
);

// Select
const selects = document.querySelectorAll(".select");
selects.forEach((select) => {
  const items = select.querySelectorAll(".select__item");
  const input = select.querySelector(".select__root input");
  items.forEach((item) =>
    item.addEventListener("click", (e) => {
      input.value = item.textContent;
    })
  );
  select.addEventListener("click", () => select.classList.toggle("active"));
});
