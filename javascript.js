function getComputerChoice () {
    
    let x =  Math.floor(Math.random() * 3);
    
    if (x === 0) {
        return ("Rock!");
    }
    else if ( x === 1) {
        return ("Paper!");
    }
    else {
        return ("Scissors!");
    }
}

function playRound () {

    /*let x = prompt("Choose Rock Paper or Scissors");
    
    let Y = x;
    if (Y != rock || paper || scissors ) {
        return ("You have to choose between rock paper scissors");
    }
    else {

    }*/

    

    let rock = 0
    let paper = 1
    let scissors =2

    let playerSelection = 0

    let computerSelection = Math.floor(Math.random() * 3);

    
    if ( playerSelection === 0 & computerSelection === 1) {
        return ("You Lose! Paper beats Rock");
    }
    else if ( playerSelection === 0 & computerSelection === 2) {
        return ("You Win! Rock beats Scissors");
    }
    else if ( playerSelection === 1 & computerSelection === 0) {
        return ("You Win! Paper beats Rock");
    }
    else if ( playerSelection === 1 & computerSelection === 2) {
        return ("You Lose! Scissors beats Paper");
    }
    else if ( playerSelection === 2 & computerSelection === 0) {
        return ("You Lose! Rock beats Scissors");
    }
    else if ( playerSelection === 2 & computerSelection === 1) {
        return ("You Win! Scissors beats Paper");
    }
    else {
        return ("It's a tie!");
    }
}

console.log(playRound())