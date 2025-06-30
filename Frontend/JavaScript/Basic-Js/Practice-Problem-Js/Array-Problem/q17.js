//******************  Write a program to shift all elements one position to the left using a while loop.***** */

let array = [5, 6, 7, 5, 43, 3];
let index = 0;

while (index < array.length - 1) {
  array[index] = array[index+1];
  index++;
}

console.log(array);   

