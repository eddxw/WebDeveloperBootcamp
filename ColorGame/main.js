var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares =3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display ="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
});
hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display ="block";  
    }
    h1.style.backgroundColor = "steelblue";
});
resetButton.addEventListener("click", function () {
    //generate all colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    // change colorDispaly ro match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        console.log(pickedColor, clickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    // loop through all squares
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor((Math.random() * colors.length));

    return colors[random];
}

function generateRandomColors(num) {
    // make and array
    var arr = [];

    //repeat - add num random colors to array
    for (let i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }

    // return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}