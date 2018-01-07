/*

Say you have an array for which the ith element is the price of a 
given stock on day i.
Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like 
(ie, buy one and sell one share of the stock multiple times). 
However, you may not engage in multiple transactions at the same time
(ie, you must sell the stock before you buy again).

*/

function stock(arr) {
  if (!arr || arr.length <= 1) {
    return 0;
  }
  var res = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      res += (arr[i] - arr[i - 1]);  
    }
  }
  return res;
}

var arr = [1,3,2,5,4,6];
console.log(stock(arr));