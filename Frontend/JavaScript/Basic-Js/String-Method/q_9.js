//******************Convert a string to camelCase by chaining string methods.***** */
//******************Convert a string to camelCase by chaining string methods.***** */

const FirstLetterCapital = function (word) {
  return word
    .split("")
    .map(function (ch, i) {
      if (i === 0) return ch.toUpperCase();
      else return ch.toLowerCase();
    })
    .join("");
};

const sent = "lion is a king of forest";

const res = sent
  .trim()
  .split(" ")
  .map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return FirstLetterCapital(word);
    }
  })
  .join("");

console.log(res); //
