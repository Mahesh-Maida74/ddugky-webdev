//Write a function that takes a sentence and returns the sentence in all lowercase with only the first letter capitalized.******** */

const makeFirstLetterCapital = function (word) {
  return word
    .split("")
    .map(function (ch, i) {
      if (i === 0) return ch.toUpperCase();
      else return ch.toLowerCase();
    })
    .join("");
};

const sent = "i love india";

const res = sent
  .split(" ")
  .map((word) => makeFirstLetterCapital(word))
  .join(" ");

console.log(res);
