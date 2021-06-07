//https://practice.geeksforgeeks.org/problems/max-circular-subarray-sum-1587115620/1/

const array = [10, -3, -4, 7, 6, 5, -4, -1];

const maxSum = circularSubarraySum(array);

console.log(maxSum);

function circularSubarraySum(array) {
  let maxSum = array[0];
  let prevMax = 0;
  let minSum = array[0];
  let prevMin = 0;
  let total = 0;
  let allNegative = true;

  for (let n of array) {
    prevMax > 0 ? prevMax += n : prevMax = n;
    prevMin < 0 ? prevMin += n : prevMin = n;

    maxSum = Math.max(maxSum, prevMax);
    minSum = Math.min(prevMin. minSum);

    if (n > 0) allNegative = false;
    total += n;
  }

  if (allNegative) return maxSum;
  return Math.max(maxSum, (total - minSum))
}
