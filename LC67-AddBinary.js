/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var res = '';
  var i = a.length - 1;
  var j = b.length - 1;
  var carry = 0;
  while (i >= 0 || j >= 0 || carry != 0) {
    var sum = 0;
    if (i >= 0) {
      sum += parseInt(a[i--]);
    }
    if (j >= 0) {
      sum += parseInt(b[j--]);
    }
    if (carry !== 0) {
      sum += carry;
    }
    carry = Math.floor(sum / 2);
    res = (sum % 2) + res;
  }
  return res;
};