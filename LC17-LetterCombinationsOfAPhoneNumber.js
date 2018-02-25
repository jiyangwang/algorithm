/**
 * @param {string} digits
 * @return {string[]}
 */

var helper = function(digits, list, res, cur, idx) {
  if (cur.length === digits.length) {
      res.push(cur);
      return;
  }
  var str = list[parseInt(digits[idx])];
  for (var i = 0; i < str.length; i++) {
      cur += str[i];
      helper(digits, list, res, cur, idx + 1);
      cur = cur.slice(0, cur.length - 1);
  }
};

var letterCombinations = function(digits) {
  if (!digits || digits.length === 0) {
      return [];
  }
  var list = ["", "", "abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
  var res = [];
  helper(digits, list, res, '', 0);
  return res;
};

var digits = '23';
console.log(letterCombinations(digits));