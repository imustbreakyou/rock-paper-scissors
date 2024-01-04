

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

    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    console.log("computer's choice:", computerChoice);
    return computerChoice;
    
}

function playRound(choice) {
    let userChoice = choice;
    let computerChoice = getComputerChoice();
    console.log("user choice: ", userChoice, " computer Choice:", computerChoice)
}
