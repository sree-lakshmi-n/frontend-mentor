`use strict`;
const firstName = document.querySelector(".first-name");
const lastName = document.getElementsByClassName("last-name")[0];
const mailId = document.getElementsByClassName("mail-id")[0];
const passWord = document.getElementsByClassName("pwd")[0];
const submitBtn = document.getElementsByClassName("submit-btn")[0];

// Checking if input values are empty
const isEmpty = (str) => {
  return !str.trim().length;
};

// const inputs = [firstName, lastName, mailId, passWord];
// inputs.forEach((e) => {
//   if (isEmpty(e.value)) {
//     e.parentElement.setAttribute(
//       "data-error",
//       `${e.placeholder} cannot be empty`
//     );
//   }
//   console.log(e.parentElement.getAttribute("data-error"));
// });

const regName = /^[a-zA-Z ]{2,30}$/g;
const regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
const minPwdLen = 8;

const validateInputs = (arg, type) => {
  const res = "";
  if (isEmpty(arg)) res = "cannot be empty";
  else if (
    (type === "name" && regName.test(arg)) ||
    (type === "mail" && regMail.test(arg)) ||
    type === "pwd"
  )
    res = "";
  else res = "is not valid";
};

submitBtn.addEventListener("click", (e) => {});
