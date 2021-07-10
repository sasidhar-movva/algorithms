//https://practice.geeksforgeeks.org/problems/zero-sum-subarrays1825/1

const input = [6, -1, -3, 4, -2, 2, 4, 6, -12, -7];

const result = countZeroSumSubArrays(input, input.length);
console.log(result);

function countZeroSumSubArrays(array, n) {
  let hashMap = new Map();
  let ans = 0;
  let sum = 0;

  hashMap.set(0, 1);

  for (let index = 0; index < n; index++) {
    sum += array[index];

    if (hashMap.has(sum)) { 
      let count = hashMap.get(sum);
      ans += count;
      hashMap.set(sum, ++count);
    } else {
      hashMap.set(sum, 1);
    }
  }

  return ans;
}
