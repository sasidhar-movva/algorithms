//https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1
//https://www.youtube.com/watch?v=nLmhmB6NzcM


let val = [60, 100, 120];
let wt = [10, 20, 30];

let W = 50;
var result = knapSack(50, wt, val, val.length);
console.log(result);

function knapSack(W, wt, val, n)
{ 
   let dp = new Array(W+1).fill(0);

   for (let i = 1; i <= n; i++) {
     for (let w = W; w >= 0; w--) {
       if (wt[i-1] <= w) {
        dp[w] = Math.max(dp[w], dp[w-wt[i-1]] + val[i-1]);
       }
     }
   }

   return dp[W];
}
