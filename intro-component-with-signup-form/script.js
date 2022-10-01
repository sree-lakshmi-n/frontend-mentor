`use strict`;
const class_ = (element) => {
  return document.getElementsByClassName(element);
};
const firstName = class_("first-name")[0];
const lastName = class_("last-name")[0];
const mailId = class_("mail-id")[0];
const passWord = class_("pwd")[0];
const submitBtn = class_("submit-btn")[0];
const inputBoxes = class_("input-box");
const inputs = [firstName, lastName, mailId, passWord];

// Resetting data-error attribute values
const resetDataErr = () => {
  inputs.forEach((e) => {
    e.parentElement.setAttribute("data-error", ``);
    e.parentElement.classList.remove("error");
  });
};
// Checking if input values are empty
const isEmpty = () => {
  inputs.forEach((e) => {
    if (e.value.trim().length <= 0) {
      e.parentElement.setAttribute(
        "data-error",
        `${e.placeholder} cannot be empty`
      );
    }
  });
};

// Input validation
const regName = /^[a-zA-Z]+((['. ][a-zA-Z ])?[a-zA-Z]*)*$/;
const regMail = /^\w*(\-\w)?(\.\w*)?@\w+\.\w{2,3}(\.\w{2,3})?/;
const regPwd = /^[A-Za-z0-9]{8,11}/;

const validateInputs = () => {
  if (!regName.test(firstName.value)) {
    firstName.parentElement.setAttribute("data-error", "First Name is invalid");
  }
  if (!regName.test(lastName.value)) {
    lastName.parentElement.setAttribute("data-error", "Last Name is invalid");
  }
  if (!regMail.test(mailId.value)) {
    mailId.parentElement.setAttribute("data-error", "Email id is invalid");
  }
  if (passWord.value.length < 8 || passWord.value.length > 11) {
    passWord.parentElement.setAttribute(
      "data-error",
      `Password should have 8-11 letters`
    );
  } else if (!regPwd.test(passWord.value)) {
    passWord.parentElement.setAttribute(
      "data-error",
      `Password should not have special characters`
    );
  }
};
const validate = () => {
  resetDataErr();
  validateInputs();
  isEmpty();
  Array.from(inputBoxes).forEach((e) => {
    if (e.getAttribute("data-error")) {
      e.classList.add("error");
    }
  });
};
submitBtn.addEventListener("click", validate);

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
