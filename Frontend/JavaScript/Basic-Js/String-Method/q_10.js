//********************* Take a string input, convert it to lowercase, remove vowels, and reverse it.*** */

const str = "Mahesh";
// "rpt"

const isVowel = function (letter) {
  return ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u";
};

const res = str
  .toLocaleLowerCase()
  .split("")
  .filter((ch) => !isVowel(ch))
  .reverse()
  .join("");
console.log(res);

// s0 : "Mahesh"                                -- split("")
// s1 : ["M", "a", "h", "e", "s", "h"]          -- filter()
// s2 : ["M", "h", "s", "h"]                    -- reverse()
// s3 : ["h", "s", "h", "M"]                    -- join("")
// s4 : "hshM"                                  -- toLowerCase()
// s5 : "hshm"
