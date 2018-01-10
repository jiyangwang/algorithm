function reverseNum(num) {
  var res = 0;
  while (num !== 0) {
    var r = num % 10;
    num = Math.floor(num / 10);
    res = res * 10 + r;
  }
  return res;
}

console.log(reverseNum(134));