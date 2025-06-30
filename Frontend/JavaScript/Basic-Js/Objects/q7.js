const fruits = {
  apple: { price: "10", quantity: "5", unit: "kg" },
  mango: { price: "20", quantity: "2", unit: "kg" },
  onion: { price: "15", quantity: "0", unit: "kg" },
};

const array = [];

for (let key in fruits) {
  const item = key;
  const { price, quantity, unit } = fruits[key];
  if (quantity !== "0")
    array.push(`${item}: ${price} per ${unit}, Quantity: ${quantity} ${unit}`);
}

console.log(array);

// ["mango: $20 per kg, quantity: 2kg, Apple: $10 per kg, Quantitiy: 3kg"]
