function isPalindrome(str) {
  if (!str || str.length <= 1)
    return true;
  return str.split('').reverse().join('') === str;
}

function isPalindrome(str) {
  if (!str || str.length <= 1)
    return true;
  var i = 0, j = str.length - 1;
  while (i < j) {
    if (str[i++] !== str[j--])
      return false;
  }
  return true;
}

var str = '13531';
console.log(isPalindrome(str));