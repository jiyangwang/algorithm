/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

function valid(str) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str === '{') {
      stack.push(str[i]);
    } else if (str[i] === ')' || str[i] === ']' || str === '}') {
      if (stack.length === 0) {
        return false;
      }
      var s = stack.pop();
      if (s === '(' && str[i] !== ')' ) {
        return false;
      } else if (s === '[' && str[i] !== ']') {
        return false;
      } else if (s === '{' && str[i] !== '}') {
        return false;
      }
    }
  }
  return stack.length === 0;
}

var str = '([]{}(()){})';
console.log(valid(str));