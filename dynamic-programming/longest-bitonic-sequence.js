//https://practice.geeksforgeeks.org/problems/longest-bitonic-subsequence0824/1

let arr = [1, 11, 2, 10, 4, 5, 2, 1];
let result = longestBitonicSequence(arr);
console.log(result);

function longestBitonicSequence(arr) {
  let length = arr.length;

  let lis = new Array(length).fill(1);
  
  for (let index = 1; index < length; index++) {
    for (let j = 0; j < index; j++) {
      if (arr[index] > arr[j] && (lis[index] < lis[j] + 1)) {
       lis[index] = lis[j] + 1;
      }
    }
  }

  let lds = new Array(length).fill(1);

  for (let index = length -1; index >=0; index--) {
    for (let j = length -1; j > index; j--) {
      if (arr[index] > arr[j] && (lds[index] < lds[j] + 1)) {
        lds[index] = lds[j] + 1;
      }
    }
  }

  let max = lds[0]+ lis[0] - 1;
  for (let index = 1; index < length; index++) {
    max = Math.max(max, lis[index]+lds[index] - 1);
  }

  return max;
}
