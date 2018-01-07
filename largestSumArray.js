/*

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

*/

function largestSum(arr) {
  var cur = 0;
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (cur + arr[i] > 0) {
      max = Math.max(max, cur + arr[i]);
      cur = cur + arr[i];
    } else {
      cur = 0;
    }
  }
  return max;
}

var arr = [5,0];
console.log(largestSum(arr));