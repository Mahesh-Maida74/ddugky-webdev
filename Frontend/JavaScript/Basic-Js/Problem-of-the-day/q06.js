/*const travelLog = [
    "##p@ar!is123",
    "to*kyO!!",
    "nEw%%yORK",
    "123", // invalid
    "@loNDon$%",
    "ba#ng@koK",
]; */

const makeStrReadble = function (word) {
  const filterArray = word
    .toUpperCase()
    .split("")
    .filter(function (chr) {
      const ascivalue = chr.charCodeAt(0);
      if (ascivalue >= 65 && ascivalue <= 90) return true;
      if (ascivalue == " ") return true;
      else return false;
    });
  const sortArray = ascivalue.sort(function (ele) {
    if (ele == " ") return false;
  });
  return filterArray.join("");
};

const str = [
  "##p@ar!is123",
  "to*kyO!!",
  "nEw%%yORK",
  "123",
  "@loNDon$%",
  "ba#ng@koK",
];

const strMap = str
  .map(function (word) {
    return makeStrReadble(word);
  })
  .join(" ");

console.log(strMap);
