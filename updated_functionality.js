// Javascript code accompanying the rock paper scissors game

// Declaring the global variables to keep track of the player scores
let humanScore = 0
let computerScore = 0

// Selecting all the items with the options selector
const gameOptions = document.querySelectorAll(".options")
// Adding an event listener to listen for clicks on the game options
gameOptions.forEach(option => {
  option.addEventListener("click", () => {
    const playerChoice = option.dataset.choice;
    console.log("Player chose:", playerChoice);
    // TODO: Trigger game logic here
  });
});