var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var isBlue = false;

h1.style.color = "pink";

setInterval(() => {
    if (isBlue) {
        body.style.background = "white";
        h1.style.color = "black";
    } else {
        body.style.background = "#3498db"
        h1.style.color = "white";
    }
    isBlue = !isBlue;
}, 1000)