// *************Find Second Largest Number *************** \\
let array = [1, 4, 5, 4, 8, 9, 12, 2];
let i = 0;
let lnumber = 0;
let snumber = 0;

while (i < array.length) {
  if (array[i] > lnumber) {
    snumber = lnumber;
    lnumber = array[i];
  }

  i++;
}
console.log(snumber);
