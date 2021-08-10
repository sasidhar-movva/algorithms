//https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

let maze=[ [ 1, 0, 0, 0, 0 ],
[ 1, 1, 1, 1, 1 ],
[ 1, 1, 1, 0, 1 ],
[ 0, 0, 0, 0, 1 ],
[ 0, 0, 0, 0, 1 ] ];

let possiblePaths = [];
let path = '';
let N = maze.length;  

const result = findPath(maze, N);
console.log(result);

function findPath(maze, N) {
  let visited = new Array(N).fill(false).map(() => new Array(N).fill(false));
  solveMazeUtil(maze, 0, 0, N, visited);
}

function isSafe(maze, x, y, N, visited) {
   return  (x > -1 && x < N && y > -1 && y < N && maze[x][y] == 1 && !visited[x][y]);
}

function solveMazeUtil(maze, x, y, N, visited) {
  if (x === -1 || y === -1 || x === N || y === N || visited[x][y] || maze[x][y] === 0) {
    return;
  }

  if (x === N-1 && y === N-1) {
    possiblePaths.push(path);
    return;
  }

  visited[x][y] = true;

  if (isSafe(maze, x-1, y, N, visited)) {
    path += 'U';
    solveMazeUtil(maze, x-1, y, N, visited);
    path = path.substring(0, path.length - 1);
  }

  if (isSafe(maze, x+1, y, N, visited)) {
    path += 'D';
    solveMazeUtil(maze, x+1, y, N, visited);
    path = path.substring(0, path.length - 1);
  }

  if (isSafe(maze, x, y+1, N, visited)) {
    path += 'R';
    solveMazeUtil(maze, x, y+1, N, visited);
    path = path.substring(0, path.length - 1);
  }

  if (isSafe(maze, x, y-1, N, visited)) {
    path += 'L';
    solveMazeUtil(maze, x, y-1, N, visited);
    path = path.substring(0, path.length - 1);
  }

  visited[x][y] = false;
}
