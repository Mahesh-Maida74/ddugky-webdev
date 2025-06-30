/*Question 3 : Clean and Reverse Words
You are given a string containing multiple words separated by spaces, but some words may contain special characters, digits, or extra whitespace.
Write a function cleanAndReverseWords(str) that:

    Splits the string into words.
    Removes all non-alphabetic characters from each word.
    Converts each cleaned word to lowercase.
    Removes any empty strings that result after cleaning.
    Returns a new string where the cleaned words are in reverse order, joined by a single space.
> You must use method chaining and no loops (for, while, etc.). */

const filterWords = function (word) {
  return (splitWords = word.toLowerCase().split(""))
    .filter(function (chr) {
      const asciivalue = chr.charCodeAt(0);
      if (asciivalue >= 97 && asciivalue <= 122) return true;
    })
    .join("");
};

const users = [
  { username: "John_Doe123" },
  { username: "  alice! " },
  { username: "BoB" },
  { username: "charlie99" },
  { username: "eve@2020" },
];

// console.log(filterWords("m542aH@esh"));

const arrayUsers = users.map((word) => filterWords(word.username));
const strarry = arrayUsers
  .filter((str) => str.length >= 4)
  .sort()
  .join(" ");
// const fruits = strarry.sort(function (str) {
//   return str.sort();

console.log(strarry);
