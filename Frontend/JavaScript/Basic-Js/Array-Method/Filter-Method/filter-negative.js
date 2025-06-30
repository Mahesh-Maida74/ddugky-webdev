//******************************  Filter out negative numbers******************* */
function getFilterNegative(arr) {
    return arr.filter(num => num > 0);
}

let res = getFilterNegative([100, -22, 36, 403, 52, -62, 70, 28, 0]);
console.log(res)