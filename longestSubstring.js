function longestSubstring(str) {
  if (str === "" || str.length === 0) return 0;

  let count = 0;
  let max = 0;
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      max = count > max ? count : max;
      obj = {};
      count = 0;
    }
    obj[str[i]] = 1;
    count++;
  }
  max = count > max ? count : max;
  return max;
}

console.log(longestSubstring("abcabcdc"));
