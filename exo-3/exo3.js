// you can write js here
console.log("exo-3");

let playerInput = prompt("Your choice ( rock, paper, scissors) ?");

function getPlayerChoice(playerInput) {
  playerInput = playerInput.toLowerCase();

  if (
    playerInput === "rock" ||
    playerInput === "paper" ||
    playerInput === "scissors"
  ) {
    return playerInput;
  } else {
    // errorChoice = prompt("Enter only one choice ( rock, paper, scissors) ?");
    console.log("Error of choice word");
  }

  //return minusLetters;
  // console.log(minusLetters);
}

function getComputerChoice() {
  choiceComputer = Math.floor(Math.random() * 3);

  if (choiceComputer === 0) {
    // console.log(choiceComputer);
    return (choiceComputer = "rock");
  } else if (choiceComputer === 1) {
    // console.log(choiceComputer);
    return (choiceComputer = "paper");
  } else if (choiceComputer === 2) {
    // console.log(choiceComputer);
    return (choiceComputer = "scissors");
  }
}

function findWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tied";
  }

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return "Win";
    } else {
      return "Loose";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "Win";
    } else {
      return "Loose";
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "Win";
    } else {
      return "Loose";
    }
  }
}

function playGame() {
  let uChoice = getPlayerChoice(playerInput);
  let computerChoice = getComputerChoice();

  console.log("Ordinateur: " + computerChoice);
  console.log("Vous: " + uChoice);

  console.log(findWinner(uChoice, computerChoice));
}

//getPlayerChoice(playerInput);
//console.log(playerInput);

//getComputerChoice();
//findWinner("scissors","rock");
playGame();
