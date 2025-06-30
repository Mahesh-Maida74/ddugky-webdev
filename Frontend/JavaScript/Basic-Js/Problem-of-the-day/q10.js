/*
Given an integer N, print all the divisors of N in the ascending order.
 

Example 1:

Input : 20
Output: 1 2 4 5 10 20
Explanation: 20 is completely 
divisible by 1, 2, 4, 5, 10 and 20.

*/

let number = 50;
let pointer = 0;
let res = 0;
while (pointer <= number) {
  if (number % pointer == 0) {
    console.log(pointer);
  }

  pointer++;
}
