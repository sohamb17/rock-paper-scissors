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

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "Rock") {
        if(computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        } else if(computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        }
    } else if(playerSelection === "Paper") {
        if(computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else if(computerSelection === "Scissors") {
            return "You Lose! Scissors beat Paper";
        }
    } else if(playerSelection === "Scissors") {
        if(computerSelection === "Paper") {
            return "You Win! Scissors beat Paper";
        } else if(computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        }
    }
    return "Draw";
}
