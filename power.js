/*

power(2, 0) = 1 
power(2, 3) = 8 
power(0, 10) = 0 
power(-2, 5) = -32

*/

function power(a, b) {
  if (b === 0)
    return 1;
  if (b < 0) {
    b = -b;
    a = 1 / a;
  }
  if (b === 1) {
    return a;
  }
  var half = power(a, Math.floor(b / 2));
  if (b % 2 === 1) {
    return a * half * half;
  } else {
    return half * half;
  }
}

console.log(power(3,3));