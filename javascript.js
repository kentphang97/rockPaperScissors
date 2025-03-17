
let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
  let computerChoice ="";
  const probabiltiy = Math.random();
  //Rock is less than 1/3  Scissors is More than 1/3 less than 2/3  paper is more than 2/3

  if(probabiltiy <1/3 && probabiltiy>=0)
  {
    computerChoice = "rock";
  }

  else if (probabiltiy >= 1/3 && probabiltiy < 2/3)
  {
    computerChoice = "scissors"
  }
  else if (probabiltiy >2/3 && probabiltiy <=1)
  {
    computerChoice = "paper";
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

function playRound(humanChoice,computerChoice)
{
  let stringCheck = humanChoice.toLowerCase();

  if (stringCheck === "rock")
  {
    if (computerChoice === "rock")
    {
      console.log("It is a Draw!")
    }

    else if (computerChoice ==="paper")
    {
      console.log("You Lose! Paper Beats Rock!")
      computerScore++;
    }

    else if (computerChoice ==="scissors")
    {
      console.log("You Win! Rock Beats Scissors!")
      humanScore++;
    }
  }

  if (stringCheck === "paper")
    {
      if (computerChoice === "paper")
      {
        console.log("It is a Draw!")
      }
  
      else if (computerChoice ==="scissors")
      {
        console.log("You Lose! Scissors Beats Paper!")
        computerScore++;
      }
  
      else if (computerChoice ==="rock")
      {
        console.log("You Win! Paper Beats Rock!")
        humanScore++;
      }
    }

    if (stringCheck === "scissors")
      {
        if (computerChoice === "scissors")
        {
          console.log("It is a Draw!")
        }
    
        else if (computerChoice ==="rock")
        {
          console.log("You Lose! Rock Beats Scissors!")
          computerScore++;
        }
    
        else if (computerChoice ==="paper")
        {
          console.log("You Win! Scissors Beats Paper!")
          humanScore++;
        }
      }

      console.log(`Current Score of Player : ${humanScore} /n Current Score Of Computer : ${computerScore}`);
}

const humanPlayer = getHumanChoice();
const computer = getComputerChoice();
playRound(humanPlayer,computer);
playRound(humanPlayer,computer);
playRound(humanPlayer,computer);
playRound(humanPlayer,computer);
playRound(humanPlayer,computer);