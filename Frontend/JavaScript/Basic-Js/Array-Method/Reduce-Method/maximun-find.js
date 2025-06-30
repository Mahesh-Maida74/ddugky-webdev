//********************************* Use reduce to find the largest number in the array.******************
let array = [1, 2, 8, 9, 5];
let product = array.reduce((acc, curr) => {
    if (acc > curr) {
        return acc;
    }
});

console.log(product);