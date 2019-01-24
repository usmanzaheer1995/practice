//https://www.hackerrank.com/challenges/2d-array/problem

const getNewArray = (array, i, j) => {
    let newArray = [[], [], []];
    let a = 0; let b = 0;
    for (let k = i; k <= i + 2; ++k) {

        for (let l = j; l <= j + 2; ++l) {
            newArray[a][b] = array[k][l];
            b++;
        }
        a++; b = 0;
    }
    return newArray;
}

const hourGlass = (arr) => {
    let sumArr = [];
    for (let i = 0; i < 6; ++i) {
        if (i > 3) {
            break;
        }
        for (let j = 0; j < 6; ++j) {
            if (j > 3) {
                continue;
            }

            const newArr = getNewArray(arr, i, j);
            let k = 0,
                l = 0,
                sum = 0;
            while (k < 3 && l < 3) {
                sum += newArr[k][l];
                if (l === 2) {
                    if (k === 2) {
                        k++; l++;
                    }
                    if (k === 1) {
                        k++; l = 0;
                    } else {
                        k++; l = 1;
                    }
                } else if (k === 2) {
                    l++;
                } else if (k === 1) {

                    l = 0;
                    k++;

                } else if (k === 2 && l === 2) {
                    k++; l++;
                } else {
                    if (l < 2) {
                        l++;
                    } else {
                        k++;
                    }
                }
            }
            sumArr.push(sum);
        }
    }
    return Math.max(...sumArr);
}


const array = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

console.log(hourGlass(array));