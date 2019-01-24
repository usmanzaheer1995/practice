function GetSum(a, b) {
    if(a === b) return a;
    if(b < a) {
        let temp = a;
        a = b;
        b = temp;
        delete temp;
    }
    let sum = a;
    while(a < b) {
        sum = sum + (a+1);
        a++;
    }
    return sum;
}

console.log(GetSum(-331, -544))