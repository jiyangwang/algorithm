function partialPrimes(num) {
  var str = num.toString();
  var res = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      var n = str.substring(i, j);
      if (isPrime(n)) {
        res = Math.max(res, n);
      }  
    }
  }
  return res;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n === 2) {
    return true;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

var num = 7169;
console.log(partialPrimes(num));