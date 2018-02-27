/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s || s.length === 0) {
      return true;
  }
  var stack = [];
  for (var i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
          stack.push(s[i]);
      } else {
          if (stack.length === 0) {
              return false;
          }
          var str = stack.pop();
          if (str === '(' && s[i] !== ')' ||
              str === '[' && s[i] !== ']' ||
              str === '{' && s[i] !== '}') {
              return false;    
          }
      }
  }
  return stack.length === 0;
};