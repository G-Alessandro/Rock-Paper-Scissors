playerScore = 0
computerScore = 0

function getComputerChoice () {
    let arrayRPS = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3);
    return arrayRPS [randomNumber]
}

function getPlayerChoice () {
    let x = prompt("Choose Rock Paper or Scissors").toLowerCase();
   
    if ( x === "rock") {
        x = "rock" ;
    }
    else if ( x === "paper") {
        x = "paper" ;
    }
    else if ( x === "scissors") {
        x = "scissors" ;
    }
    else {
        return ("You have to choose between rock paper scissors");
    }
}

function playRound (playerSelection, computerSelection) {
    if ( playerSelection === "rock" && computerSelection === "paper") {
        return ("You Lose! Paper beats Rock") && computerScore++ ;    
    }
    else if ( playerSelection ==="rock" && computerSelection === "scissors") {
        return ("You Win! Rock beats Scissors") && playerScore++; 
    }
    else if ( playerSelection === "paper" && computerSelection === "rock") {
        return ("You Win! Paper beats Rock") && playerScore++;
    }
    else if ( playerSelection === "paper" && computerSelection === "scissors") {
        return ("You Lose! Scissors beats Paper") && computerScore++;
    }
    else if ( playerSelection === "scissors" && computerSelection === "rock") {
        return ("You Lose! Rock beats Scissors") && computerScore++;
    }
    else if ( playerSelection === "scissors" && computerSelection === "paper") {
        return ("You Win! Scissors beats Paper") && playerScore++;
    }
    else {
        return ("It's a tie!");
    }
}

function game () {
    for ( let i = 0; i < 5; i++ ) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice ();
        console.log(playRound ( playerSelection, computerSelection ))
    }
}

game()
console.log(playerScore, computerScore)