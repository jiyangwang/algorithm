function unCompressString(str) {
  if (!str || str.length === 0) {
    return;
  }
  var res = '';
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      count = str[i];
    } else {
      while (count >= 1) {
        res += str[i];
        count--;
      }
      count = 1;
    }
  }
  return res;
}

var str = '3A2BC';
console.log(unCompressString(str));