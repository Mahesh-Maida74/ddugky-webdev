//***********************   Find the index of the smallest number in an array using a while loop.********** */

const array = [3, 5, 4, 7, 9, 2, 6];

let idx   = 0;                       
let min   = Number.MAX_SAFE_INTEGER; 
let minIx = -1;                      

while (idx < array.length) {
  const num = array[idx];

  if (num < min) {       
    min   = num;          
    minIx = idx;          
  }

  idx++;                  
}

console.log("Smallest Value of Array in :",min,"index",minIx);

