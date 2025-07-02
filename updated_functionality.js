// Javascript code accompanying the rock paper scissors game

// Declaring the global variables to keep track of the player scores
let humanScore = 0
let computerScore = 0

//Creating the function for the computer's choice
function getComputerChoice() {
    // Using the random function with the floor function to generate values between 0-2
    let val = Math.floor(Math.random()*3)

    // Now associating random value with rock, paper or scissor
    if (val == 0) {
        return "rock"
    }
    else if (val == 1) {
        return "paper"
    }
    else if (val == 2) {
        return "scissor"
    }

}

// Creating the function which runs a round of the game
// TO DO: Update this with DOM manipulation methods to display on the page instead of the console
    function playRound(humanChoice, computerChoice) {
        // Playing a round using the human and computer choices and updating the score for the winner
        
        // 9 possible combos in total
        // First dealing with tie breakers when both are the same
        if ((humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "paper") || (humanChoice == "scissor" && computerChoice == "scissor")) {
            console.log("Tiebreaker! No one wins!")
            return "Tiebreaker! No one wins!"
        }
        else {
            // Now dealing with the other six scenarios
            if ((humanChoice == "rock" && computerChoice == "scissor") || (computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "scissor")) {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore += 1
                return `You win! ${humanChoice} beats ${computerChoice}`
            }
            else if ((computerChoice == "rock" && humanChoice == "scissor") || (humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissor")) {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore += 1
                return `You lose! ${computerChoice} beats ${humanChoice}`
            }
        }
    }

// Selecting all the items with the options selector
const gameOptions = document.querySelectorAll(".options")
// Adding an event listener to listen for clicks on the game options
gameOptions.forEach(option => {
  option.addEventListener("click", () => {
    // Check for the presence of the start message
    const startMsg = document.querySelector("#starting-message");
    if (startMsg) {
        startMsg.remove(); // Remove the initial instructions
    }

    const humanChoice = option.dataset.choice;
    console.log("Human chose: ", humanChoice);
    // Now generate the computer's choice using the predefined function
    const computerChoice = getComputerChoice()
    console.log("Computer chosee: ", computerChoice)
    // Call the playRound function to play a round of the game using the human and computer choices
    let roundMsg = playRound(humanChoice, computerChoice)

    // Need to display the updated scores here using the dom
    // Fetch the human and computer scores respectively alongisde the parent div
    const scoreDiv = document.querySelector(".game-results")
    const humanPara = document.querySelector("#human-score")
    const computerPara = document.querySelector("#computer-score")
    const roundPara = document.querySelector("#round-result")

    // Now update the paragraph and the round message
    humanPara.textContent = `Your score is currently: ${humanScore}`
    computerPara.textContent = `The computer's score is currently: ${computerScore}`
    roundPara.textContent = roundMsg

    // Append these as children of the parent div
    scoreDiv.appendChild(humanPara)
    scoreDiv.appendChild(computerPara)
    scoreDiv.appendChild(roundPara)

    // Add a check to see if the score hits 5 for either player
    if (computerScore == 5) {
        // Computer wins game
        // Update the computer para text
        computerPara.textContent = `You lose! Try again next time`
        // Need to update the paragraph elements
        humanPara.remove()
        computerPara.remove()
        // Append as a new child of the div
        scoreDiv.appendChild(computerPara)

        // Reset the scores
        humanScore = 0
        computerScore = 0
    }
    else if (humanScore == 5) {
        // Human wins game
        // Update the human para text
        humanPara.textContent = `You win! Congratulations!`
        // Need to update the paragraph elements
        computerPara.remove()
        humanPara.remove()
        // Append as a new child of the div
        scoreDiv.appendChild(humanPara)

        // Reset the scores
        humanScore = 0
        computerScore = 0
    }
  });
});