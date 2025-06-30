//****************** Largest Element in Array | Practice | GeeksforGeeks****************** */

const array = function (arr) {
    let i = 0;
    let lelement = 0;
    while (i < arr.length) {
        let n = arr[i];
        if (n > lelement) {
            lelement = n;
        }
        i++;
    }

    return lelement;
}

let res = array([2, 4, 5, 7, 8, 6, 4]);
console.log(res);



