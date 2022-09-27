`use strict`;
const firstName = document.querySelector(".first-name");
const lastName = document.getElementsByClassName("last-name")[0];
const mailId = document.getElementsByClassName("mail-id")[0];
const passWord = document.getElementsByClassName("pwd")[0];
const submitBtn = document.getElementsByClassName("submit-btn")[0];

submitBtn.addEventListener("click", (e) => {});

// Checking if input values are empty
const isEmpty = (str) => {
  return !str.trim().length;
};

const inputs = [firstName, lastName, mailId, passWord];
inputs.forEach((e) => {
  if (isEmpty(e.value)) {
    e.parentElement.setAttribute(
      "data-error",
      `${e.placeholder} cannot be empty`
    );
  }
  console.log(e.parentElement.getAttribute("data-error"));
});
