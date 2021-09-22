let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true;
  })
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = '';
  
  if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
  (playerSelection === 'scissors' && computerSelection === 'paper') || 
  (playerSelection === 'paper' && computerSelection === 'rock')) {
    
    humanScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}. <br><br> Player score: ${humanScore} <br> Computer score: ${computerScore}`;

    if (humanScore === 5) {
      result += `<br><br>You won the game! Reload the page to play again.`
      disableButtons();
    }
  }
  else if (playerSelection === computerSelection) {
    result = `It's a tie. You both chose ${playerSelection}. <br><br> Player score: ${humanScore} <br> Computer score: ${computerScore}`;
  }
  else {
    computerScore++;
    result = `You lose! ${playerSelection} beats ${computerSelection}. <br><br> Player score: ${humanScore} <br> Computer score: ${computerScore}`;

    if (computerScore === 5) {
      result += `<br><br>You lost the game! Reload the page to play again.`
      disableButtons();
    }
  }

  document.getElementById('result').innerHTML = result
  return
}

buttons.forEach(button =>{
  button.addEventListener('click', function(){
    playRound(button.value)
  })
})





