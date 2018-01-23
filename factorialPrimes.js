function factorialPrimes(n) {
  var num = factorial(n);
  var res = {};
  var sqrt_num = Math.sqrt(num);
  for (var i = 2; i <= sqrt_num; i++) {
    while (num % i === 0) {
      if (!res.hasOwnProperty(i)) {
        res[i] = 1;
      } else {
        res[i]++;
      }
      num /= i;
    }      
  }
  if (num === 1) {
    return res;
  }
  if (!res.hasOwnProperty(num)) {
    res[num] = 1;
  } else {
    res[num]++;
  }
  return res;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorialPrimes(6));