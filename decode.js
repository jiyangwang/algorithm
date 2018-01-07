/*

A message containing letters from A-Z is being encoded to numbers using the following mapping:
'A' -> 1
'B' -> 2
...
'Z' -> 26

Given an encoded message containing digits, determine the total number of ways to decode it.
For example,Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
The number of ways decoding "12" is 2.

*/

function decode(str) {
  if (!str || str.length === 0) {
    return 0;
  }
  var dp = [1];
  for (var i = 1; i <= str.length; i++) {
    dp.push(0);
  }
  for (var i = 1; i <= str.length; i++) {
    if (str[i - 1] >= '1' && str[i - 1] <= '9') {
      dp[i] += dp[i - 1];
    }
    if (i >= 2 && str[i - 2] === '1' && str[i - 1] >= '0' && str[i - 1] <= '9') {
      dp[i] += dp[i - 2];
    }
    if (i >= 2 && str[i - 2] === '2' && str[i - 1] >= '0' && str[i - 1] <= '6') {
      dp[i] += dp[i - 2];
    }
  }
  return dp[str.length];
}

var str = '12324';
console.log(decode(str));