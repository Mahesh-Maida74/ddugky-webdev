const product = [
  { id: 1, Fname: "iPhone", category: "mobile" },
  { id: 2, Fname: "samsung galaxy", category: "mobile" },
  { id: 3, Fname: "MacBook", category: "Laptop" },
  { id: 4, Fname: "Dell XPS", category: "Laptop" },
  { id: 5, Fname: "iPad", category: "tablet" },
];

const result = {};

product.forEach(function (obj) {
  const { fName, category } = obj;
  if (result[category] === undefined) result[category] = [];
  result[category].push(fName);
});

console.log(result);
