/**
 * @param {string} s
 * @return {boolean}
 */
var isalpha = function(c){
  var regex =/^[a-z0-9]+$/i;
  return regex.test(c);
}

var isPalindrome = function(s) {
  if (!s || s.length === 0) {
      return true;
  }
  s = s.toLowerCase().trim();
  var i = 0, j = s.length - 1;
  while (i < j) {
      while(!isalpha(s[i]) && i < j){
    i++;
  }
      while(!isalpha(s[j]) && i < j){
    j--;
  }
      if (s[i++] !== s[j--]) {
          return false;
      }
  }
  return true;
};