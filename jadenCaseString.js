String.prototype.toJadenCase = function () {
    return this.split(" ").map(elem => elem.charAt(0).toUpperCase() + elem.substr(1)).join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())