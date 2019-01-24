const mergeSort = (array) => {

    if (array.length === 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid);

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );

}

const merge = (leftArray, rightArray) => {

    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    let resultArray = [];

    while (leftArrayIndex < leftArray.length && rightArrayIndex < rightArray.length) {
        if (leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
            resultArray.push(leftArray[leftArrayIndex]);
            leftArrayIndex++;
        } else {
            resultArray.push(rightArray[rightArrayIndex]);
            rightArrayIndex++;
        }

    }

    return [
        ...resultArray,
        ...leftArray.slice(leftArrayIndex),
        ...rightArray.slice(rightArrayIndex),
    ];
}

const array = [-1000,1,2,-3,-22,3,5,-11];
console.log(mergeSort(array))