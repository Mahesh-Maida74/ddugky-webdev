// create a number using all element of an array

let arr = [5,75,44,76,33,76];
let idx= 0;
let number = 0;
while(idx<=arr.length){
    number += arr[idx]
    idx++;
}
console.log(number)