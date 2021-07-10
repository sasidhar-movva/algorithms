https://practice.geeksforgeeks.org/problems/count-subarrays-with-equal-number-of-1s-and-0s-1587115620/1

const input = [1, 0, 0, 1, 0, 1, 1];

const result = countSubArrayWithEqualZeroAndOne(input, input.length);
console.log(result);

function countSubArrayWithEqualZeroAndOne(array, n) {
  let count = 0;
  let sum = 0;
  
  let hashMap = new Map();

 const array = arr.map(element => {
    if (element === 0) 
      return -1;
    else 
      return element;
  });

  for (let index = 0; index < n; index++) {
    sum += array[index];

    if (sum === 0) { 
      count += 1;
    }

    if (hashMap.has(sum)) {
      count += hashMap.get(sum);
    }

    if (!hashMap.has(sum)) {
      hashMap.set(sum ,1);
    } else {
      hashMap.set(sum, hashMap.get(sum) + 1);
    }
  }

  return count;
}
