const _ = (className) => {
  return document.getElementsByClassName(className);
};

const noOfGridCells = 9;
let currentPlayer = "x";
let players = [];
let winner = "";

const playerTurn = _("player-turn")[0];
const gameChoices = _("game-choices-marks")[0];
const gameCompetitorChoices = _("game-competitor-choices")[0];
const playGrid = _("play-grid")[0];
let gridCell = { x: [], o: [] };
const winningCombinations = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];
let winCountX = 0;
let winCountO = 0;
let winCountTies = 0;

/******************************/
/* HOME PAGE */
/******************************/
/******************************/
/* GAME PAGE */
/******************************/

// Making of grid cells
const makeGridCells = () => {
  for (let i = 0; i < noOfGridCells; i++) {
    const gridCell = document.createElement("div");
    gridCell.setAttribute("class", "play-grid-cell");
    gridCell.setAttribute("data-cell-num", i);
    playGrid.appendChild(gridCell);
  }
};

addEventListener("DOMContentLoaded", () => {
  makeGridCells();
  gameSetup();
});

// Game Logic
const updatePlayerTurnContent = () => {
  playGrid.className = `play-grid-${currentPlayer} play-grid`;
  playerTurn.textContent = currentPlayer;
};

const toggleCurrentPlayer = () => {
  currentPlayer = currentPlayer === "x" ? "o" : "x";
  updatePlayerTurnContent();
};

const addActive = (cell) => {
  cell.target.classList.add(`active-${currentPlayer}`);
  gridCell[currentPlayer].push(cell.target.getAttribute("data-cell-num"));
  checkForWinner();
  toggleCurrentPlayer();
};

const gameSetup = () => {
  updatePlayerTurnContent();
  Array.from(playGrid.children).forEach((cell) => {
    cell.addEventListener("click", addActive, cell);
  });
};

// Winning Check
const checkForWinner = () => {
  let res = winningCombinations.some((arr, index) => {
    let isWon =
      arr.every((num) => {
        winner = "x";

        _("score-x")[0].textContent = winCountX;
        return gridCell.x.includes(num);
      }) ||
      arr.every((num) => {
        winner = "o";

        _("score-o")[0].textContent = winCountO;
        return gridCell.o.includes(num);
      });
    if (isWon) {
      arr.forEach((el) => {
        const winCells = document.querySelectorAll(
          `.play-grid-cell[data-cell-num='${el}']`
        );
        Array.from(winCells).forEach((cell) => {
          cell.classList.add(`win-${currentPlayer}`);
        });
      });
    }
    return isWon;
  });

  if (res) {
    if (currentPlayer === "x") {
      winCountX++;
      _(`score-x`)[0].textContent = winCountX;
    } else {
      winCountO++;
      _(`score-o`)[0].textContent = winCountO;
    }
  }
  if (gridCell.x.length >= 5 && gridCell.o.length >= 4 && res === false) {
    winner = "";
    winCountTies++;
    _("score-ties")[0].textContent = winCountTies;
    res = "draw";
  }
};

///////////////////////////////////////

const markSelected = (mark) => {
  mark.classList.add("selected");
  //   player1 = mark.textContent;
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
