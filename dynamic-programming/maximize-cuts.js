//https://practice.geeksforgeeks.org/problems/cutted-segments1642/1

let lineSegmentLength = 5;
let x =5, y=3, z=2;
var result = maximizeCuts(lineSegmentLength, x, y, z);
console.log(result);

function maximizeCuts(n, p, q, r) {
  let dp = new Array(n+1).fill(-1);

  dp[0] = 0;
  for (let index = 0; index < n+1; index++) {
    if (dp[index] === -1) {
      continue;
    }

    if (index + p <= n) {
      dp[index + p] = Math.max(dp[index+p], dp[index] + 1);
    }

    if (index + q <= n) {
      dp[index + q] = Math.max(dp[index+q], dp[index] + 1);
    }
    
    if (index + r <= n) {
      dp[index + r] = Math.max(dp[index+r], dp[index] + 1);
    }
  }

  if (dp[n] === -1) {
    return 0;
  }
  return dp[n];
}
