// https://practice.geeksforgeeks.org/problems/length-of-largest-region-of-1s-1587115620/1

let grid = [[0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [1, 1, 1, 0, 0, 1, 0, 0]];

const rowSize = grid.length;
const colSize = grid[0].length;

let count = 0;
let res = largestRegion(grid);
console.log(res);

function largestRegion(grid) {
  let visited = new Array(rowSize).fill(false).map(() => new Array(colSize).fill(false));
  let result = [];

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        count = 1;
        dfs(grid, i, j, visited);

        result.push(count);
      }
    }
  }

  return Math.max(...result);
}

function dfs(grid, row, col, visited) {
  let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
  let colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

  visited[row][col] = true;

  for (let k = 0; k < 8; k++) {
    if (isSafe(grid, row + rowNbr[k], col + colNbr[k], visited)) {
      count++;
      dfs(grid, row + rowNbr[k], col + colNbr[k], visited);
    }
  }
}

function isSafe(grid, row, col, visited) {
  return (
    (row >= 0) && (row < rowSize) && (col >= 0)
    && (col < colSize)
    && (grid[row][col] == 1 && !visited[row][col]));
}
