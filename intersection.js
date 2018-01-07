/*

Given two arrays, write a function to compute their intersection.
Example:Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

*/

function intersection(num1, num2) {
  var map = {};
  for (var i = 0; i < nums1.length; i++) {
    if (!map.hasOwnProperty(nums1[i])) {
      map[nums1[i]] = 1;
    } else {
      map[nums1[i]]++;
    }
  }
  var res = [];
  for (var i = 0; i < nums2.length; i++) {
    if (map.hasOwnProperty(nums2[i])) {
      if (map[nums2[i]] > 0) {
        map[nums2[i]]--;
        res.push(nums2[i]);
      }
    }
  }
  return res;
}

var nums1 = [1,2,2,1];
var nums2 = [2,2];
console.log(intersection(nums1, nums2));