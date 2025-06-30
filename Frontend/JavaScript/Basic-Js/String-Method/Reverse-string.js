//****************************************  Write a function reverseString(str) that takes a string and returns it reversed. */
let str = function (ele) {
    let ans = ele.split("").reverse().join("")
    return ans;

}
let res = str("hello");
console.log(res);

// let str = "vasuniya";

// let res = str.split("").reverse().join("");
// console.log(res)