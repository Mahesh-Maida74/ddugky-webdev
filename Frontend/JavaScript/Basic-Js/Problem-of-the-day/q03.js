
//*********************************************  Array Search and find exist element in array */

let exist_ele = function (arr) {
    let i = 0;
    let ele = 6;
    let x = -1;
    while (i < arr.length) {
        let n = arr[i]
        if (n === ele) {
            x = i;
        }

        i++;
    }
    return x;

}

let a = exist_ele([3, 5, 6, 54, 2, 4,]);
console.log(`element exist in index ${a}`);

