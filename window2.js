//Longest Substring Without Repeating Characters
//Given "abcabcbb", the answer is "abc", which the length is 3.

function longestSubstring(str) {
  var map = {};
  var res = 0;
  var l = 0;
  var max = 1;
  
  for (var i = 0; i < str.length; i++) {
    if (!map.hasOwnProperty(str[i])) {
      map[str[i]] = 1;
      max = Math.max(max, i - l + 1);
    } else {
      if (map[str[i]] === 1) {
        while (str[l] !== str[i]) {
          map[str[l]]--;
          l++;
        }
        l++;
      } else {
        map[str[i]]++;
        max = Math.max(max, i - l + 1);
      }  
    }
  }
  return max;
}

var str = 'acba';
console.log(longestSubstring(str));