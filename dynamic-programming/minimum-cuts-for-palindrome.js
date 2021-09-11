//https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1

let input = 'ababbbabbababa';

let result = minimumCutsForPalindromeString(input);
console.log(result);

function minimumCutsForPalindromeString(input) {
  let n = input.length;

  let c = new Array(n);
  let p = new Array(n).fill(false).map(() => new Array(n).fill(false));

  for (let index = 0; index < n; index++) {
    p[index][index] = true;
  }

  for (let l=2; l<=n; l++) {
    for (let i = 0; i < n-l+1; i++) {
      let j = i+l-1;

      if (l===2) {
        p[i][j] = (input[i] === input[j]);
      } else {
        p[i][j] = (input[i] === input[j]) && p[i+1][j-1];
      }
    }
  }

  for (let index = 0; index < n; index++) {
    if (p[0][index] === true) {
      c[index] = 0;
    } else {
      c[index] = Number.MAX_VALUE;
      for (let j = 0; j < index; j++) {
        if (p[j+1][index] === true && 1+c[j] < c[index]) {
          c[index] = 1 + c[j];
        }
      }
    }
  }

  return c[n-1];
}
