//https://practice.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1
const inputString = 'a+b*(c^d-e)^(f+g*h)-i';

const leftToRightAssociativeOperators = ['*', '/', '-', '+'];

const operatorPrecedence = {
  '^': 1,
  '*': 2,
  '/': 2,
  '+': 3,
  '-': 3,
  '(': 4,
  ')': 4
};
let result = '';
infixToPostfix(inputString);

console.log(result);

function infixToPostfix(input) {
  const operatorStack = [];

  for (const char of input) {
    if (operatorPrecedence[char]) {
      this.checkPrecedence(char, operatorStack);
    } else {
      result = `${result}${char}`;
    }
  }
  while (operatorStack !== undefined && operatorStack !== null && operatorStack.length) {
    result = `${result}${operatorStack.pop()}`;
  }

  return result;
}

function checkPrecedence(char, operatorStack) {
  if (!operatorStack.length || char === '(') {
    operatorStack.push(char);
  } else if (char === ')') {
    while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
        result = `${result}${operatorStack.pop()}`;
    }
    operatorStack.pop();
  } else if (operatorPrecedence[char] < operatorPrecedence[operatorStack[operatorStack.length - 1]]) {
    operatorStack.push(char);
  } else if (operatorPrecedence[char] > operatorPrecedence[operatorStack[operatorStack.length - 1]]) {
    result = `${result}${operatorStack.pop()}`;
    checkPrecedence(char, operatorStack);
  } else if (operatorPrecedence[char] === operatorPrecedence[operatorStack[operatorStack.length - 1]]) {
    if (leftToRightAssociativeOperators.includes(char)) {
      result = `${result}${operatorStack.pop()}`;
      operatorStack.push(char);
    } else {
      operatorStack.push(char);
    }
  } else {
    return;
  }
}
