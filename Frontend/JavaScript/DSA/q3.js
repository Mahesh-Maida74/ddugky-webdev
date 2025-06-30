//************************* */  Find Maximum in Array  ************************************
const array = [3, 5, 6, 7, 5, 4, 3];
let i = 0;
let lnumber = 0;

while (i <= array.length) {
  if (array[i] > lnumber) {
    lnumber = array[i];
  }

  i++;
}

console.log(lnumber);
