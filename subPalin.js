//Longest Palindromic Substring

/*
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
*/

function isPalinSub(str) {
  var res = 1;
  for (var i = 0; i < str.length; i++) {
    var l = i - 1, r = i + 1;
    while (l >= 0 && r < str.length) {
      if (isPalindrome(str.substring(l, r + 1))) {
        res = Math.max(res, r - l + 1);
      }
      l--;
      r++;
    }
  }
  return res;
}

function isPalindrome(str) {
  var i = 0, j = str.length - 1;
  while (i < j) {
    if (str[i++] !== str[j--]) {
      return false;
    }
  }
  return true;
}

var str = 'babadada';
console.log(isPalinSub(str));