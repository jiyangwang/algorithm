/*

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]

]

*/

function threeSum(arr) {
  if (!arr || arr.length <= 2) {
    return [];
  }
  arr.sort();
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    while (i > 0 && arr[i] === arr[i - 1]) i++;
    var j = i + 1, k = arr.length - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] === 0) {
        res.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        while (j > 0 && arr[j] === arr[j - 1]) j++;
        while (k < arr.length - 1 && arr[k] === arr[k - 1]) k--; 
      } else if (arr[j] + arr[k] < 0) {
        j++;
      } else {
        k--;
      }
    }

  }
  return res;
}

var arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));