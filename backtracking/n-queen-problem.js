//https://practice.geeksforgeeks.org/problems/n-queen-problem0315/1#

let ett = solveNQ(4);

console.log(ett);

function solveNQ(N) {
  let board = new Array(N).fill(0).map(() => new Array(N).fill(0));
  let result = [];
  solveNQueenUtil(board, 0, N, result);
  return result;
}

function isSafe(board, row, col, N) {
  for (let index = 0; index < col; index++) {
    if (board[row][index] === 1) {
      return false;
    }
  }

  for (let i = row, j = col; i > -1 && j > -1; i--, j--) {
    if (board[i][j] === 1) {
      return false;
    }
  }

  for (let i = row, j = col; i < N && j > -1; i++, j--) {
    if (board[i][j] === 1) {
      return false;
    }
  }

  return true;
}

function solveNQueenUtil(board, col, N, result) {
  if (col === N) {
    let tempResult = [];
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (board[row][col] === 1) {
          tempResult.push(col + 1)
        }
      }
    }

    result.push(tempResult);
    return true;
  }

  let res = false;
  for (let r = 0; r < N; r++) {
    if (isSafe(board, r, col, N)) {
      board[r][col] = 1;
      res = solveNQueenUtil(board, col + 1, N, result) || res;
      board[r][col] = 0;
    }
  }

  return res;
}
