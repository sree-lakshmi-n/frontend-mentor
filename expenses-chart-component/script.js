`use strict`;
const _ = (e) => {
  return document.getElementsByClassName(e)[0];
};
const week = _("spending-weekly-metrics");

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
days.forEach((day) => {
  const dayContainer = document.createElement("div");
  dayContainer.className = `${day}-container`;
  week.appendChild(dayContainer);
});
