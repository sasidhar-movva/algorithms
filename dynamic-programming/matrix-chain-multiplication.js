//https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1#
//https://www.youtube.com/watch?v=prx1psByp7U&ab_channel=AbdulBari

let arr = [1, 2, 3, 4];
var result = calculateMinimumNumberOfMultiplications(arr, arr.length);
console.log(result);

function calculateMinimumNumberOfMultiplications(arr, n) {
  let m = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let j = 0;

  for (let length = 2; length < n; length++) {
    for (let i = 1; i < n - length + 1; i++) {
      j = i+length-1;
      if (j===n) {
        continue;
      }
      m[i][j] = Number.MAX_VALUE;
      for (let k = i; k <= j-1; k++) {
        q = m[i][k] + m[k+1][j] + arr[i-1] * arr[k] *arr[j];
        if (q < m[i][j]) {
          m[i][j] = q;
        }
      }
    }
  }

  return m[1][n-1];
}
