function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    console.log(getRandomElement(options));
}

computerPlay();