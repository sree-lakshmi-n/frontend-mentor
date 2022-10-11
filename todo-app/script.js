`use strict`;

const themeToggleBtn = document.getElementsByClassName(
  "header__toggle-button"
)[0];
const todoSectionList = document.getElementsByClassName(
  "section-to-do__list"
)[0];
const todoItems = document.getElementsByClassName("section-to-do__items");
const todoTextBox = document.getElementsByClassName(
  "section-to-do__items-textbox"
);
const todoCheckBox = document.getElementsByClassName("btn-checkbox");
const textCompleted = document.getElementsByClassName("textbox-completed");
const todoMetrics = document.getElementsByClassName(
  "section-to-do__metrics"
)[0];
const todoInstructions = document.getElementsByClassName(
  "section-to-do__instructions"
)[0];

// Helper classes to toggle theme
const toggleElementTheme = (element, classToBeToggledWith) => {
  element.classList.toggle(classToBeToggledWith);
};
const toggleListTheme = (list, classToBeToggledWith) => {
  Array.from(list).forEach((e) => {
    e.classList.toggle(classToBeToggledWith);
  });
};

const themeToggle = () => {
  toggleElementTheme(themeToggleBtn, "header-toggle-button-dark");
  toggleElementTheme(document.body, "body-bg-dark");
  toggleElementTheme(todoSectionList, "section-to-do__list-dark");
  toggleElementTheme(todoMetrics, "section-to-do__metrics-dark");
  toggleElementTheme(todoInstructions, "section-to-do__instructions-dark");

  toggleListTheme(todoItems, "section-to-do__items-dark");
  toggleListTheme(todoTextBox, "section-to-do__items-textbox-dark");
  toggleListTheme(todoCheckBox, "btn-checkbox-dark");
  toggleListTheme(textCompleted, "textbox-completed-dark");
};

themeToggleBtn.addEventListener("click", themeToggle);
