//https://practice.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1

let x = 'AGGTAB';
let y = 'GXTXAYB';
let m = x.length;
let n = y.length;

let result = longestCommonSubsequence(x, y, m, n);
console.log(result);

function longestCommonSubsequence(x, y, m, n) {
  let l = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i==0 || j==0) {
        l[i][j] = 0;
      } else if (x[i-1] == y[j-1]) {
        l[i][j] = l[i-1][j-1] + 1;
      } else {
        l[i][j] = Math.max(l[i-1][j], l[i][j-1]);
      }
    }
  }

  return l[m][n];
}
