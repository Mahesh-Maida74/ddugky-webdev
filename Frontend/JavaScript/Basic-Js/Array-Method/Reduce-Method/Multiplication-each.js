//****************************** Return the product (multiplication result) of all elements in the array.*********** */

let array = [1, 2, 3, 4, 5];
let product = array.reduce((acc, curr) => acc * curr, 1);
console.log(product);



// let array = [1, 2, 3, 4, 5];
// let i = 0;
// let res = 1;
// while (i < array.length) {
//     res *= array[i]

//     i++;
// }
// console.log(res)