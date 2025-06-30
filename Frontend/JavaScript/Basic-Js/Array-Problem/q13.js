//*************** Find and print the average of all numbers in an array using a while loop. */
let array = [12,5,20,10,8,9,]
let index = 0;
average = 0;
res = 0;
while(index<array.length){
    average = array[index]
    res = res + average
   
    index++;
}
console.log(res/array.length)