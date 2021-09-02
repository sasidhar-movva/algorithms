//https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1#

let mat = [ [ 10, 10, 2, 0 ],
            [ 1, 0, 0, 30],
            [ 0, 10, 4, 0 ],
            [ 1, 0, 2, 20 ] ];

let result = findMaxPathSumInMatrix(mat, 4);
console.log(result);

function findMaxPathSumInMatrix(mat, n) {
  let res = -1;

  if (n === 1) {
    return mat[0][0];
  }

  for(let i = 1; i < n; i++)
  {
      res = -1;
      for(let j = 0; j < n; j++)
      {
           
          // When all paths are possible
          if (j > 0 && j < n - 1)
              mat[i][j] += Math.max(mat[i - 1][j],
                           Math.max(mat[i - 1][j - 1],
                                    mat[i - 1][j + 1]));

          // When diagonal right is not possible
          else if (j > 0)
              mat[i][j] += Math.max(mat[i - 1][j],
                                    mat[i - 1][j - 1]);

          // When diagonal left is not possible
          else if (j < n - 1)
              mat[i][j] += Math.max(mat[i - 1][j],
                                    mat[i - 1][j + 1]);

          // Store max path sum
          res = Math.max(mat[i][j], res);
      }
  }
  return res;
}
