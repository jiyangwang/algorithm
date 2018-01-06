function mergeInterval(arr) {
  if (!arr || arr.length == 0) {
    throw err;
  }
  arr.sort(function(s1, s2) {
    return s1[0] - s2[0];
  })
  
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      res.push(arr[i]);
    } else { 
      var lastIdx = res.length - 1;
      if (arr[i][0] <= res[lastIdx][1]) {
        res[lastIdx][1] = Math.max(arr[i][1], res[lastIdx][1]);  
      } else {
        res.push(arr[i]);  
      }
    }
  }
  return res;
}

var arr = [[1, 3], [2, 4], [3, 5], [6, 8]];
console.log(mergeInterval(arr));