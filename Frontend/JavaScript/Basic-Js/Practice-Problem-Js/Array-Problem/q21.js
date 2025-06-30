//******   Use a while loop to swap the first and last elements of an array ******* */
function swap_number(arr){
    num = arr
index = 0;
while( num[index]<num.length){
    num[index] = num[num.length-1];
    num[num.length-1] = num[index];
    console.log(num)
    index++;   
}

}
const res = swap_number([34,54,6,54,65])