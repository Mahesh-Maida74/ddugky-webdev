//************************************ Use a while loop to build a new array containing the square of each element from the original.****** */

let FirstArray = [5, 4, 6, 2, 7, 8, 9];
let SecondArray = [];
let index = 0;
while (index < FirstArray.length) {
  SecondArray[index] = FirstArray[index] * FirstArray[index];

 index++;
}
console.log("All squares:", SecondArray);
