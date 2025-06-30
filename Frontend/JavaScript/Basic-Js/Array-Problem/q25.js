//************Modify the array using a while loop so that all negative numbers are replaced with 0************

let array = [4, -5, 6, -7, -8, 8, 9];
let index = 0;

while (index < array.length) {
    if (array[index] < 0) {
        array[index] = 0; 
    }
    index++;
}

console.log(array);
