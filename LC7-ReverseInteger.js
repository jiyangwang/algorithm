/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var str = x.toString();
  if (str[0] === '-') {
      res = +(str[0] + str.substring(1).split('').reverse().join(''));
  } else {
      res = +(str.split('').reverse().join(''));
  }
  if (res > Math.pow(2, 31)  - 1 || res < -1 * Math.pow(2, 31)) {
      return 0;
  } else {
      return res;
  }
};

var x = -123;
console.log(reverse(x));