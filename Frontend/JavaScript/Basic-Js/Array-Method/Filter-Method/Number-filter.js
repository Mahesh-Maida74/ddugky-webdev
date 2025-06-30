//************************************* Filter numbers greater than 50 ********************

function getFilterNumber(arr) {
    let num = 50;
    return arr.filter(num => num > 50);
}

let res = getFilterNumber([100, 22, 36, 403, 52, 62, 70, 28, 9]);
console.log(res)