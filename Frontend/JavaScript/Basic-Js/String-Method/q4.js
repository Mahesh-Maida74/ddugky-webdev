//********************** Write a function that trims a string, replaces all dashes - with spaces, and capitalizes each word.****** */

const str = function (ele) {
    let resStr = ele.replaceAll("-", " ")
    return resStr;
}

const ansStr = str("one-upon-a-time");
console.log(ansStr);


