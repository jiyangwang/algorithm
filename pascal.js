//Define a function that returns n lines of Pascal’s Triangle. 

/*
1 
1 1
1 2 1
1 3 3 1
1 4 6 4 1
*/

function pascal(n) {
  if (n === 1) {
    return [[1]];
  } else if (n == 2) {
    return [[1],[1,1]];
  }
  var res = [[1],[1,1]];
  for (var i = 2; i < n; i++) {
    var cur = [];
    for (var j = 0; j < i; j++) {
      if (j === 0) {
        cur.push(1);
      } else {
        cur.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    cur.push(1);
    res.push(cur.slice());
  }
  return res;
}

console.log(pascal(5));