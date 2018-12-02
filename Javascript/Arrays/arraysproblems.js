
function printReverse(array) {
    array.reverse().forEach(element => {
        console.log(element);
    });
}
function printReverse2(array) {
    for (let i= array.length -1; i>=0; i--) {
        console.log(arr[i]);
    }
}

function isUniform(array) {
    return !array.some(x => x != array[0]);
}
function isUniform2(array) {
    return array.every(x => x == array[0]);
}
function isUniform3(array) {
    let first = array[0];
    for (let i=1; i < array.length; i++) {
        if (array[i] !== first){
            return false;
        }
    }
    return true;
}
function sumArray(array) {
    let sum = 0;
    array.forEach(ele => {
        sum += ele;
    })
    return sum;
}   

function max(array) {
    nmax = array[0];
    for (let i = 1; i<array.length; ++i){
        if (array[i] > nmax) {
            nmax = array[i];
        }
    }
    return nmax;
}