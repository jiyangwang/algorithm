/*

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], Return:
[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
         
*/

function anagrams(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }
  var map = {};
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i].split('').sort().join('');
    if (!map.hasOwnProperty(key)) {
      map[key] = [];
    }
    map[key].push(arr[i]);
  }
  var res = [];
  for (var key in map) {
    res.push(map[key]);    
  }
  return res;
}

var arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(anagrams(arr));