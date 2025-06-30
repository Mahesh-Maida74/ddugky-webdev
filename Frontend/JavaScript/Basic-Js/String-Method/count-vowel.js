//****************************** Count the Number of Vowels   ************************* */

let str = "shayam and ram are the best friend ";
let i = 0;
let vowel = ["a", "e", "i", "o", "u"];
let count = 0;
while (i < str.length) {
    if (str === vowel) {
        console.log(str, count++);

    }
    i++;
}