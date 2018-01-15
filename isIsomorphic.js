function isIsomorphic(str1, str2) {
  if ((!str1 && str2) || (str1 || !str)) {
    
    return false;
  }
  if (str1 && str2 && str1.length !== str2.length) {
    return false;
  }
  var map1 = {}, map2 = {};
  for (var i = 0; i < str1.length; i++) {
    if (!map1.hasOwnProperty(str1[i])) {
      map1[str1[i]] = str2[i];  
    } else if (map1[str1[i]] !== str2[i]) {
      return false;
    }
    if (!map2.hasOwnProperty(str2[i])) {
      map2[str2[i]] = str1[i];
    } else if (map2[str2[i]] !== str1[i]) {
      return false;
    }
  }
  return true;
}


console.log(isIsomorphic("egg", 'add')); // true
console.log(isIsomorphic("paper", 'title')); // true
console.log(isIsomorphic("kick", 'side')); // false