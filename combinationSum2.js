/*

[1,2,3,4,3] n = 2, k = 5   

[2,3],[1,4]

*/

function combinationSum2(arr, n, k) {
  if (!arr || arr.length == 0) {
    return;
  }
  var res = [];
  var cur = [];
  arr.sort();
  helper(arr, n, k, res, cur, 0);
  return res;
}

function helper(arr, n, k, res, cur, idx) {
  if (cur.length === n) {
    if (k === 0) {
      res.push(cur.slice(0));
    }
    return;
  }
  for (var i = idx; i < arr.length; i++) {
    while (i > 0 && arr[i] === arr[i - 1]) i++;
    cur.push(arr[i]);
    helper(arr, n, k - arr[i], res, cur, i + 1);
    cur.pop(arr[i]);
  }
}

var arr = [1,2,3,4,2,3,4];
console.log(combinationSum2(arr, 2, 5));