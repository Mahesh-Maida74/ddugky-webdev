// Make a new number with the even digits of a number only in reverse order
let pointer = 15478;
let res = 0;

while (pointer > 0) {
  let digit = pointer % 10; 

  if(digit % 2 == 0){         
    res = res * 10 + digit; 
  }

  pointer = Math.trunc(pointer / 10); 
}

console.log(res);

