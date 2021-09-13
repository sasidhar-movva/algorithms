//https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1

let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
let n = 11;
let result = minJumps(arr, n);
console.log(result);

function minJumps(arr, n) {
  if (n <=1) {
    return 0;
  }

  if (arr[0] === 0) {
    return -1;
  }

  let maxReach = arr[0];

  let step = arr[0];

  let jump = 1;

  for (let i = 1; i < n; i++) {
    if (i === n-1) {
      return jump;
    }

    maxReach = Math.max(maxReach, i+arr[i]);

    step--;

    if (step === 0) {
      jump++;

      if (i>= maxReach) {
        return -1;
      }

      step = maxReach - i;
    }
  }

  return -1;
}
