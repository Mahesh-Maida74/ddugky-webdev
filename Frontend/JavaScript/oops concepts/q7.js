/*
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return this.name + " makes a sound.";
};

​
Now create a new instance and call the speak method.
*/

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return this.name + " makes a sound.";
};

const animal01 = new Animal("Mahesh");
console.log(animal01.speak());
