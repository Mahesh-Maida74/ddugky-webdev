//

//****************** Write a function that takes a string, trims it, and replaces the first and last characters with *. */
const str = function (ele) {
  let strArray = ele.trim().split(" ");
  let strReplace = strArray.map(function (el) {
    let res = "*" + el.slice(1, -1) + "*";
    return res;
  });

  return strReplace.join(" ");
};

const resArray = str("    mufhasha  ");
console.log(resArray);
