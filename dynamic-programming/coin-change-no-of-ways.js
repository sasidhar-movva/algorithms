//https://practice.geeksforgeeks.org/problems/coin-change2448/1
//https://www.youtube.com/watch?v=DJ4a7cmjZY0

let coins = [1,2,3];
let m = coins.length;
let n = 4;

var result = countNoOfWays(coins, m, n);
console.log(result);

function countNoOfWays(coins, m, n) {
  let table = new Array(n+1).fill(0);
  table[0] = 1;

  for (let index = 0; index < m; index++) {
    for (let j = coins[index]; j<= n; j++) {
      table[j] += table[j-coins[index]];
    }
  }

  return table[n];
}
