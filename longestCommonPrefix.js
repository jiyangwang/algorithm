/*

Write a function to find the longest common prefix string amongst an array of strings.

*/

function longestPrefix(arr) {
  if (!arr || arr.length === 0) {
    return '';
  }
  for (var i = 0; i < arr[0].length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i == arr[j].length) {
        return arr[j];
      }
      if (arr[0][i] !== arr[j][i]) {
        return arr[0].slice(0, i);  
      } 
    }
  }
  return arr[0];
}

var arr = ['abdde', 'abd', 'abcd', 'aber'];
console.log(longestPrefix(arr));