// Print the last non zero digit of number
let num = 154740;
let digit;

while (num > 0) {
  digit = num % 10;
  if (digit !== 0) {
    console.log("Last non-zero digit is:", digit);
    break; 
  }
  num = Math.trunc(num / 10);
}
