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
        return x = "rock" ;
    }
    else if ( x === "paper") {
        return x = "paper" ;
    }
    else if ( x === "scissors") {
        return x = "scissors" ;
    }
    else {
        return ("You have to choose between rock paper scissors");
    }
}

function playRound (playerSelection, computerSelection) {
    if ( playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return ("You Lose! Paper beats Rock")  ;    
    }
    else if ( playerSelection ==="rock" && computerSelection === "scissors") {
        playerScore++
        return ("You Win! Rock beats Scissors") ; 
    }
    else if ( playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return ("You Win! Paper beats Rock") ;
    }
    else if ( playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return ("You Lose! Scissors beats Paper") ;
    }
    else if ( playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return ("You Lose! Rock beats Scissors") ;
    }
    else if ( playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return ("You Win! Scissors beats Paper") ;
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
        console.log(playerScore, computerScore)
    }
}
function gameEnd () {
    if (playerScore > computerScore) {
        return ("You won!")
    }
    else if (playerScore < computerScore) {
        return ("You lost! Computer won! ")
    }
    else if ( playerScore === computerScore ) {
        return ("Tie!")
    }
}


game ()