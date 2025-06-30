//************************Write a while loop to check if the array is sorted in ascending order************ */

const array = [3, 5, 7, 6, 8];  
let index = 1;                  
let isAscending = true;          

while (index < array.length && isAscending) {
  if (array[index] < array[index - 1]) {
   
    isAscending = false;
  }
  index++;
}

console.log(isAscending );
