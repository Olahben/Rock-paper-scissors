//Return randomly either rock paper or scissors.
function getComputerChoice() {
    const randomNum = Math.floor(Math.random()* 99) + 1;
    if(randomNum <= 33) {
     return 'rock'
    } else if(randomNum <= 66 && randomNum > 33) {
     return 'paper'
    } else {
     return 'scissors'
    }
 }
 
 //console.log(getComputerChoice());

let computerPoints = 0;
let playerPoints = 0;


function playRound(playerSelection, computerSelection) { // function that plays a single round of Rock paper scissors
    //playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) {//Comparison of the computer selection and player selection
        return 'Its a tie';
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerPoints++//Add a point to the player who won that round
        return 'You lost, rock does not beat paper'; // Return a statement based on that comparison
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerPoints++
        return 'You won, rock beats scissors';
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        computerPoints++
        return 'You lost, paper does not beat scissors';
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerPoints++
        return 'You won, paper beats rock';
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        computerPoints++ 
        return 'You lost, scissors does not beat rock';
    }else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerPoints++
        return 'You won, scissors beats paper';
    } else {
        return 'A fatal error has ocurred'
    }
    } 