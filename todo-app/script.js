`use strict`;
const themeToggleBtn = document.getElementsByClassName(
  "header__toggle-button"
)[0];

const themeToggle = () => {
  themeToggleBtn.classList.toggle("header-toggle-button-dark");
};

themeToggleBtn.addEventListener("click", themeToggle);
