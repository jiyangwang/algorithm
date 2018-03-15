/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s || s.length === 0) {
    return 0;
  }
  var arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
};