//3.2 Create a function that will evaluate if a given expression 
//has balanced parentheses -- Using stacks In this example,
//we will only consider "{}" as valid parentheses {}{} 
//would be considered balancing. {{{}} is not balanced

function validPar(str) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      stack.push(str[i]);
    } else if (str[i] === '}') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(validPar("{{}"));
console.log(validPar("{{{}}"));
console.log(validPar("{}{{}"));