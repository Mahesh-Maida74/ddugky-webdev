// const Employee = function (id, name, address) {
//   this.id = id;
//   this.name = name;
//   this.address = address;
// };

// Employee.prototype.working = function () {
//   console.log(`${this.m} he is working  `);
// };

// const empl01 = new Employee(1, "rahul", "indore");
// console.log(empl01.working());

// const Employee = function (id, name, address) {
//   const obj = {};
//   obj.id = id;
//   obj.name = name;
//   obj.address = address;
//   return obj;
// };

// Employee.prototype.working = function () {
//   console.log(`${this.name} is working`);
// };

// const empl01 = Employee(1, "name", "rrlm");
// console.log(empl01.working());

// const Employee = function (id, name, address) {
//   obj.id = id;
//   obj.name = name;
//   obj.address = address;
//   return obj;
// };

// Employee.prototype.working = function () {
//   console.log(`${this.name} is working`);
// };
// const obj = Object.create(Employee.prototype);
// const empl01 = Employee(1, "name", "rrlm");
// empl01.working(); // Output: name is working

// const GrandFather = {
//   land: "Thandla",
// };

// const Father = {
//   Home: "kaldela",
// };

// const Son = {
//   payment: 20000,
// };

// Object.setPrototypeOf(Father, GrandFather);
// Object.setPrototypeOf(Son, Father);
// console.log(GrandFather.Home);
// console.log(Father.payment);

// console.log(Son.Home);

// const Bottle = function (color, material, capacity, price) {
//   this.color = color;
//   this.material = material;
//   this.capacity = capacity;
//   this.price = price;
//   this.WaterQunatity = 0;
// };

// Bottle.prototype.fill = function () {
//   console.log(`fill`);
// };
// Bottle.prototype.empty = function () {
//   console.log(`bottle has been empty`);
// };

// const botl01 = new Bottle("blue");

class Bottle {
  constructor(color, material, capacity, price) {
    this.color = color;
    this.material = material;
    this.capacity = capacity;
    this.price = price;
    this.WaterQunatity = 0;
  }

  fill() {
    Bottle[WaterQunatity] = capacity;
  }

  empty() {
    Bottle[WaterQunatity] = 0;
  }
}

const botl01 = new Bottle("blue", "plastic", 1, 100);
console.log(botl01.fill());
