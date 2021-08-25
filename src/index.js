module.exports = function check(str, bracketsConfig) {

  let sameBrackets = bracketsConfig.filter(item => item[0] === item[1]).map(item => item[0]);
  let openBrackets = bracketsConfig.filter(item => item[0] !== item[1]).map(item => item[0]);
  let bracketsPair = {};

  // Another method
  //   bracketsConfig.forEach(item => item.reverse());
  //   let bracketsPair = Object.fromEntries(bracketsConfig);

  for(let i = 0; i < bracketsConfig.length; i++) {
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  
  let stack = [];

  for(let j = 0; j < str.length; j++) {
    let currentElement = str[j];
    let topElement = stack[stack.length - 1];
    if(openBrackets.includes(currentElement)) {
      stack.push(currentElement);
    } else if(sameBrackets.includes(currentElement) && currentElement !== topElement) {
      stack.push(currentElement);
    } else {
        if(stack.length === 0) {
            return false;
        } else if(bracketsPair[currentElement] === topElement) {
            stack.pop();
        } else {
            return false;
        }
    }
    
  }
  return stack.length === 0;
  
}
