//*******************************  Given an array [1, 2, 3], return [2, 4, 6]. ********** */
function getEvenNumbers(arr) {
    return arr.filter(num => num * 2);
}

let res = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res)