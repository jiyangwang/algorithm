/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle || needle.length === 0) {
      return 0;
  }
  if (!haystack || haystack.length === 0) {
      return -1;
  }
  var n = needle.length;
  var m = haystack.length;
  for (var i = 0; i < m - n + 1; i++) {
      var j = 0;
      for (j; j < n; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;    
        }    
      }
      if (j === n) {
        return i;
      }
  }
  return -1;
};