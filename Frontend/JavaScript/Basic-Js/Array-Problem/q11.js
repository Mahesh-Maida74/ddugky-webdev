//*************** Use a while loop to check if a given number exists in an array. Print its index if found. */
let array = [3, 5, 4, 7, 9, 2, 6];
let index = 0;
let element = 5;

while (index < array.length) {
    if (element === array[index]) {
        console.log("Element found at index:", index);
        break; 
    }
    index++;
}

