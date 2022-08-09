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


