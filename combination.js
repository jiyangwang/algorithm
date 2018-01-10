function combination(arr) {
  var res = [];
  helper(arr, res, '', 0);
  return res;
}

function helper(arr, res, str, idx) {
  if (idx >= arr.length) {
    res.push(str);
    return;
  }
  for (var i = 0; i < arr[idx].length; i++) {
    str += arr[idx][i];
    helper(arr, res, str, idx + 1);
    str = str.slice(0, str.length - 1);
  }    
}

var arr = [ [1,2,3], [4,5,6], [7,8,9]];
console.log(combination(arr));