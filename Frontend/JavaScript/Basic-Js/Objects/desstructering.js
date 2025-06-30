const [num1, num2, num3] = [1, 2, 3];
console.log(`num1: ${num1}, num2 : ${num2}, num3 : ${num3}`);

const { b, a, c } = { a: 1, b: 2, c: 3 };
console.log(a, b, c);
console.log(a, b, c);

let [num4, num5, [num6, num7, [num8, num9]]] = [1, 2, [3, 4, [5, 6]]];
console.log(num4, num5, num6, num7, num8, num9);

const obj = { a: 1, b: 2, c: { d: 3 }, d: { e: 5 } };
