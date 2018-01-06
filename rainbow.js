function rainbow(arr) {
  if (!arr || arr.length == 0) {
    throw err;
  }
  var i = 0, j = 0, k = arr.length - 1;
  while (j < k) {
    if (arr[j] === 0) {
      swap(arr, i, j);
      i++;
      j++;
    } else if (arr[j] === 1) {
      j++;
    } else {
      swap(arr, j, k);
      k--;
    }
  }
  return arr;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var arr = [0,2,0,1,0,2,2,1,0,0,2];
console.log(rainbow(arr));