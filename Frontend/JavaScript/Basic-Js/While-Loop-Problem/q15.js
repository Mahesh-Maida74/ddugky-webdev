// check if the number is 4 digit number
let num = 154740;
let digit;

while (num > 0) {
  digit = num % 10;
  if (digit <= 0) {
    console.log("Last non-zero digit is:", digit);
     
  }
  num = Math.trunc(num / 10);
}