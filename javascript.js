let playerScore = 0;
let computerScore = 0;
let choices = ['rock', 'paper', 'scissors'];
const winners =[];

function game() {
    for(let i=0; i<5; i++){
        playRound(i);
    }
    logWins();
}

function playRound(round){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner,round);
}

function getComputerChoice () {
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice () {
    let input = prompt('What is your choice?');
    while (input == null) {
        input = prompt('What is your choice?');
    } 
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        input = prompt('Please enter a valid selection of rock, paper, or scissors.');
    while (input == null){
        input = prompt('What is your choice?');
    }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function validateInput(selection){
    return choices.includes(selection);
}

function checkWinner(choiceP, choiceC){
    if(choiceP == choiceC){
        return 'Tie';
    } else if (
        (choiceP == 'rock' && choiceC == 'scissors') || 
        (choiceP == 'paper' && choiceC == 'rock') || 
        (choiceP == 'scissors' && choiceC == 'paper')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item => item == "Computer")).length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log('Results ----- ')
    console.log('Player wins:', playerWins);
    console.log('Computer wins:', computerWins);
    console.log('Ties', ties);
    if (playerWins > computerWins){
        console.log('Congrats! You won.');
    } else if (computerWins > playerWins){
        console.log('Better luck next time.')
    } else {
        console.log('You tied.. boring.');
    }

}

function logRound(playerChoice,getComputerChoice, winner){
    console.log('Player chose: ' , playerChoice);
    console.log('Computer chose: ', getComputerChoice);
    console.log(winner, 'is the result');
    console.log('-------');
}


