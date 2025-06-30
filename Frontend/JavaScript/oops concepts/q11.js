function Counter() {
  this.count = 0;
}
Counter.prototype.increment = function () {
  this.count++;
};
let c = new Counter();

c.increment();
c.increment();
console.log(c.count); // NaN or undefined
