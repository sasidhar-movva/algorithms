//https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1

let matrix = [ [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
           ];

let r = matrix.length;
let c = matrix[0].length;

let result = [];
printSpiralMatrix(matrix, r, c);
console.log(result);

function printSpiralMatrix(matrix, r, c) {
  printUtility(matrix, 0, 0, r, c);
  return result;
}

function printUtility(matrix, i, j, r, c) {
  if (i>= r || j>= c) return;

  for (let index = j; index < c; index++) {
    result.push(matrix[i][index]);
  }

  for (let index = i+1; index < r; index++) {
    result.push(matrix[index][c-1]);
  }

  if ((r-1) !== i) {
    for (let index = c-2; index >= j; index--) {
      result.push(matrix[r-1][index]);
    }
  }

  if((c-1) !== j) {
    for (let index = r-2; index > i; index--) {
      result.push(matrix[index][j]);
    } 
  }

  printUtility(matrix, i+1, j+1, r-1, c-1);
}