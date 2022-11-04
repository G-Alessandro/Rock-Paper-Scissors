let playerScore = 0;
let computerScore = 0 ;
const rockButton = document.querySelector('.btn-rock') ;
const paperButton = document.querySelector('.btn-paper') ;
const scissorsButton = document.querySelector('.btn-scissors');
const roundResult = document.querySelector('.round-result');
const result = document.querySelector('.result');
const score = document.querySelector('.score');

const finalResult = document.createElement('h2');
result.appendChild(finalResult);

function getComputerChoice () {
    let arrayRPS = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3);
    return arrayRPS [randomNumber];
}

function playRound (playerSelection, computerSelection) {
    if ( playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        roundResult.innerText = "You Lose! Paper beats Rock"; 
    }
    else if ( playerSelection ==="rock" && computerSelection === "scissors") {
        playerScore++
        roundResult.innerText = "You Win! Rock beats Scissors"; 
    }
    else if ( playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        roundResult.innerText = "You Win! Paper beats Rock";
    }
    else if ( playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        roundResult.innerText = "You Lose! Scissors beats Paper";
    }
    else if ( playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        roundResult.innerText = "You Lose! Rock beats Scissors";
    }
    else if ( playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        roundResult.innerText = "You Win! Scissors beats Paper";
    }
    else if ( playerSelection === computerSelection ) {
        roundResult.innerText = `It's a tie! You both picked 
        ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()}`;
    }
    score.innerText = `Player Score ${playerScore} Computer Score ${computerScore}`;
}

function gameEnd (playerScore, computerScore) {
    if (playerScore === 5) {
        finalResult.innerText = "You won the game!";
    }
    else if (computerScore === 5) {
        finalResult.innerText = "You lost! Computer won the game!";
    }
}

rockButton.addEventListener('click', function (){
    playerSelection = "rock";
    computerSelection = getComputerChoice ();
    playRound (playerSelection, computerSelection);
    gameEnd (playerScore, computerScore);
})

paperButton.addEventListener('click', function (){
    playerSelection = "paper";
    computerSelection = getComputerChoice ();
    playRound (playerSelection, computerSelection);
    gameEnd (playerScore, computerScore);
})

scissorsButton.addEventListener('click', function (){
    playerSelection = "scissors";
    computerSelection = getComputerChoice ();
    playRound (playerSelection, computerSelection);
    gameEnd (playerScore, computerScore);
})