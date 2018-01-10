function permutation(arr) {
  var res = [];
  helper(arr, res, 0);
  return res;
}

function helper(arr, res, idx) {
  if (idx >= arr.length) {
    res.push(arr.slice());
    return;
  }
  for (var i = idx; i < arr.length; i++) {
    swap(arr, i, idx);
    helper(arr, res, idx + 1);
    swap(arr, idx, i);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
var arr = [1,2,3];
console.log(permutation(arr));