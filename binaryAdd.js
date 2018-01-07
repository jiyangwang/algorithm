// a = "11" 
// b = "1"
// Return "100"


function add(a, b) {
  var res = '';
  
  var i = a.length - 1, j = b.length - 1, carry = 0;
  while (i >= 0 || j >= 0 || carry != 0) {
    var x = 0;
    if (i >= 0) {
      x += parseInt(a[i--]);
    }
    if (j >= 0) {
      x += parseInt(b[j--]);
    }
    if (carry !== 0) {
      x += carry;
    }
    carry = Math.floor(x / 2);
    res = (x % 2) + res;
  }
  return res;
}

console.log(add('11', '1'));