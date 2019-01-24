function findOutlier(integers) {
    if(integers.length < 3) {
        return 'Only 2 digits in array.';
    }
    return integers.slice(0, 3).filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
}
function even(num) {
    return (num % 2 == 0);
}
function odd(num) {
    return !even(num)
}

const array = [2, 4, 0, 100, 4, 11, 2602, 36];

console.log(findOutlier(array));