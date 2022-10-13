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
const todoMetricsList = _("section-to-do__metrics-nav-list")[0];
const todoClearBtn = _("section-to-do__metrics-clear-btn")[0];
const todoInstructions = _("section-to-do__instructions")[0];

const todoCompleted = _("btn-completed");

// Items left calculation
const itemsLeft = _("items-left")[0];

const modifyItemsLeft = () => {
  itemsLeft.textContent = todoItems.length - todoCompleted.length - 1;
};

modifyItemsLeft();

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
  toggleElementTheme(todoMetricsList, "section-to-do__metrics-nav-list-dark");
  toggleElementTheme(todoClearBtn, "section-to-do__metrics-clear-btn-dark");
  toggleElementTheme(todoInstructions, "section-to-do__instructions-dark");

  toggleListTheme(todoItems, "section-to-do__items-dark");
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
  todoCheckBox.setAttribute("onclick", "toggleCompleted(this)");
  const todoText = document.createElement("p");
  todoText.setAttribute("class", "section-to-do__items-textbox");
  todoText.textContent = newToDo.value.trim();
  const todoClose = document.createElement("button");
  todoClose.setAttribute("class", "section-to-do__items-btn btn btn-close");
  todoClose.setAttribute("onclick", "removeToDo(this)");

  todo.appendChild(todoCheckBox);
  todo.appendChild(todoText);
  todo.appendChild(todoClose);

  todoSectionList.prepend(todo);

  // Reset value of input box
  newToDo.value = "";
  // items left
  modifyItemsLeft();
};

newToDo.addEventListener("keypress", (event, el) => {
  if (event.key === "Enter" && newToDo.value.trim()) {
    addNewToDo(el);
  }
});

// Close button functionality
const removeToDo = (element) => {
  element.parentElement.remove();
  // items left
  modifyItemsLeft();
};

// Completed btn functionality
const toggleCompleted = (element) => {
  element.classList.toggle("btn-completed");
  element.nextSibling.classList.toggle("textbox-completed");
  modifyItemsLeft();
};

// Removing active class from all list elements
const removeActiveClass = () => {
  Array.from(todoMetricsList.children).forEach((e) => {
    e.classList.remove("active");
  });
};

// Metric Nav list filtering functionality
const filterList = (clickedElem) => {
  const metricBtn = clickedElem.target;
  removeActiveClass();
  metricBtn.classList.add("active");
};

Array.from(todoMetricsList.children).forEach((e) => {
  e.addEventListener("click", filterList, e);
});
