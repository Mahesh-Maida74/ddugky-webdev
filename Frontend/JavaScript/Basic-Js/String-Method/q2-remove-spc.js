//***************************  Write a function that takes a string, removes all spaces, and converts it to uppercase.*** */
let bird = "   birds   are       flying  ";
let birdsArray = bird.split(" ");
let resArray = birdsArray.filter(function (str) {
  if (str !== "") {
    return str;
  }
});

console.log(resArray);
