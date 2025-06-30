// console.log("hello");
// for (let i = 0; i < 10; i++) {
//   console.log("async");
// }
// console.log("coding");

// console.log("hiiii");

// setTimeout(
//   function (time) {
//     console.log("time");
//   } * 1000
// );

// setTimeout(1);

// console.log("coding");
// console.log("hiiii");

// const v = setTimeout(function () {
//   console.log("time"); // appears after 1 second
// }, 1000);

// setInterval(function (v) {
//   console.log({ v }, "gm guys");
// }, 5);

// console.log("coding");
// console.log("hello");

// // v stores the timeout ID
// setTimeout(function () {
//   console.log("time"); // will run after 1 second
// }, 5000);

// let count = 0;
// function hello() {
//   for (let i = 0; i < 1; i++) {
//     console.log(count++);
//   }
// }

// setTimeout(hello, 3000);

// setInterval(hello, 6000);

// function hello1() {
//   console.log("hello 1");
// }

// function hello2() {
//   console.log("heelo 2");
// }

// setTimeout(function () {
//   console.log("hiiii");
// }, 8000);

// function hello3() {
//   console.log("helo 3");
// }

// hello1();
// setTimeout(hello2, 5000);
// setInterval(hello3, 4000);
// hello3();

const name = "Miriam";
function makeGreeting(name) {
  console.log(`Hello, my name is ${name}!`);
}

console.log("hiii frds..");

setTimeout(makeGreeting, 2000, "mahesh");
