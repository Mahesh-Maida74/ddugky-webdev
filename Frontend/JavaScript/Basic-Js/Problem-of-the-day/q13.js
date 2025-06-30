/*
Write a function that accepts an array of objects where each object contains:
a category string,
a price number, and
a tags string (comma-separated).
Transform the data into:
An object with categories as keys,
Each category contains total items, average price, and unique tags (as a Set or Array).
*/

const items = [
  { category: "Electronics", price: 1200, tags: "gadget,new" },
  { category: "Electronics", price: 800, tags: "sale,gadget" },
  { category: "Clothing", price: 50, tags: "new,summer" },
  { category: "Clothing", price: 70, tags: "sale,winter" },
];

const res = {};

items.forEach(function (newItem) {
  if (res[newItem.category] === undefined) {
    res[newItem.category] = {
      totalItems: 0,
      totalPrice: 0, // keep track of the sum of prices
      avgPrice: 0,
      tags: [],
    };
  }

  const oldItem = res[newItem.category];
  oldItem.totalItems++;
  oldItem.totalPrice += newItem.price;
  oldItem.avgPrice = oldItem.totalPrice / oldItem.totalItems;
  oldItem.tags = Array.from(
    new Set([...oldItem.tags, ...newItem.tags.split(",")])
  );
});

console.log(res);
