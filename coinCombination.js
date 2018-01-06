/*
coins = {2, 1}, target = 4, the return should be
[
  [0, 4],   (4 cents can be conducted by 0 * 2 cents + 4 * 1 cents)
  [1, 2],   (4 cents can be conducted by 1 * 2 cents + 2 * 1 cents)
  [2, 0]    (4 cents can be conducted by 2 * 2 cents + 0 * 1 cents)
]
*/

function coinCombination(arr, target) {
  if (!arr || arr.length == 0) {
    return [];
  }
  var res = [];
  var cur = [];
  for (var i in arr) {
    cur.push(0);  
  }
  helper(arr, target, res, cur, 0);
  return res;
}

function helper(arr, target, res, cur, idx) {
  if (idx === arr.length) {
    if (target === 0) {
      res.push(cur.slice(0));
    }
    return;
  }
  for (var i = 0; i <= (target / arr[idx]); i++) {
    cur[idx] = i;
    helper(arr, target - i * arr[idx], res, cur, idx + 1); 
    cur[idx]--;
  }  
}

var coins = [2, 1];
console.log(coinCombination(coins, 4));