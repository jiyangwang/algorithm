/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
Write a function to determine if a given target is in the array.

*/

function search(arr, target) {
  if (!arr || arr.length === 0) {
    return -1;
  }
  var l = 0, r = arr.length - 1;
  while (l <= r) {
    var mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > arr[l]) {
      if (target >= arr[l] && target <= arr[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }  
    } else {
      if (target >= arr[mid] && target <= arr[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
}

var arr = [4,5,6,7,0,1,2];
console.log(search(arr, 6));