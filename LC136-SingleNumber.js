/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (!nums || nums.length === 0) {
      throw new Error();
  }
  var res = nums[0];
  for (var i = 1; i < nums.length; i++) {
      res ^= nums[i];    
  }
  return res;
};