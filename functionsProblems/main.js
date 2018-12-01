function isEven(x) {
    return x % 2 === 0;
}

function factorial(x) {
    let result = 1;
    for (let i = x; i > 1; i--){
        result *= i;
    }
    return result;
}

function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}