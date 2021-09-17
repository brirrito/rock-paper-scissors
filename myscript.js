let humanWins = 0;
let computerWins = 0;
gameWinner = '';

let playerSelection = prompt(`Enter 'rock', 'paper', or 'scissors'.`);

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return `It's a tie! Score: ${humanWins}:${computerWins}`;
  }
  else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
    humanWins++;
    gameWinner = 'player';
    return `Player wins! ${playerSelection} beats ${computerSelection}! Score: ${humanWins}:${computerWins}`;
  }

  else {
    computerWins++;
    gameWinner = 'computer';
    return `You lose! ${computerSelection} beats ${playerSelection}. Score: ${humanWins}:${computerWins}`;
  }
}


for (let i = 0; i < 5 ; i++) {
  let playerSelection = prompt(`Enter 'rock', 'paper', or 'scissors'.`);
  let computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}





