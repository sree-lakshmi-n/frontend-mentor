`use strict`;
const themeToggleBtn = document.getElementsByClassName(
  "header__toggle-button"
)[0];
const todoItems = document.getElementsByClassName("section-to-do__items");

const themeToggle = () => {
  themeToggleBtn.classList.toggle("header-toggle-button-dark");
  document.body.classList.toggle("body-bg-dark");
  Array.from(todoItems).forEach((e) => {
    e.classList.toggle("section-to-do__items-dark");
  });
};

themeToggleBtn.addEventListener("click", themeToggle);
