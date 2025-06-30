///******************************Get words longer than 5 letters****** */
function getwords(arr) {
    return arr.filter(num => num.length > 5);
}

let res = getwords(["ajay", "mamta", "arpita", "manish", "sanjay"]);
console.log(res)