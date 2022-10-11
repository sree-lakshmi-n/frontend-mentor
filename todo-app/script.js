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

const themeToggle = () => {
  themeToggleBtn.classList.toggle("header-toggle-button-dark");

  document.body.classList.toggle("body-bg-dark");
  todoSectionList.classList.toggle("section-to-do__list-dark");
  Array.from(todoItems).forEach((e) => {
    e.classList.toggle("section-to-do__items-dark");
  });
  Array.from(todoTextBox).forEach((e) => {
    e.classList.toggle("section-to-do__items-textbox-dark");
  });
  Array.from(todoCheckBox).forEach((e) => {
    e.classList.toggle("btn-checkbox-dark");
  });
  Array.from(textCompleted).forEach((e) => {
    e.classList.toggle("textbox-completed-dark");
  });
  todoMetrics.classList.toggle("section-to-do__metrics-dark");
  todoInstructions.classList.toggle("section-to-do__instructions-dark");
};

themeToggleBtn.addEventListener("click", themeToggle);
