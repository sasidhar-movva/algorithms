//https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1

let arr = [ 1, 3, 3, 2, 3, 2 ];
let n = arr.length;

let result = findPartition(arr, n);
console.log(result);

function findPartition(arr, n) {
  let sum = arr.reduce((a,b) => a+b, 0);

  if (sum % 2 === 1) {
    return false;
  }

  let part = new Array(parseInt(sum/2 +1, 10)).fill(false);

  for (let index = 0; index < n; index++) {
    for (let j = parseInt(sum/2, 10); j >= arr[index]; j--) {
      if (part[j-arr[index]]  === true || j === arr[index]) {
        part[j] = true;
      }
    }
  }

  return part[parseInt(sum/2, 10)];
}
