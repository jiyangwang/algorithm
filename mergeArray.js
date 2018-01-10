var merge = function(arr1, arr2) {
  var len1 = arr1.length;
  var len2 = arr2.length;
  var newArr = [];
  var i = 0;
  var j = 0;
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i++]);
    } else {
      newArr.push(arr2[j++]);
    }
  }
  while (i !== len1) {
    newArr.push(arr1[i++]);
  }
  while (j !== len2) {
    newArr.push(arr1[j++]);
  }
  return newArr;
};

var arr1 = [1,2,3];
var arr2 = [1,3,4];
var newArr = merge(arr1,arr2);
console.log(newArr);