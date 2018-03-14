/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums || nums.length <= 2) {
      return [];
  }
  nums.sort(function(n1, n2) {
      return n1 - n2;
  });
  var res = [];
  for (var i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) {
          break;
      }
      if (i > 0 && nums[i] == nums[i - 1]) {
          continue;
      }
      var j = i + 1, k = nums.length - 1;
      var target = -nums[i];
      while (j < k) {
          if (nums[j] + nums[k] == target) {
              res.push([nums[i], nums[j], nums[k]]);
              j++;
              k--;
              while (j < k && nums[j] == nums[j - 1]) j++;
              while (j < k && nums[k] == nums[k + 1]) k--;
          } else if (nums[j] + nums[k] < target) {
              j++;
          } else {
              k--;
          }
      }
  }
  return res;
};