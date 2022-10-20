const _ = (className) => {
  return document.getElementsByClassName(className);
};

const noOfGridCells = 9;
let currentPlayer = "X";
let players = [];

const playerTurn = _("player-turn")[0];
const gameChoices = _("game-choices-marks")[0];
const gameCompetitorChoices = _("game-competitor-choices")[0];
const playGrid = _("play-grid")[0];

// Making of grid cells
const makeGridCells = () => {
  for (let i = 0; i < noOfGridCells; i++) {
    const gridCell = document.createElement("div");
    gridCell.setAttribute("class", "play-grid-cell");
    gridCell.setAttribute("data-cell-num", i + 1);
    playGrid.appendChild(gridCell);
  }
};

addEventListener("DOMContentLoaded", () => {
  makeGridCells();
  gameSetup();
});

// Game Logic

///////////////////////////////////////
const gameSetup = () => {
  playerTurn.textContent = currentPlayer;
  gameMarkChoice();
};

const markSelected = (mark) => {
  mark.classList.add("selected");
  player1 = mark.textContent;
};

const removeSelected = () => {
  Array.from(gameChoices.children).forEach((mark) => {
    mark.classList.remove("selected");
  });
};

const gameMarkChoice = () => {
  Array.from(gameChoices.children).forEach((mark) => {
    mark.addEventListener("click", () => {
      removeSelected(gameChoices);
      markSelected(mark);
    });
  });
};

// Game Competitor Choice

const playVsCPU = () => {
  gameType = "CPU";
};

const gameCompetitorChoice = () => {
  _("game-competitor-choices-cpu")[0].addEventListener("click", playVsCPU);
  _("game-competitor-choices-player")[0].addEventListener(
    "click",
    playVsPlayer
  );
};
