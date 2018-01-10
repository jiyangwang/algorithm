/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums || nums.length === 0) {
      return 0;
  }
  var dp = [1];
  var max = 0;
  for (var i = 1; i < nums.length; i++) {
      var cur = 0;
      for (var j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
            cur = Math.max(cur, dp[j]);        
        }
      }
      dp.push(cur + 1);
      max = Math.max(max, dp[i]);
  }
  console.log(dp);
  return max;
};

var nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));