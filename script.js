function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return getRandomElement(options);
}

function capitalize(string) {
    return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
}

const div = document.querySelector("div");
div.style.whiteSpace = 'pre-line';

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "Rock") {
        if(computerSelection === "Scissors") {
            div.textContent = "You Win! Rock beats Scissors";
            return 1;
        } else if(computerSelection === "Paper") {
            div.textContent = "You Lose! Paper beats Rock";
        } else if(computerSelection === "Rock") {
            div.textContent = "Draw";
        }
        return 0;
    } else if(playerSelection === "Paper") {
        if(computerSelection === "Rock") {
            div.textContent = "You Win! Paper beats Rock";
            return 1;
        } else if(computerSelection === "Scissors") {
            div.textContent = "You Lose! Scissors beat Paper";
        } else if(computerSelection === "Paper") {
            div.textContent = "Draw" ;
        }
        return 0;
    } else if(playerSelection === "Scissors") {
        if(computerSelection === "Paper") {
            div.textContent = "You Win! Scissors beat Paper";
            return 1;
        } else if(computerSelection === "Rock") {
            div.textContent = "You Lose! Rock beats Scissors";
        } else if(computerSelection === "Scissors") {
            div.textContent = "Draw";
        }
        return 0;
    }
}

function game() {
    let playerTotalScore = 0;
    let computerTotalScore = 0;

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerSelection = capitalize(button.id);
            const computerSelection = capitalize(computerPlay());
            playerRoundScore = playRound(playerSelection, computerSelection);
            if(playerRoundScore === 1) {
                playerTotalScore++;
            }
            else if(playerSelection !== computerSelection) {
                computerTotalScore++;
            }
            div.textContent += `\nPlayer: ${playerTotalScore}\t\tComputer: ${computerTotalScore}`
            if(playerTotalScore === 5) {
                div.textContent += "\nYay! You won the game!";
                playerTotalScore = 0;
                computerTotalScore = 0;
            }
            else if (computerTotalScore === 5){
                div.textContent += "\nYou lost the game :(\nBetter luck next time.";
                playerTotalScore = 0;
                computerTotalScore = 0;
            }
        });
    });
}

game();