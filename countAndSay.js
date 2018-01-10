var countAndSay = function(n) {
  var res = '1';
  for (var i = 2; i <= n; i++) {
      var cur = '';
      var count = 1;
      for (var j = 0; j < res.length; j++) {
          if (j < res.length - 1 && res[j] === res[j + 1]) {
              count++;
          } else {
              cur += (count + res[j]);
              count = 1;
          }
      }
      res = cur;
  }
  return res;
};

console.log(countAndSay(5));