`use strict`;

// Helper class to fetch elements by class name
const _ = (className) => {
  return document.getElementsByClassName(className);
};

const themeToggleBtn = _("header__toggle-button")[0];
const todoSectionNew = _("section-to-do__new")[0];
const todoSectionList = _("section-to-do__list")[0];
const todoItems = _("section-to-do__items");
const todoTextBox = _("section-to-do__items-textbox");
const btnCheckBox = _("btn-checkbox");
const btnClose = _("btn-close");
const textCompleted = _("textbox-completed");
const todoMetrics = _("section-to-do__metrics")[0];
const todoMetricsList = _("section-to-do__metrics-nav-list");
const todoClearBtn = _("section-to-do__metrics-clear-btn")[0];
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
  toggleElementTheme(todoSectionNew, "section-to-do__new-dark");
  toggleElementTheme(todoSectionList, "section-to-do__list-dark");
  toggleElementTheme(todoMetrics, "section-to-do__metrics-dark");
  toggleElementTheme(todoClearBtn, "section-to-do__metrics-clear-btn-dark");
  toggleElementTheme(todoInstructions, "section-to-do__instructions-dark");

  toggleListTheme(todoItems, "section-to-do__items-dark");
  toggleListTheme(todoMetricsList, "section-to-do__metrics-nav-list-dark");
  toggleListTheme(todoTextBox, "section-to-do__items-textbox-dark");
  toggleListTheme(btnCheckBox, "btn-checkbox-dark");
  toggleListTheme(btnClose, "btn-close-dark");
  toggleListTheme(textCompleted, "textbox-completed-dark");
};

themeToggleBtn.addEventListener("click", themeToggle);

// Drag and drop functionality (Jquery)

$(function () {
  $("#sortable").sortable({
    items: ".section-to-do__items",
  });
  $("#sortable").disableSelection();
});

// Adding new to-do items
const newToDo = _("new_to-do")[0];

const addNewToDo = (el) => {
  const todo = document.createElement("li");
  todo.setAttribute("class", "section-to-do__items");
  const todoCheckBox = document.createElement("button");
  todoCheckBox.setAttribute(
    "class",
    "section-to-do__items-btn btn btn-checkbox"
  );
  const todoText = document.createElement("p");
  todoText.setAttribute("class", "section-to-do__items-textbox");
  todoText.textContent = newToDo.value.trim();
  const todoClose = document.createElement("button");
  todoClose.setAttribute("class", "section-to-do__items-btn btn btn-close");

  todo.appendChild(todoCheckBox);
  todo.appendChild(todoText);
  todo.appendChild(todoClose);

  newToDo.appendChild(todo);

  console.log("append");
};

newToDo.addEventListener("keypress", (event, el) => {
  if (event.key === "Enter" && newToDo.value.trim()) {
    addNewToDo(el);
  }
});
