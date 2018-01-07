/*

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which will 
return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

*/

function firstBadVersion(arr) {
  var left = 0, right = arr.length - 1;
  while (left < right) {
    var mid = left + Math.floor((right - left) / 2);
    if (isBadVersion(mid)) {
      right = mid;  
    } else {
      left = mid + 1;
    }
  }
  return left;
}