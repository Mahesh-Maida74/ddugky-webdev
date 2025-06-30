// Print the array elemnets which are multiples of 2 & 3 both
let arr = [5,6,7,6,8,5,4,6,9,8];
let index = 0;

while(index<arr.length){
    if(arr[index] % 2==0 && arr[index] % 3==0 ){
console.log(arr[index]);
    }
        
index++;
}
