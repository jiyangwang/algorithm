/*
Example 1:
Given intervals [1,3],[6,9], 
insert and merge [2,5] in as [1,5],[6,9].

Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], 
insert and merge [4,9] in as [1,2],[3,10],[12,16].
This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
*/

function insertInterval(arr, newArr) {
  if (!arr || arr.length === 0) {
    throw err;
  }
  
  arr.sort(function(a, b) {
      if (a[0] === b[0]) {
          return 0;
      }
      else {
          return (a[0] < b[0]) ? -1 : 1;
      }
  });
  
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] < newArr[0]) {
      res.push(arr[i]);     
    } else if (arr[i][0] > newArr[1]) {
      res.push(newArr);
      newArr = arr[i];
    } else {
      newArr[0] = Math.min(arr[i][0], newArr[0]);
      newArr[1] = Math.max(arr[i][1], newArr[1]);
    }
  }
  res.push(newArr);
  return res;
}

var arr = [[1,2],[3,5],[6,7],[8,10],[12,16]];
var newArr = [3,10];
console.log(insertInterval(arr, newArr))