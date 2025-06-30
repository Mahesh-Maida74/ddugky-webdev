// Polindrome number ********

let number = 12321;
let resnumber = number;

let res = 0;

while (0 < number) {
  let digit = number % 10;
  console.log(digit);
  res = res * 10 + digit;
  console.log(res);
  number = Math.trunc(number / 10);
}

if (resnumber == res) {
  console.log(`${resnumber} is a polindrome`);
} else {
  console.log(`${resnumber} is not a polindrome`);
}
// let number = 1122335;
// let digitList = [];
// while (number > 0) {
//   let digit = number % 10;
//   digitList.push(digit); // Sab digits ko yaad rakhta
//   console.log(digitList);
//   number = Math.floor(number / 10);
//   console.log(digitList);
// }
