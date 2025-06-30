/*
Create an object student using object literal syntax with properties: name, age, courses (an array), and a method introduce() that prints "I am <name>, enrolled in <courses.length> courses".*/

// const student = function (name, age, course) {
//   let obj = {};
//   obj.name = name;
//   obj.age = age;
//   obj.course = course;

//   obj.introduce = function () {
//     console.log(`I am ${this.name}, enrolled in ${this.course} courses.`);
//   };
//   return obj;
// };

// const stu1 = student("mahesh", 21, "btech");
// console.log(stu1.introduce());

const student = {
  name: "Mahesh",
  age: 21,
  course: "Btech",
  introduce: function () {
    console.log(`I am ${this.name} enroll in ${this.course}`);
  },
};

console.log(student.introduce());
