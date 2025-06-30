//************************************ Print Second Largest Element in Array */
let arr = [2, 4, 8, 6, 5, 9];
let index = 0;
let Lrg1 = 0;
let Lrg2 = 0;

while(index < arr.length){
    let num = arr[index];
    
    if(num > Lrg1){
        Lrg2 = Lrg1;
        Lrg1 = num;
    } else if(num < Lrg1 && num > Lrg2){
        Lrg2 = num;
    }

    index++;
}

console.log("Largest:", Lrg1);
console.log("Second Largest:", Lrg2);
