/************************* Count total characters */

let char = ["frontend developer"];
let res = char.reduce((acc, curr) => acc += curr.length, 0);
console.log(res);