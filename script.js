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



function playRound(playerSelection, computerSelection) { // function that plays a single round of Rock paper scissors
    //playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) {//Comparison of the computer selection and player selection
         result.textContent = 'It\'s a tie'
         if(userScore.textContent == 5) {
            result.textContent = 'You won Hooray! ...'
            return;
        } 

        if(computerScore.textContent == 5) {
            result.textContent = 'You lost :(.'
            return;
        }
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore.textContent++;//Add a point to the player who won that round
          result.textContent = 'You lost, rock does not beat paper'; // Return a statement based on that comparison
          if(userScore.textContent == 5) {
            result.textContent = 'You won Hooray! ...'
            return;
        } 

        if(computerScore.textContent == 5) {
            result.textContent = 'You lost :(.'
            return;
        }
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        userScore.textContent++;
        result.textContent = 'You won, rock beats scissors';
        if(userScore.textContent == 5) {
            result.textContent = 'You won Hooray! ...'
            return;
        } 

        if(computerScore.textContent == 5) {
            result.textContent = 'You lost :(.'
            return;
        }
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore.textContent++;
        result.textContent = 'You lost, paper does not beat scissors';
        if(userScore.textContent == 5) {
            result.textContent = 'You won Hooray! ...'
            return;
        } 

        if(computerScore.textContent == 5) {
            result.textContent = 'You lost :(.'
            return;
        }
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        userScore.textContent++;
        result.textContent = 'You won, paper beats rock';
        if(userScore.textContent == 5) {
            result.textContent = 'You won Hooray! ...'
            return;
        } 

        if(computerScore.textContent == 5) {
            result.textContent = 'You lost :(.'
            return;
        }
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore.textContent++; 
        result.textContent = 'You lost, scissors does not beat paper.';
        if(userScore.textContent == 5) {
            result.textContent = 'You won Hooray! ...'
            return;
        } 

        if(computerScore.textContent == 5) {
            result.textContent = 'You lost :(.'
            return;
        }
    }else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        userScore.textContent++;
        result.textContent = 'You won, scissors beats paper';
        if(userScore.textContent == 5) {
            result.textContent = 'You won Hooray! ...'
            return;
        } 

        if(computerScore.textContent == 5) {
            result.textContent = 'You lost :(.'
            return;
        }
    } else {
        result.textContent = 'A fatal error has ocurred';
    }
    } 


    function game() {
        for(let i = 0; i < 5; i++) {
            //const playerSelection = prompt('Choose a weapon, rock, paper or scissors').toLowerCase(); // get PlayerSelection
                                                                            // make playerSelection case insensetive
            //const computerSelection = getComputerChoice(); //Get computerSelection
            //console.log(playRound(playerSelection, computerSelection)); //Call the playRound function 5 times
            //console.log('Computer points:' + computerPoints);// log computerPoints
            //console.log('Your points:' + playerPoints);//log playerPoints
        }
        if(computerPoints > playerPoints) { //Report a winner or looser
            result.textContent = 'The computer won.'
        } else if(playerPoints > computerPoints) {
            result.textContent = 'You won! Hooray...'
        }
            
    }
    game();
    
const buttons = document.querySelectorAll('button')
    console.log(buttons)

const rock = document.querySelector('.rock')
    console.log(rock)

const paper = document.querySelector('.paper')
    console.log(paper)

const scissors = document.querySelector('.scissors')
    console.log(scissors)

rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
    
});

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
});

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
});

const result = document.querySelector('.result')
const userScore = document.querySelector('.user-score')
const computerScore = document.querySelector('.computer-score');


//console.log(computerScore.textContent)