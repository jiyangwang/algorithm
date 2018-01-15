//Write a recursive function that returns the binary string 
//of a given decimal number Given 4 as the decimal input, 
//the function should return 100

var res = '';
function binary(n) {
  if (n === 0) {
    return;
  }
  binary(Math.floor(n / 2));
  res += n % 2;
}
binary(5)
console.log(res);