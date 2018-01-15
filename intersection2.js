//1.6 Find the intersection of two arrays. 
//An intersection would be the common elements 
//that exists within both arrays. 
//In this case, these elements should be unique!

function intersection(arr1, arr2) {
  var map = {};
  var res = [];
  for (var i = 0; i < arr2.length; i++) {
    if (!map.hasOwnProperty(arr2[i])) {
      map[arr2[i]] = 1;
    }
  }
  for (var i = 0; i < arr1.length; i++) {
    if (map.hasOwnProperty(arr1[i])) {
      if (map[arr1[i]] !== 0) {
        res.push(arr1[i]);
        map[arr1[i]]--;
      }
    }
  }
  return res;
}

var a = [1,2,1,2,4];
var b = [1,2,3,1];
console.log(intersection(a, b));