let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

const scoreMessage = document.querySelector(".score-message");
const playerSign = document.querySelector("#player-sign");
const computerSign = document.querySelector("#computer-sign");
const uiPlayerScore = document.querySelector("#player-score");
const uiComputerScore = document.querySelector("#computer-score");

function getComputerChoice() {
  let computerChoice = "";
  const probabiltiy = Math.random();
  //Rock is less than 1/3  Scissors is More than 1/3 less than 2/3  paper is more than 2/3

  if (probabiltiy < 1 / 3 && probabiltiy >= 0) {
    computerChoice = "rock";
  } else if (probabiltiy >= 1 / 3 && probabiltiy < 2 / 3) {
    computerChoice = "scissors";
  } else if (probabiltiy > 2 / 3 && probabiltiy <= 1) {
    computerChoice = "paper";
  }
  return computerChoice;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    roundWinner = "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    roundWinner = "player";
    playerScore++;
  } else {
    roundWinner = "computer";
    computerScore++;
  }

  updateScoreMessage(roundWinner, humanChoice, computerChoice);
  uiUpdateScore();
  compareScore();
}

function compareScore() {
  if (playerScore === 5) {
    scoreMessage.textContent = `Player Wins The Game!!`;
  } else if (computerScore === 5) {
    scoreMessage.textContent = `Computer Wins The Game!`;
  }
}

function resetScore() {
  humanScore = 0;
  computerScore = 0;
  uiPlayerScore.textContent = `Player : ${humanScore}`;
  uiComputerScore.textContent = `Computer : ${computerScore}`;
  scoreMessage.textContent = `First To Score 5 Points Win!`;
  playerSign.textContent = "❔";
  computerSign.textContent = "❔";
}

function updateScoreMessage(winner, humanChoice, computerChoice) {
  if (winner === "tie") {
    scoreMessage.textContent = `It's a tie!`;
  } else if (winner === "player") {
    scoreMessage.textContent = `You win!`;
  } else {
    scoreMessage.textContent = `You lose!`;
  }

  switch (humanChoice) {
    case "rock":
      playerSign.textContent = "✊";
      break;
    case "paper":
      playerSign.textContent = "✋";
      break;
    case "scissors":
      playerSign.textContent = "✌️";
      break;
  }

  switch (computerChoice) {
    case "rock":
      computerSign.textContent = "✊";
      break;
    case "paper":
      computerSign.textContent = "✋";
      break;
    case "scissors":
      computerSign.textContent = "✌️";
      break;
  }
}

function uiUpdateScore() {
  uiPlayerScore.textContent = `Player : ${playerScore}`;
  uiComputerScore.textContent = `Computer : ${computerScore}`;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector("#resetScore");

rock.addEventListener("click", () => {
  playRound("rock");
});

paper.addEventListener("click", () => {
  playRound("paper");
});

scissors.addEventListener("click", () => {
  playRound("scissors");
});

reset.addEventListener("click", resetScore);
