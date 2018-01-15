//Given an array of integers, find the largest product yielded from three of the integers

function maxProduct(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr);
  var n = arr.length - 1;
  return Math.max(arr[0] * arr[1] * arr[n], arr[n] * arr[n - 1] * arr[n - 2]);
}

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
console.log(maxProduct(unsortedArray))