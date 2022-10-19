const _ = (className) => {
  return document.getElementsByClassName(className);
};

const noOfGridCells = 9;

const makeGridCells = () => {
  const playGrid = _("play-grid")[0];
  for (let i = 0; i < noOfGridCells; i++) {
    const gridCell = document.createElement("div");
    gridCell.setAttribute("class", "play-grid-cell");
    gridCell.setAttribute("data-cell-num", i + 1);
    playGrid.appendChild(gridCell);
  }
};

addEventListener("DOMContentLoaded", makeGridCells);
