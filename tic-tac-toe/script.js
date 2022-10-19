const _ = (className) => {
  return document.getElementsByClassName(className);
};

const noOfGridCells = 9;
const playGrid = _("play-grid")[0];

const makeGridCells = () => {
  for (let i = 0; i < noOfGridCells; i++) {
    const gridCell = document.createElement("div");
    gridCell.setAttribute("class", "play-grid-cell");
    gridCell.setAttribute("data-cell-num", i + 1);
    playGrid.appendChild(gridCell);
  }
};

addEventListener("DOMContentLoaded", makeGridCells);
