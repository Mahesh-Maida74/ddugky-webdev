//*********Create a second array and copy all elements from the first array into it using a while loop.*************

let FirstArray = [5, 4, 6, 2, 7, 8, 9];
let SecondArray = [];
let index = 0;

while (index < FirstArray.length) {
  SecondArray[index] = FirstArray[index];
    index++;
}
console.log(SecondArray)
