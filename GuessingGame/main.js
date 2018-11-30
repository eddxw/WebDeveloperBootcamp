var guessed = false
let max = 99;
let min = 0;
var age = Math.ceil(Math.random() * (max - min) + min);

var promptString = "Guess my age";
console.log(`Triying to guess: ${age}`);

document.getElementById("message").innerText= "";
while (!guessed) {
    var guess = prompt(promptString);
    console.log(guess);
    if (guess == null) {
        document.getElementById("message").innerText= "You're boring";
        break;
    }
    else if (guess == age) {
        guessed = true;
        document.getElementById("message").innerText= "You guessed right";
    }
    else if (guess > age) {
        promptString = `${guess} is to high`;
    }
    else if (guess < age) {
        promptString = `${guess} is to low`;
    }
}

