`use strict`;

// Helper class to fetch elements by class name
const _ = (className) => {
  return document.getElementsByClassName(className);
};

const themeToggleBtn = _("header__toggle-button")[0];
const todoSectionList = _("section-to-do__list")[0];
const todoItems = _("section-to-do__items");
const todoTextBox = _("section-to-do__items-textbox");
const todoCheckBox = _("btn-checkbox");
const textCompleted = _("textbox-completed");
const todoMetrics = _("section-to-do__metrics")[0];
const todoInstructions = _("section-to-do__instructions")[0];

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
