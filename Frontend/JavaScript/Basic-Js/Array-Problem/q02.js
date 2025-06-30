//*********************** */ Print only even elements of an array*******************************
let arr = [3,6,4,5,7,2,8,9,7,5];
let iterator = 0;
let evn = 0;
while(iterator<=arr.length){
    if(arr[iterator]%2==0){
      console.log(evn[iterator])
    }
    iterator++;
}
