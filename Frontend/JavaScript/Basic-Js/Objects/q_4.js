/*
:broom: Question 3 : Clean and Reverse Words
You are given a string containing multiple words separated by spaces, but some words may contain special characters, digits, or extra whitespace.
Write a function cleanAndReverseWords(str) that:

    Splits the string into words.
    Removes all non-alphabetic characters from each word.
    Converts each cleaned word to lowercase.
    Removes any empty strings that result after cleaning.
    Returns a new string where the cleaned words are in reverse order, joined by a single space.
> You must use method chaining and no loops (for, while, etc.).
Example Input:

const input = "  Hello123! @World$$ this-- is45 ###JavaScript ";
*/

// const cleanAndReverseWords = function (str) {
//   const splitArray = str.split("");
//   const resArray = splitArray.filter(function (chr) {
//     const asciivalue = chr.charCodeAt(0);
//     if (asciivalue >= 97 && asciivalue <= 122) return asciivalue;
//   });
// };

// const email = "  Hello123! @World$$ this-- is45 ###JavaScript ";

// const emailArray = email.split(" ").map((str) => cleanAndReverseWords(str));
// console.log(emailArray);

const cleanAndReverseWords = function (str) {
  const splitArray = str.toLowerCase().split("");
  const resArray = splitArray.filter(function (chr) {
    const asciivalue = chr.charCodeAt(0);
    return asciivalue >= 97 && asciivalue <= 122;
  });
  return resArray.join("");
};

const email = "  Hello123! @World$$ this-- is45 ###JavaScript ";

const emailArray = email
  .trim()
  .split(" ")
  .map((str) => cleanAndReverseWords(str))
  .reverse()
  .join(" ");

console.log(emailArray);
