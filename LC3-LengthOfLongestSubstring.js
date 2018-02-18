/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || s.length === 0) {
    return 0;
  }
  var map = {};
  var l = 0;
  var max = 1;
  for (var i = 0; i < s.length; i++) {
    if (!map.hasOwnProperty(s[i])) {
      map[s[i]] = 1;
      max = Math.max(max, i - l + 1);
    } else {
      if (map[s[i]] === 1) {
        while (s[l] !== s[i]) {
          map[s[l]]--;
          l++;
        }
        l++;
      } else {
        map[s[i]]++;
        max = Math.max(max, i - l + 1);
      }
    }
  }
  return max;
};

var str = 'abcabcbb';
console.log(longestSubstring(str));