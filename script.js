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
            console.log("You Win! Rock beats Scissors");
            return 1;
        } else if(computerSelection === "Paper") {
            console.log("You Lose! Paper beats Rock");
        } else if(computerSelection === "Rock") {
            console.log("Draw");
        }
        return 0;
    } else if(playerSelection === "Paper") {
        if(computerSelection === "Rock") {
            console.log("You Win! Paper beats Rock");
            return 1;
        } else if(computerSelection === "Scissors") {
            console.log("You Lose! Scissors beat Paper");
        } else if(computerSelection === "Paper") {
            console.log("Draw");
        }
        return 0;
    } else if(playerSelection === "Scissors") {
        if(computerSelection === "Paper") {
            console.log("You Win! Scissors beat Paper");
            return 1;
        } else if(computerSelection === "Rock") {
            console.log("You Lose! Rock beats Scissors");
        } else if(computerSelection === "Scissors") {
            console.log("Draw");
        }
        return 0;
    }
}

/* rock.addEventListener('click', () => playRound("Rock", computerPlay()));
paper.addEventListener('click', () => playRound("Paper", computerPlay()));
scissors.addEventListener('click', () => playRound("Scissors", computerPlay())); */

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => playRound(`${capitalize(button.id)}`, computerPlay()));
});