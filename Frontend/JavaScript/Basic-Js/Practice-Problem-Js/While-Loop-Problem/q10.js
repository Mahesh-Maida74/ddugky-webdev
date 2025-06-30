// Find the largest digit of a number
let pointer = 15478;

let res = 0;

while (pointer > 0) {

  let digit = pointer % 10;
  console.log(digit);
  
  pointer = Math.trunc(pointer / 10);
}

