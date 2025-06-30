// /*
// Given a number n, determine whether it is a prime number or not.

// A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

// Examples :

// Input: n = 7
// Output: true
// Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.*/

// let prime_Number = 5;
// let pointer = 0;
// let digit = 1;
// while (pointer < prime_Number) {
//   if (prime_Number % pointer == 0 && prime_Number % digit == 0) {
//     console.log("is a prime number", pointer);
//   }
//   //   } else {
//   //     console.log("not a prime number");
//   //   }
//   console.log(pointer);
//   pointer++;
// }

pointer = 1;
fact = 18;

count = 0;

while (pointer <= fact) {
  if (fact % pointer == 0) {
    console.log("a prime number");
    break;
  } else {
    console.log("not a prime numner");
  }
  count++;

  pointer++;
}

// if (count == 2) {
//   console.log("a prime number");
// } else {
//   console.log("not a prime numner");
// }
