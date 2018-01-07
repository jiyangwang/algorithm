// Input:Digit string "12"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// String[] list = new String[]{"","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};

function phoneCombination(str) {
  if (!str || str.length === 0) {
    return str;
  }
  var list = ["","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
  var res = [];
  helper(str, list, res, '', 0);
  return res;
}

function helper(str, list, res, cur, idx) {
  if (cur.length === str.length) {
    res.push(cur);
    return;
  }
  
  var phoneStr = list[parseInt(str[idx])];
  
  for (var i = 0; i < phoneStr.length; i++) {
    cur += phoneStr[i];
    helper(str, list, res, cur, idx + 1);
    cur = cur.slice(0, cur.length - 1);
  }
}

var str = '12';
console.log(phoneCombination(str));