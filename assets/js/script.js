// Define an array of options for the game
let options = ['paper', 'rock', 'scissors', 'spock', 'lizard'];
// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Wait for the DOM content to load before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Get all button elements
  let buttons = document.getElementsByTagName("button");

  // Attach click event listeners to each button
  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "reset") {
        resetGame();
      } else {
        playRound(this.id);
      }
    });
  }
});


// Function to play a round of the game
function playRound(playerChoice) {
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  let result = getResult(playerChoice, computerChoice);
  displayResult(result, playerChoice, computerChoice);
  updateScore(result);
}

// Function to determine the result of a round
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  } else if (
    (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (playerChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
    (playerChoice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock'))
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

// Function to display the result of a round
function displayResult(result, playerChoice, computerChoice) {
  let resultDisplay = document.getElementById('result');
  let message;
  if (result === 'win') {
    message = `You win! ${playerChoice} beat ${computerChoice}.`;
  } else if (result === 'lose') {
    message = `You lose! ${computerChoice} beat ${playerChoice}.`;
  } else {
    message = `Tie! Both of you choose ${playerChoice}.`;
  }
  resultDisplay.textContent = message;
}

// Function to update the scores
function updateScore(result) {
  let playerScoreDisplay = document.getElementById('player-score');
  let computerScoreDisplay = document.getElementById('computer-score');
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = '0';
  document.getElementById('computer-score').textContent = '0';
  document.getElementById('result').textContent = '';
}