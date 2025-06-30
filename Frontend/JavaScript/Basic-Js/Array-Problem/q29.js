//***********************    Given two arrays, use a while loop to merge them into one***** */
let array1 = [1, 3, 5];
let array2 = [2, 4, 6];
let mergedArray = [];

let index1 = 0;
let index2 = 0;
let mergeIndex = 0; // mergedArray ka index

while (index1 < array1.length) {
    mergedArray[mergeIndex] = array1[index1];
    index1++;
    mergeIndex++;
}

while (index2 < array2.length) {
    mergedArray[mergeIndex] = array2[index2];
    index2++;
    mergeIndex++;
}

console.log(mergedArray);
