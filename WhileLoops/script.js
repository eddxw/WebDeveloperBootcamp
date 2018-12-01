console.log("Print all numbers between -10 and 19");

i=-20;
while (i < 100) {
    if (i > -10 && i < 19) {
        console.log(i);
    } 
    i++;
}

console.log("Print all numbers between 10 and 40");

i=-20;
while (i < 100) {
    if (i > 10 && i < 40 && i % 2 == 0) {
        console.log(i);
    } 
    i++;
}

console.log("Print all numbers between 300 and 333");

i=-20;
while (i < 400) {
    if (i > 300 && i < 333 && i%2 != 0) {
        console.log(i);
    } 
    i++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

i=-20;
while (i < 100) {
    if (i > 5 && i < 50 && i%5 == 0 && i%3 == 0) {
        console.log(i);
    } 
    i++;
}
