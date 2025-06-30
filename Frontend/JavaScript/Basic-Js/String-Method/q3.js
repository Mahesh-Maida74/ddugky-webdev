//************************** Given a string, return a new string where the first and last characters are removed and the rest is reversed.***** */

let str = 'mahesh';
let strArray = str.split("");
res = strArray.slice(1, strArray.length - 1);
reverse = res.reverse();
console.log(reverse);


