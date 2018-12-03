var scores = [0, 0];
var winnerScore = 5;
var gameOver = false;

var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
let inputNG = document.querySelector('input');
var buttons = document.querySelectorAll('button');
var pGames = document.querySelector('p');

buttons[0].addEventListener("click", () => {
    if (!gameOver) {
        scores[0]++;
        if (scores[0] === winnerScore) {
            gameOver = true;
            p1Display.style.color = "green";
        }
        p1Display.textContent = scores[0];
        updateScores();
    }
});
buttons[1].addEventListener("click", () => {
    if (!gameOver) {
        scores[1]++;
        if (scores[1] === winnerScore) {
            gameOver = true;
            p2Display.style.color = "green";
        } 
        p2Display.textContent = scores[1];
        updateScores();
    }
});
buttons[2].addEventListener("click", () => {
    scores = [0, 0];
    gameOver = false;
    p1Display.textContent = scores[0];
    p2Display.textContent = scores[1];
    p1Display.style.color = "black";
    p2Display.style.color = "black";
    updateScores();
});
inputNG.addEventListener("input", function() {
    winnerScore = Number(this.value);
    pGames.innerHTML = `Playing to: ${winnerScore}`;
});


function updateScores() {
    console.log(`${scores[0]} to ${scores[1]}`);
}