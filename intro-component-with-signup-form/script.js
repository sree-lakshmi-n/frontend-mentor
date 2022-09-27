`use strict`;
const firstName = document.querySelector(".first-name");
const lastName = document.getElementsByClassName("last-name")[0];
const mailId = document.getElementsByClassName("mail-id")[0];
const passWord = document.getElementsByClassName("pwd")[0];
const submitBtn = document.getElementsByClassName("submit-btn")[0];

submitBtn.addEventListener("click", (e) => {
  console.log(firstName.value, lastName.value, mailId.value, passWord.value);
});
