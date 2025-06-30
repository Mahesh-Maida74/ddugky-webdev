//********************************** From an array of strings, return an array of their lengths ********* */
function getEvenNumbers(arr) {
    return arr.filter(num => num.length);
}

let res = getEvenNumbers([" Iron Man", "Black Panther", "Flash", "Batman"]);
console.log(res)