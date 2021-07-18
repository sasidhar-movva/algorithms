//https://practice.geeksforgeeks.org/problems/stepping-numberswrong-output1813/1

const n = 10;
const m = 15;

let count = 0;

countSteppingNumbers(m, n);
console.log(count);

function countSteppingNumbers(m, n) {
  for (let index = 0; index < 10; index++) {
    dfs(n, m, index);
  }
}

function dfs(n, m, stepNum) {
  if (stepNum <= m && stepNum >= n) {
    count++;
  }

  if (stepNum === 0 || stepNum > m) {
    return;
  }

  let lastDigit = stepNum % 10;

  let stepNumberA = stepNum * 10 + (lastDigit + 1);
  let stepNumberB = stepNum * 10 + (lastDigit - 1);

  if (lastDigit === 0) {
    dfs(n, m, stepNumberA);
  } else if (lastDigit === 9) {
    dfs(n, m, stepNumberB);
  } else {
    dfs(n, m, stepNumberB);
    dfs(n, m, stepNumberA);
  }
}
