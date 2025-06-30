const Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello my name is ${this.name}`);
  };
};
const person01 = new Person("Mahesh", 21);
console.log(person01);
person01.greet();
