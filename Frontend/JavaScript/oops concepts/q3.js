const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.GetArea = function () {
  return this.width * this.height;
};

const rectangle1 = new Rectangle(90, 80);
console.log(rectangle1.GetArea());
