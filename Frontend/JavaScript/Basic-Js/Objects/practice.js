// const array = ["a", "b", "c", "a", "b"];
// let i = 0;
// let obj = {};
// while (i < array.length) {
//   const key = array[i];
//   const val = null;

//   obj[key] = val;
//   i++;
// }
// console.log(obj);

// const array = ["a", "b", "c", "a", "b"];

// const reduceArray = array.reduce(function (acc, ele) {
//   acc[ele] = null;
//   if (acc[ele] === null) acc[ele] = ele;
//   return acc;
// }, {});
// console.log(reduceArray);

// let array = [4, 6, 7, 4, 2, 8];
// let [arr1, arr2, arr3] = [5, 3, 4];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(array);

// let restArray = [5,6,7,3,5,6,7];
// let [rest, ...rest1] = [3, 2, 4, 5, 4];
// console.log(rest, rest1);

// const array = ["mango", "banana", "cherry", "orange"];
// for (item of array) {
//   console.log(item, array);
// }

// for (item1 in array) {
//   console.log(item1);
// }

// let age = 15;
// const vote = age > 18 ? true : false;
// console.log(vote);

// let array = [3, 5, 6, 7, 6, 5, 4];
// const res = array.forEach(function (ele) {
//   console.log(ele * 2);
// });

// const arr = [1, 2, -4, 6, -10, 60];

// arr.forEach(function (ele, index, arr) {
//   if (ele > 0) {
//     console.log(ele);
//   }
//   return 0;
// });

// const array = [
//   "bombey",
//   "slice",
//   "adole",
//   "charlie",
//   "mahesj",
//   "rahul",
//   "danjay",
//   "fagan",
// ];

// const [first."helolo", second, ...third] = array;
// console.log(first);
// console.log(third);
// console.log(array);

const obj = {
  id: 5,
  name: "mahesh",
  address: "jhabua",
  email: "maheshmaida@gmail.com",
  age: 21,
};

const { id, name, address, email, age } = obj;
console.log(address);
