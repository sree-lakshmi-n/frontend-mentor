`use strict`;
const _ = (e) => {
  return document.getElementsByClassName(e);
};
const week = _("spending-weekly-metrics");

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
days.forEach((day) => {
  const dayContainer = document.createElement("div");

  dayContainer.className = `day-container ${day}-container`;
  week[0].appendChild(dayContainer);
});

const dayContainers = _(`day-container`);
Array.from(dayContainers).forEach((dayContainer, index) => {
  const dayGraph = document.createElement("div");
  const dayLabel = document.createElement("span");
  dayGraph.className = `day-graph ${days[index]}-graph`;
  dayLabel.className = `day-label ${days[index]}-label`;
  dayLabel.textContent = days[index];
  dayContainer.appendChild(dayGraph);
  dayContainer.appendChild(dayLabel);
});
