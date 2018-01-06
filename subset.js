/*

Set = "abc", all the subsets are 
[“”, “a”, “ab”, “abc”, “ac”, “b”, “bc”, “c”]
Set = "", all the subsets are [""]Set = null, all the subsets are []

*/

function subset(str) {
  if (!str || str.length == 0) {
    return str;
  }
  var res = [];
  helper(str, res, '', 0);
  return res;
}

function helper(str, res, cur, idx) {
  if (idx == str.length) {
    res.push(cur);
    return;
  }
  cur += str[idx];
  helper(str, res, cur, idx + 1);
  cur = cur.slice(0, cur.length - 1);
  helper(str, res, cur, idx + 1);
}

var str = 'abc';
console.log(subset(str));