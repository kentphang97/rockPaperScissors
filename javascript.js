let humanScore = 0;
let computerScore = 0;

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
  console.log(`Computer Choose ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Please Choose Your Move!");
  console.log(`Player Choose ${humanChoice}`);
  return humanChoice;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let stringCheck = humanChoice.toLowerCase();

  const playerScoreOutput = document.querySelector("#player");
  const computerScoreOutput = document.querySelector("#computer");
  playerScoreOutput.textContent = humanScore;
  computerScoreOutput.textContent = computerScore;

  const log = document.querySelector(".log");

  if (stringCheck === "rock") {
    if (computerChoice === "rock") {
      log.textContent = "It is a Draw!";
    } else if (computerChoice === "paper") {
      log.textContent = "You Lose! Paper Beats Rock!";
      computerScore++;
    } else if (computerChoice === "scissors") {
      log.textContent = "You Win! Rock Beats Scissors!";
      humanScore++;
    }
  }

  if (stringCheck === "paper") {
    if (computerChoice === "paper") {
      log.textContent = "It is a Draw!";
    } else if (computerChoice === "scissors") {
      log.textContent = "You Lose! Scissors Beats Paper!";
      computerScore++;
    } else if (computerChoice === "rock") {
      log.textContent = "You Win! Paper Beats Rock!";
      humanScore++;
    }
  }

  if (stringCheck === "scissors") {
    if (computerChoice === "scissors") {
      log.textContent = "It is a Draw!";
    } else if (computerChoice === "rock") {
      log.textContent = "You Lose! Rock Beats Scissors!";
      computerScore++;
    } else if (computerChoice === "paper") {
      log.textContent = "You Win! Scissors Beats Paper!";
      humanScore++;
    }
  }
  console.log(
    `Current Score of Player : ${humanScore} /n Current Score Of Computer : ${computerScore}`
  );
}
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playRound("rock");
});

paper.addEventListener("click", () => {
  playRound("paper");
});

scissors.addEventListener("click", () => {
  playRound("scissors");
});
