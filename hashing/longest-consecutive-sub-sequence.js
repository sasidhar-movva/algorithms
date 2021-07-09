const input = [1,9,3,10,4,20,2]; 

const result = findLongestConsecutiveSubsequence(input, input.length);
console.log(result);

function findLongestConsecutiveSubsequence(array, n) {
  let hashMap = new Map();
  let ans = 0;

  array.forEach(element => {
    hashMap.set(element);
  });

  for (let index = 0; index < n; index++) {
    if (!hashMap.has(array[index] -1)) {
      let j = array[index];
      while (hashMap.has(j))
      j++;
      ans = Math.max(ans, j - array[index]);
    }
  }

  return ans;
}
