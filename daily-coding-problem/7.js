/*
  Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

  For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

  You can assume that the messages are decodable. For example, '001' is not allowed.
*/

// https://www.youtube.com/watch?v=qli-JCrSwuk&t=615s&ab_channel=CSDojo
// function helper (str, k) {
//   if (k === 0) return 1;
//   let s = str.length - k;
//   if (str[s] === '0') return 0;
//   let result = helper (str, k - 1);
//   if (k >= 2 && parseInt(str.slice(s, s+2)) <= 26) {
//     result += helper(str, k - 2);
//   }
//   return result;
// }

// function decode(str) {
//   return helper(str, str.length);
// }

function decode(str) {
  if (str.length === 0) return 1;
  if (str[0] === '0') return 0;
  let result = decode(str.slice(1));
  if (str.length >= 2 && parseInt(str[0]+str[1]) <= 26) {
    result += decode(str.slice(2));
  }
  return result;
}

console.log(decode('12345'));
