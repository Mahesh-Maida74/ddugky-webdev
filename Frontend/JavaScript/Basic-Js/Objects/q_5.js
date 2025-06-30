/*
Question 4: Extract Valid Numbers and Sort
You are given an array of mixed strings, where each string might contain alphabetic characters, symbols, and digits.
Write a function extractAndSortNumbers(arr) that:

    Extracts only the numeric characters from each string.
    Converts the result to a number.
    Filters out any values that result in an empty string or NaN.
    Returns a sorted array of valid numbers in ascending order.
> Must use method chaining and no loops.
Example Input:

const input = ['a12b', '##98', 'hello123', '$$', '0042'];

Expected Output:

[42, 98, 123]
*/
// const extractAndSortNumbers = function (str) {
//   const strArray = str.split("");
//   return strArray;
// };

// const numSplit = ["a12b", "##98", "hello123", "$$", "0042"];
// const numArray = numSplit.map(function extractAndSortNumbers(arr) {
//   return arr;
// });
// console.log(numArray);

const extractAndSplitChars = function (str) {
  return str.split("");
};

const numSplit = ["a12b", "##98", "hello123", "$$", "0042"];
const numArray = numSplit.map((str) => extractAndSplitChars(str));

console.log(numArray);
