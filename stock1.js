/*

Input: [7, 1, 5, 3, 6, 4]

Output: 5

*/

function stock(arr) {
  var min = arr[0];
  var res = 0;
  for (var i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
    res = Math.max(res, arr[i] - min);
  }
  return res;
}

var arr = [7,1,5,3,6,4];
console.log(stock(arr));