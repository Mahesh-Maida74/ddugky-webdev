// Print square of every digit in a number

let pointer = 2452;
let res = 0;

while (pointer > 0) {
  let digit = pointer % 10;
  res = digit * digit;
  console.log(res);
  
  pointer = Math.trunc(pointer / 10);
}

