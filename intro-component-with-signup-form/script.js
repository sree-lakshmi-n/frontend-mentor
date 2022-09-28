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

/*
const regFirstName = /^[a-zA-Z ]{2,30}$/g;
const regLastName = /^[a-zA-Z ]{0,30}$/g;
const regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
const minPwdLen = 8;

const validateInputs = (arg, grp) => {
  console.log();
  console.log();
  let res = "not valid";
  if (isEmpty(arg)) {
    res = "cannot be empty";
  } else if (grp === "pwd" && arg.length <= 7) {
    res = "should have more than 7 characters";
  } else if (
    (grp === "fname" && regFirstName.test(arg)) ||
    (grp === "lname" && regLastName.test(arg)) ||
    (grp === "mailid" && regMail.test(arg)) ||
    (grp === "pwd" && arg.length > 7)
  )
    res = "valid";

  return res;
};

submitBtn.addEventListener("click", (e) => {
  //   console.log(firstName.value, lastName.value);
  const fname = validateInputs(firstName.value, "fname");
  const lname = validateInputs(lastName.value, "lname");
  const mail = validateInputs(mailId.value, "mailid");
  const pwd = validateInputs(passWord.value, "pwd");
  console.log(fname, lname, mail, pwd);
});
*/
