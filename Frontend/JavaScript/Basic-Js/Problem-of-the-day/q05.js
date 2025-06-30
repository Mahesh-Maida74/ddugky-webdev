//*********************************  Rotate Array by One ************* */

let array = [1, 2, 3, 4, 5];
let i = 0;
while (i < array.length) {
    array[i - 1] = array.length;
    console.log(array)

    i++;
}
