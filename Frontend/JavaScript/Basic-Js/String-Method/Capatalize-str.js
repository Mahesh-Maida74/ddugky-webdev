//********************* . Capitalize First Letter of Each Word****** */

const str = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."];


let reverse = str.map((ele => ele.at(0).toUpperCase()));
console.log(reverse)




// let array = ["m", "a", "d", "a", "a"];
// let i = 0;
// let n = array.length - 1;

// while (i < array.length) {
//     if (array[i] === array[n]) {
//         console.log("its an palindrome")
//     } else {
//         console.log("not a palindrome")
//     }
//     i++;
//     n--;
// }


