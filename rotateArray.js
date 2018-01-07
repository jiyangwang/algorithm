/*

Rotate an array of n elements to the right by k steps.
For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] 
is rotated to [5,6,7,1,2,3,4].

*/

function rotateArr(arr, k) {
  if (!arr || arr.length == 0) {
    return arr;
  }
  arr.reverse();
  var i = 0, j = k - 1;
  while (i < j) {
    swap(arr, i++, j--);  
  }
  i = k, j = arr.length - 1;
  while (i < j) {
    swap(arr, i++, j--);
  }
  return arr;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var arr = [1,2,3,4,5,6,7];
console.log(rotateArr(arr, 3));