//*****************************  find min and max in array ******************************** */

let max_min = function (arr) {

    let i = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    while (i < arr.length) {

        if (max < arr[i]) max = arr[i];
        if (min > arr[i]) min = arr[i];
        i++;
    }
    return [max, min];

}

let res = max_min([28004, 23544, 32504, 29493, 17013, 17850, 18952, 12089, 5126, 10353]);
console.log(res);

