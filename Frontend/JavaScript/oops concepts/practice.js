// const name = "mahesh";
// const Student = function (id, str) {
//   let obj = {};
//   obj.id = id;
//   obj.name = str;
//   writing = function () {
//     console.log(`${obj.name} is typing `);
//     return writing;
//   };
//   return obj;
// };

// const stu1 = Student(21, "mahesh");
// const stu2 = Student(22, "sanjay");
// const stu3 = Student(25, "rahul");
// const stu4 = Student(24, "ajay");
// console.log(stu1);
// console.log(stu2);
// console.log(stu3);
// console.log(stu4);

// writing();

// const Fname = "mahesh";
// const stu01 = {
//   id: 11111,
//   fname: "Sanjay",
//   study: function () {
//     console.log(`${this.fname} is studing`);
//   },
// };

// console.log(stu01.id);
// stu01.study();

// const student = {
//   name: "Sanjay",
//   showThis: function () {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// student.showThis();

//  constructor ..............................................
// const Student = function (idValue, fNameValue) {
//     // {}
//     this.id = idValue;
//     this.fName = fNameValue;
// };

// Student.prototype.study = function () {
//     console.log(`${this.fName} is studing`);
// };

// Student.prototype.sleep = function () {
//     console.log(`${this.fName} is sleeping`);
// };

// const stu02 = new Student(22222, "Shivani");
// const stu01 = new Student(11111, "Sanjay");
// const stu03 = new Student(33333, "Swapna");
// const stu04 = new Student(44444, "Mahesh");
// const stu05 = new Student(55555, "Ajay");

// console.log(stu01);
// stu01.study();
// stu01.sleep();

// 1. create {} in the Student() Constructor function
// 2. Link Student()'s this to {}
// 3. Link Student.prototype's this to {}
// 4. return {};

// const Student = function (id, name) {
//   this.id = id;
//   this.name = name;
// };

// const stu1 = new Student(12, "mahesh");
// console.log(stu1);

let a;
let b = a;
a = { item: "apple" };
// b.item = "orange";

console.log(a.item);
