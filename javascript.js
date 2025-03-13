function getComputerChoice()
{
  let humanScore = 0;
  let computerScore = 0;
  let computerChoice ="";
  const probabiltiy = Math.random();
  //Rock is less than 1/3  Scissors is More than 1/3 less than 2/3  paper is more than 2/3

  if(probabiltiy <1/3 && probabiltiy>0)
  {
    computerChoice = "Rock";
  }

  else if (probabiltiy > 1/3 && probabiltiy < 2/3)
  {
    computerChoice = "Scissors"
  }
  else if (probabiltiy >2/3 && probabiltiy <1)
  {
    computerChoice = "Paper";
  }
  console.log(`Computer Choose ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice()
{
  let humanChoice = prompt("Please Choose Your Move!");
  console.log(`Player Choose ${humanChoice}`);
  return humanChoice;
  
}

function playRound(humanchoice,computerChoice)
{
  
}

const humanPlayer = getHumanChoice();
const computer = getComputerChoice();

playRound(humanPlayer,computer);