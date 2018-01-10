function fibo(n) {
  if (n < 0)
    return 0;
  if (n === 1)
    return 1;
  return fibo(n - 1) + fibo(n - 2);
}

function fibo(n) {
  var arr = [0, 1];
  for (var i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

console.log(fibo(12));