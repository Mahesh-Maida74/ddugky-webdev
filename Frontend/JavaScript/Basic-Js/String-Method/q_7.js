//**************************************  Given a full name string, return the initials in uppercase, separated by dots.***** */
const str = function (ele) {
    let strArray = ele.split(" ")
    let mapStr = strArray.map(function (el) {
        let elres = el[0].toUpperCase();
        return elres;
    })

    return mapStr.join(".");

}

const resArray = str("mahesh maida");
console.log(resArray);