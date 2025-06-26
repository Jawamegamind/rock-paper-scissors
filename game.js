// console.log("Hello, World!")

// Functional rock paper scissors game where the computer generates it's choice randombly

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

//Function for getting the human's choice to play the game
function getHumanChoice() {
    // Using the prompt method to get the human choice
    let humanChoice;

    // Keep asking until a valid input is given
    while (true) {
        humanChoice = prompt("Please enter your choice as a number between 0 and 2 (0: Rock, 1: Paper, 2: Scissors):");

        // Convert to number
        humanChoice = Number(humanChoice);

        // Check if it's a valid number between 0 and 2
        if (humanChoice === 0 || humanChoice === 1 || humanChoice === 2) {
            break; // Valid input, exit loop
        } else {
            alert("Incorrect choice, please try again!");
        }
    }

    // console.log("Human entered the number", humanChoice);

    if (humanChoice == 0){
        return "rock"
    }
    else if (humanChoice == 1) {
        return "paper"
    }
    else if (humanChoice == 2) {
        return "scissor"
    }
}

// Creating the function which plays 5 rounds of the game
function playGame() {
    // Creating the function which runs a round of the game
    function playRound(humanChoice, computerChoice) {
        // Playing a round using the human and computer choices and updating the score for the winner
        
        // 9 possible combos in total
        // First dealing with tie breakers when both are the same
        if ((humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "paper") || (humanChoice == "scissor" && computerChoice == "scissor")) {
            console.log("Tiebreaker! No one wins!")
        }
        else {
            // Now dealing with the other six scenarios
            if ((humanChoice == "rock" && computerChoice == "scissor") || (computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "scissor")) {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore += 1
            }
            else if ((computerChoice == "rock" && humanChoice == "scissor") || (humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissor")) {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore += 1
            }
        }
    } 

    // Now we essentially call the playRound function in a loop for 5 times
    for (let i=0; i <= 5; i++) {
        // First generate the human and computer choices 
        let humanSelection = getHumanChoice();
        console.log("Human choice is", humanSelection)
        let computerSelection = getComputerChoice();
        console.log("Computer choice is", computerSelection)

        // After generation of choices just pass them to the playRound function
        playRound(humanSelection, computerSelection)

        // Printing the scores after the rounds
        console.log("Your score after ", i+1 , " rounds is ", humanScore)
        console.log("The computer score after ", i+1 , " rounds is ", computerScore)
    }

    // At the end of the rounds print the winner of the game
    if (computerScore > humanScore) {
        console.log("You lose! Try again next time")
    }
    else if (humanScore > computerScore) {
        console.log("You win! Congratulations!")
    }
    else {
        // Score is tied
        console.log("You tied with the computer! Try to beat it next time!")
    }
}

playGame()