//https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1

let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];
let n = arr.length;
console.log(findNumberOfPlatformsRequired(arr, dep, n));

function findNumberOfPlatformsRequired(arr, dep, n) {
  let platforms = new Array(2361).fill(0);
  let requiredPlatforms = 1;

  for (let index = 0; index < n; index++) {
    ++platforms[arr[index]];

    --platforms[dep[index] + 1];
  }
  

  for (let i =1; i < 2361; i++) {
    platforms[i] = platforms[i] + platforms[i-1];

    requiredPlatforms = Math.max(requiredPlatforms, platforms[i]);
  }

  return requiredPlatforms;
}
