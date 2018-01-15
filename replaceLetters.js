//Substitution/Replacing specific letters

function repStr(str1, str2) {
  while (str1.indexOf(str2) !== -1) {
    str1 = str1.replace(str2, 'X');
  }
  return str1;
}

var str1 = 'abcsdasabcsadasdaabc';
var str2 = 'abc';
console.log(repStr(str1, str2));