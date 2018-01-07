/*

Given a non-negative integer represented as a non-empty array of digits,
plus one to the integer.
input[2,1,9] => [2,2,0];
input[9,9,9] => [1,0,0,0];

*/

function addOne(arr) {
  if (!arr || arr.length == 0) {
    return arr;
  }
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr;
    } else {
      arr[i] = 0;
    }
  }
  if (arr[0] === 0) {
    arr.unshift(1);
  }
  return arr;
}

var arr = [9, 9, 9];
console.log(addOne(arr));