/*

Set = [1,5,2,3,1,6];
target = 10;
res = [[1,3,6],[2,5,3]]

*/

function subset(arr, target) {
  if (!arr || arr.length == 0) {
    throw err;
  }
  var res = [];
  var cur = [];
  arr.sort();
  helper(arr, target, res, cur, 0);
  return res;
}

function helper(arr, target, res, cur, idx) {
  if (cur.length === 3) {
    if (target === 0) {
      res.push(cur.slice(0));
    }
    return;
  }
  for (var i = idx; i < arr.length; i++) {
    while (i > 0 && arr[i] === arr[i - 1]) {
      i++;
    }
    cur.push(arr[i]);
    helper(arr, target - arr[i], res, cur, i + 1);
    cur.pop(arr[i]);
  }
}

var arr = [1,2,5,2,3,1,6];
console.log(subset(arr, 10));