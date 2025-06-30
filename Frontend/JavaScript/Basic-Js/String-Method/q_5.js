//******************* Given a sentence, return only the first 10 characters in uppercase with no spaces.********* */
let str = function (ele) {

    let sliced = ele.slice(0, 12);
    let charArray = sliced.split("");

    const filteredArray = charArray.filter(function (el) {
        return el !== " ";
    });
    return filteredArray.join("").toUpperCase();
}

const resArray = str("mango is a sweet fruit");
console.log(resArray); 
