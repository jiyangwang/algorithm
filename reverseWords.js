function reverseWords(str) {
  if (!str || str.length <= 1)
    return str;
  return str.split(' ').reverse().join(' ');
}

function reverseWords(str) {
  if (!str || str.length <= 1)
    return str;
  var s = reverseString(str);
  
  var res = '';
  var start = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      res += reverseString(s.substring(start, i));
      res += ' ';
      start = i + 1;
    }
  }
  res += reverseString(s.substring(start));
  return res;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

var str = 'I love you';
console.log(reverseWords(str));