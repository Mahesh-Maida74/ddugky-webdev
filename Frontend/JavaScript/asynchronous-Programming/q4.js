/* Write a function countdown(n) that logs numbers from n down to 1 every second, then prints "Go!". */
let count = 5;
const intervalId = setInterval(function () {
  console.log(count);
  count--;

  if (count <= 0) {
    clearInterval(intervalId);
    console.log("Go");
  }
}, 1000);
