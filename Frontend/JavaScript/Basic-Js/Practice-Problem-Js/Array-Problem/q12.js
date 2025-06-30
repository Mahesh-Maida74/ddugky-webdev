// *********Count how many times a specific value appears in an array using a while loop.***********
let array = [2,3,4,5,7,2,9,2]
index = 0;
value = 2;
count = 0;
while(index<array.length){
    num = array[index]
    if(num == value){
    console.log(value)
     count++;  
    }
    index++;
}
console.log( "A specific value appears in an array",count,"times");