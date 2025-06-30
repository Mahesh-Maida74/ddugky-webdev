const Car = function (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
};
Car.prototype.getDetails = function () {
  return `${this.make} ${this.model} (${this.year})`;
};

const car1 = new Car("india", "maruti", 2024);
console.log(car1.getDetails());
car1.getDetails();
