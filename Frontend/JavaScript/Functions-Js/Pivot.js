const arr = [1, 0, 9, 2, 2];



// Prit lsftSum of all elements of an array
// Prefix sum

const pvIndex = function (arr) {

    let i = 0;
    let ls = 0;

    let lsArr = [];


    while (i < arr.length) {

        lsArr.push(ls);
        ls += arr[i];

        i++;
    }



    let j = arr.length - 1;
    let rs = 0;

    let res = -1;


    while (j >= 0) {

        if (rs === lsArr[j]) {
            res = j;
            break;
        };

        rs += arr[j];


        j--;
    }

    return res;

}

