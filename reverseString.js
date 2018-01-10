var reverse = function (str) {
  var res = '';
  for (var i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

var reverse = function (str) {
  if (str === '')
    return '';
  else
    return reverse(str.substr(1)) + str.charAt(0);
}

var reverse = function (str) {
  if (!str || str.length <2)
    return str;
  return str.split("").reverse().join("");
}

String.prototype.reverse = function() {
  if (!str || str.length <2)
    return str;
  return str.split("").reverse().join("");
}