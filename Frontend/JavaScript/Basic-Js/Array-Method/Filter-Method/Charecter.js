//***************************** From an array of strings, return only the strings that have more than 5 characters.*** */
function getwords(arr) {
    return arr.filter(num => num.length > 5);
}

let res = getwords(["ajay", "mamta", "arpita", "manish", "sanjay"]);
console.log(res)