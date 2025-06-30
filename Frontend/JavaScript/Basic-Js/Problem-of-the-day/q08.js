/* Given an integer x, return true if x is a

, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

let number = 123454321;
let resnumber = number;
let pointer = 0;
let res = 0;

while (pointer < number) {
  let digit = number % 10;
  res = res * 10 + digit;
  number = Math.trunc(number / 10);
}
console.log(res);

// if (resnumber == res) {
//   console.log(resnumber, " is a polindrome");
// } else {
//   console.log(resnumber, "is not  a polindrome number");
// }
