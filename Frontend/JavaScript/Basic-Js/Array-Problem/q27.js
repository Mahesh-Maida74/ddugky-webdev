//*****************   Use a while loop to verify that all elements in the array are positive******** */

let array = [4, 5, 6, 7, -8, 8, -9];
let index = 0;
let allPositive = true;

while (index < array.length) {
    if (array[index] <= 0) {
        allPositive = false;
        break;
    }
    index++;
}

console.log("All elements are positive:", allPositive);


