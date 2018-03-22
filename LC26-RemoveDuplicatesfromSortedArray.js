/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums && nums.length <= 1) {
    return nums;
  }
  var slow = 0;
  for (var fast = 0; fast < nums.length; fast++) {
    if (nums[slow] != nums[fast])
      nums[++slow] = nums[fast];
  }
  return slow + 1;
};