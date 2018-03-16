/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (!digits || digits.length === 0) {
      return [];
  }
  for (var i = digits.length - 1; i >= 0; i--) {
      if (digits[i] === 9) {
          digits[i] = 0;
          if (i === 0) {
              digits.unshift(1);
              break;
          }
      } else {
          digits[i]++;
          break;
      } 
  }
  return digits;
};