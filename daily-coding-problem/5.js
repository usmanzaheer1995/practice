/*
  cons(a, b) constructs a pair, and car(pair) and cdr(pair)
  returns the first and last element of that pair.
  For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

  Given this implementation of cons:

  def cons(a, b):
      def pair(f):
          return f(a, b)
      return pair

  Implement car and cdr.
*/

const cons = (a, b) => {
  const pair = (f) => f(a, b);
  return pair;
};

const car = (f) => {
  const func = (a, b) => a;
  return f(func);
}
const cdr = (f) => {
  const func = (a, b) => b;
  return f(func);
};


console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));
