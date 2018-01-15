function removeDuplicate(arr) {
  var map = {};
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (!map.hasOwnProperty(arr[i])) {
      map[arr[i]] = 1;
      res.push(arr[i]);
    } else {
      map[arr[i]]++;
    }
  }
  return res;
}

      
//1.3 Removing duplicates of an array and returning an array of only unique elements
var arr = [1, 2, 3, 1, 1, 1, 4, 4, 9, 1, 2, 8];
console.log(Array.from(new Set(arr)));
console.log(removeDuplicate(arr));

//[1, 2, 3, 5, 9, 8]