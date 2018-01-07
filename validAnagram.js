/*
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.
*/

function anagram(s, t) {
  var map = {};
  for (var i = 0; i < s.length; i++) {
    if (!map.hasOwnProperty(s[i])) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (var i = 0; i < t.length; i++) {
    if (!map.hasOwnProperty(t[i])) {
      return false;
    } else {
      map[t[i]]--;
    }
  }
  for (var key in map) {
    if (map[key] !== 0)
      return false;
  }
  return true;
}

var s = 'rat', t = 'car';
console.log(anagram(s, t));