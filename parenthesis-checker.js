//https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1#

Array.prototype.last = function() {
  return this[this.length - 1];
}

const inputString = '{([])}';

const openParenthesis = ['(', '{', '['];

const matchingParenthesis = {
  '}': '{',
  ')': '(',
  ']': '['
};

parenthesisChecker(inputString);

console.log(parenthesisChecker(inputString));

function parenthesisChecker(inputString) {
  const stack = [];

  for(const char of inputString) {
    if (openParenthesis.includes(char)) {
      stack.push(char);
    } else {
      if(matchingParenthesis[char] === stack.last()) {
        stack.pop();
      } else{
        return false;
      }
    }
  }

  return !stack.length;
}
