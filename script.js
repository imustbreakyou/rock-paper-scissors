
const displayComputerChoice = document.querySelector("#computer-choice");
const displayUserChoice = document.querySelector("#user-choice");
const displayRoundOutcome = document.querySelector("#round-outcome");
const displayUserWins = document.querySelector("#user-wins");
const displayComputerWins= document.querySelector("#computer-wins");
const gameOver = document.querySelector("#game-over");

let gameOutcome = document.querySelector("#game-outcome");

let userWinCounter = 0;
let computerWinCounter = 0;


document.getElementById('rock').addEventListener('click', function() {
    playRound(this.id);
});
document.getElementById('paper').addEventListener('click', function() {
    playRound(this.id);
});
document.getElementById('scissors').addEventListener('click', function() {
    playRound(this.id);
});




function randomNumber () {
    let n = 3; 
    let result = Math.floor(Math.random() * n);
    console.log(result)
    return result;
}


function getComputerChoice () {
    let randomNum= randomNumber()
    console.log("computer's number:", randomNum);

    let computerChoice;

    if (randomNum === 0) {
        computerChoice = 'rock';
    } else if (randomNum === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    console.log("computer's choice:", computerChoice);
    displayComputerChoice.textContent = "Computer Choice: " + computerChoice;
    return computerChoice;
    
}

function playRound(choice) {
    let userChoice = choice;
    displayUserChoice.textContent = "User Choice: " + userChoice;
    let computerChoice = getComputerChoice();
    let outcome;

    if (userChoice == computerChoice) {
        outcome = 'tie!';
        displayRoundOutcome.textContent = "Round Outcome: " + outcome;
        
    } else if (userChoice == 'rock' && computerChoice == 'scissors' || userChoice == 'paper' && computerChoice == 'rock' ||userChoice == 'scissors' && computerChoice == 'paper') {
        outcome = 'User Win!';
        userWinCounter++;
        displayUserWins.textContent = "Total User Wins: " + userWinCounter;
        displayRoundOutcome.textContent = "Round Outcome: " + outcome;
    } else {
        outcome = 'Computer Win!';
        computerWinCounter++;
        displayComputerWins.textContent = "Total Computer Wins: " + computerWinCounter;
        displayRoundOutcome.textContent = "Round Outcome: " + outcome;
    }       

    
    if (computerWinCounter == 5 || userWinCounter == 5) {

        gameOver.textContent = "Game Over!";
        if (computerWinCounter > userWinCounter) {
            winner = "computer wins!";
            gameOutcome.textContent = winner;
            
            

        } else {
            winner = "user wins!"
            gameOutcome.textContent = winner;
            
        }
        
    }
    console.log("user choice: ", userChoice, " computer Choice:", computerChoice);
     
}