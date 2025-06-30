//************************ find longest word in the string */

let str = ["ajay", "manish", "mamta", "sanjay"];


let strArray = str.reduce((acc, ele) => acc.length > ele.length)
console.log(strArray);