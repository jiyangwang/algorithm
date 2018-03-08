/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!nums || nums.length === 0) {
      return 0;
  }
  var slow = 0;
  for (var fast = 0; fast < nums.length; fast++) {
      if (nums[fast] !== val) {
          nums[slow++] = nums[fast];
      }
  }
  return slow;
};