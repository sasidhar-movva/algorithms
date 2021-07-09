//https://practice.geeksforgeeks.org/problems/longest-subarray-with-sum-divisible-by-k1259/1#
//https://youtu.be/GrV3MTR_Uk0

const input = [-2, 2, -5, 12, -11, -1, 7];
const k = 3; 

const result = longSubArrayWithSumDivByK(input, input.length, k);
console.log(result); 

function longSubArrayWithSumDivByK(array, n, k) {
  let hashMap = new Map();
  hashMap.set(0, -1); 

  let ans = 0;
  let total = 0;
  let remainder = 0; 

  for (let index = 0; index < array.length; index++) {
    total += array[index];
    remainder = ((total % k) + k) % k;

    if (hashMap.has(remainder)) {
      ans = Math.max(ans, index - hashMap.get(remainder));
    } else {
      hashMap.set(remainder, index);
    }
  }

  return ans;
}

