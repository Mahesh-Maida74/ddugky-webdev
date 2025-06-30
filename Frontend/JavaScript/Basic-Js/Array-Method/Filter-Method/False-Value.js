//*****************************************Remove falsy values**************** */


//let array = [0, "", undefined, null, "hello", 42];
function getEvenNumbers(arr) {
    let falsy = [];
    return arr.filter(num => num !== falsy);
}

let res = getEvenNumbers([0, "", undefined, null, "hello", 42]);
console.log(falsy)