function digital_root(n) {
    if(n.toString().length === 1) return n;

    let digits = n.toString().split('').map(Number).reduce((a ,b) => a+b, 0); 
    return digital_root(digits);

    // One-liner:
    // return (n - 1) % 9 + 1;
}

console.log(digital_root(1195))