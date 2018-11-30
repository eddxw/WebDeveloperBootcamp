var guessed = false
let max = 99;
let min = 0;
var age = Math.ceil(Math.random() * (max - min) + min);

var promptString = "Guess my age";
console.log(`Triying to guess: ${age}`);
while (!guessed) {
    var guess = prompt(promptString);
    if (guess == age) {
        guessed = true;
        alert("You guessed right");
    }
    else if (guess > age) {
        promptString = `${guess} is to high`;
    }
    else if (guess < age) {
        promptString = `${guess} is to low`;
    }
}

