//********************* 
   // *******First find the average using a while loop, then count how many elements are greater than it *****
  
let numbers = [4, 7, 2, 9, 5, 8];
let i = 0;
let total = 0;
let count = numbers.length;

while (i < count) {
    total += numbers[i];
    i++;
}
let average = total / count;
console.log("Average:", average);
i = 0;
let greaterCount = 0;

while (i < count) {
    if (numbers[i] > average) {
        greaterCount++;
    }
    i++;
}

console.log("Number of elements greater than average:", greaterCount);
