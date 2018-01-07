/*

You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is 
that adjacent houses have security system connected and 
it will automatically contact the police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers representing 
the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

*/

function rob(arr) {
  var dp = [];
  dp.push(arr[0], arr[1]);
  for (var i = 2; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
  }
  return dp[arr.length - 1];
}

var arr = [2,1,3,5,4,2,7];
console.log(rob(arr));