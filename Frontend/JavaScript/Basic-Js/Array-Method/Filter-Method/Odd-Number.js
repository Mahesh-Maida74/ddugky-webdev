//********************************* Filter out odd numbers********* */
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

let res = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res)