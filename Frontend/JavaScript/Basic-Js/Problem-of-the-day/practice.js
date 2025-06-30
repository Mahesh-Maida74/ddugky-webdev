//****** get sum using whole loop */

let number = [2, 4, 6];
// let i = 0;
// let res = 0;
// while (i < number.length) {
//   res += number[i];

//   i++;
// }
// console.log(res);

//************* get sum using array reduce */
// const number1 = number.reduce(function (acc, num) {
//   acc += num;
//   return acc;
// }, 0);
// console.log(number1);

//********************** get obj using while loop ******/
let obj1 = {};
let j = 0;
while (j < number.length) {
  let val = number[j];
  let key = val - 1;
  if (obj1[key] === undefined) {
    obj1[key] = val;
  }
  j++;
}
console.log(obj1);

//*********************** create obj using array reduce *****/
let obj2 = number.reduce(function (acc, num) {
  let val = num;
  let key = val;
  if (acc[key] === undefined) {
    acc[key] = val;
    return acc;
  }
}, {});
console.log(obj2);
