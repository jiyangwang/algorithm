function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (!S || S.length === 0) {
      throw new Error('error input');
  }
  S = S.trim(' ');
  S = S.trim('-');
  var nums = '';
  for (var i = 0; i < S.length; i++) {
      if (S[i] >= '0' && S[i] <= '9') {
          nums += S[i];        
      }
  }
  var len = nums.length;
  if (len <= 3) {
      return nums;
  }
  var arr = [];
  for (var j = 0; j < len; j = j + 3) {
      if (len - j === 6 || len - j === 5) {
          arr.push(nums.substr(j, 3));
          arr.push(nums.substring(j + 3));
          break;
      } else if (len - j === 4) {
          arr.push(nums.substr(j, 2));
          arr.push(nums.substring(j + 2));
          break;
      }
      arr.push(nums.substr(j, 3));
  }
  return arr.join('-');
}