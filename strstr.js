/*strstr*/

function strstr(needle, haystack) {
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
      return j;
    }
  }
  return -1;
}

var needle = 'stray';
var haystack = 'haystrayapple';
console.log(strstr(needle, haystack));