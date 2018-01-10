function distance(str1, str2) {
  var arr1 = str1.split('').sort();
  var arr2 = str2.split('').sort();
  var cost = 0, i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      arr1.splice(i, 1);
      arr2.splice(j, 1);
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  var s1 = arr1.join('');
  var s2 = arr2.join('');
  for (var i in s1) {
    cost += s1.charCodeAt(i);
  }
  for (var i in s2) {
    cost += s2.charCodeAt(i);
  }
  return cost;
}

console.log(distance('cat', 'at'));
console.log(distance('boat', 'got'));
console.log(distance('thought', 'sloughs’));