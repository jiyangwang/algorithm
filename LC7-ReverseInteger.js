/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res = 0;
    while (x !== 0) {
        res = res * 10 + x % 10;
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
    }
    if (res > Math.pow(2, 31)  - 1 || res < -1 * Math.pow(2, 31)) {
        return 0;
    } else {
        return res;
    }
};

var x = -123;
console.log(reverse(x));