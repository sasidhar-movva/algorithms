//https://www.geeksforgeeks.org/edit-distance-dp-5/
//https://youtu.be/MiqoA-yF-0M?list=PLbHq-Ig1LGBHv_kJOrjWeFTgvF8GkhCTE

let string1 = 'voldemort';
let string2 = 'dumbledore';
let m = string1.length;
let n = string2.length;

let dp = new Array(m+1).fill(-1).map(() => new Array(n+1).fill(-1));

let result = calculateMinimumNumberOfOperations(string1, string2, m, n, dp);
console.log(result);

function calculateMinimumNumberOfOperations(string1, string2, m, n, dp) {
  if (n === 0) {
    return m;
  } 

  if (m === 0) {
    return n;
  }

  if (dp[m][n] != -1) {
    return dp[m][n];
  }

  if (string1[m-1] === string2[n-1]) {
    if (dp[m-1][n-1] === -1) {
      return dp[m][n] = calculateMinimumNumberOfOperations(string1, string2, m-1, n-1, dp);
    } else {
      return dp[m][n] = dp[m-1][n-1];
    }
  } else {
    let left, top, diagonal;

    if(dp[m-1][n] != -1) {
      top = dp[m-1][n];
    } else {
      top = calculateMinimumNumberOfOperations(string1, string2, m-1, n, dp);
    }

    if(dp[m][n-1] != -1) {
      left = dp[m][n-1];
    } else {
      left = calculateMinimumNumberOfOperations(string1, string2, m, n-1, dp);
    }

    if(dp[m-1][n-1] != -1) {
      diagonal = dp[m-1][n-1];
    } else {
      diagonal = calculateMinimumNumberOfOperations(string1, string2, m-1, n-1, dp);
    }

    return dp[m][n] = 1 + Math.min(left, top, diagonal);
  }
}
