`use strict`;
const _ = (e) => {
  return document.getElementsByClassName(e)[0];
};
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
days.forEach((day) => {
  console.log(day);
});
console.log((_("spending-weekly-metrics").innerText = "Hi"));
