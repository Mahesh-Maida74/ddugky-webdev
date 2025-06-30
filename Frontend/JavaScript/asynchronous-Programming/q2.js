/* Write a function startCounter() that logs numbers from 1 to 5, with a 1-second gap between each number using setInterval. */

let count = 1;
const intervalId = setInterval(function () {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(intervalId);
  }
}, 1000);
