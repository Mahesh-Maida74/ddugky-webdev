//********************************* Write a function that removes leading/trailing spaces, replaces multiple spaces with a single space, and returns the result in lowercase. */
const str = function (ele) {
    let strArray = ele.trim();
    let strSplit = strArray.split(" ")
    const ansArrray = strSplit.filter(function (el) {
        if (el !== " ") {

            return el;
        }
    })
    return ansArrray.join(" ");

}

const resArray = str("     hello   my     name is     mahi     ")
console.log(resArray)