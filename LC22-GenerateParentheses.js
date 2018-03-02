/**
 * @param {number} n
 * @return {string[]}
 */

var helper = function(n, l, r, res, cur) {
  if (l === n && r === n) {
      res.push(cur);
      return;
  }
  if (l < n) {
      helper(n, l + 1, r, res, cur + '(');
  }
  if (r < l) {
      helper(n, l, r + 1, res, cur + ')'); 
  }
}

var generateParenthesis = function(n) {
  var res = [];
  helper(n, 0, 0, res, '');
  return res;
};