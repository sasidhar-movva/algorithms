// https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1#

const input = [7, 8, 1, 4];

let result = [];
findNextGreaterElementInArray(input, input.length);
console.log(result);

function findNextGreaterElementInArray(arr, n) {
  const stack = [];
  result = new Array(n);
  for (let i = n - 1; i >= 0; i--)
  {
      while (!stack.length == 0 &&
            stack[stack.length - 1] <= arr[i])
          stack.pop();
      
      if (stack.length == 0)
          result[i] = -1;        
      else
          result[i] = stack[stack.length - 1];        
   
      stack.push(arr[i]);
  }
  return result;
}
