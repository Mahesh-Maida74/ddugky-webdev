//*************      Use a while loop to swap the first and last elements of an array. ********** */
let array = [43,65,75,65,98,21,7867]
let index = 0;
while(index < array.length){

    let num = array[index];
    if(num == array[0]){
      console.log(num);
    }
    if(num == array[array.length - 1]){
        console.log(num);
    }
    index++;
}










