function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors?");
}

let humanScore = 0; // Set humanScore variable
let computerScore = 0; // Set computerScore

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win this round!  Your score is: ${humanScore}`;
  } else {
    computerScore++;
    return `You lost this round.  Computer won.  Scores are as follows: You (${humanScore}) / Computer (${computerScore})`;
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));
