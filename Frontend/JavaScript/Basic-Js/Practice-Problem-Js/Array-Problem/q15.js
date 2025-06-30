//************** Count how many negative numbers are present in the array using a while loop.************ */
let array = [5,-6,7,-3,2,-7,5,6,-3]
let index = 0;
let N_number = 0;

while(index<array.length){
if(array[index]< N_number){
    
    N_number++;
}
index++;
}
console.log(N_number,":","Numbers are present in teh array")