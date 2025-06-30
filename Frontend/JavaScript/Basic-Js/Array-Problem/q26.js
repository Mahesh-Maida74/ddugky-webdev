//***********  Use a while loop to calculate the sum of elements located at even indices (0, 2, 4…). */
let arr = [3,6,4,5,7,2,8,9,7,5];
let iterator = 0;
let evn = 0;
let count = 0;
while(iterator<=arr.length){
    if(arr[iterator]%2==0){
        count++;
      
    }
    iterator++;
}
console.log(count)
