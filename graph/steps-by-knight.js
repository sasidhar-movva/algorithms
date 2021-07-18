//https://practice.geeksforgeeks.org/problems/steps-by-knight5927/1#

class Cell {
  constructor(x, y, distanceFromKnight) {
    this.x = x;
    this.y = y;
    this.distanceFromKnight = distanceFromKnight;
  }
}

const N = 6;

const knightPosition = [4, 5];
const targetPosition = [1, 1];

const result = minimumStepsToReachTarget(knightPosition, targetPosition, N);
console.log(result);

function minimumStepsToReachTarget(knightPosition, targetPosition, N) {
  let visited = new Array(N+1).fill(false).map(() => new Array(N+1).fill(false));
  let dx = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
  let dy = [ -1, -2, -2, -1, 1, 2, 2, 1 ];

  let queue = [];

  queue.push(new Cell(knightPosition[0], knightPosition[1], 0));

  visited[knightPosition[0]][knightPosition[1]] = true;

  while (queue.length) {
    let topNode = queue.shift();

    if (topNode.x === targetPosition[0] && topNode.y === targetPosition[1]) {
        return topNode.distanceFromKnight;
    }

    for (let index = 0; index < dx.length; index++) {
        let newXCoordinate = topNode.x + dx[index];
        let newYCoordinate = topNode.y + dy[index];

      if (isValidPosition(newXCoordinate, newYCoordinate, N) && !visited[newXCoordinate][newYCoordinate]) {
        queue.push(new Cell(newXCoordinate, newYCoordinate, topNode.distanceFromKnight + 1));
        visited[newXCoordinate][newYCoordinate] = true;
      }
    }
  }

  return -1;
}


function isValidPosition(x, y, n) {
  return x >= 1 && x <= n && y >= 1 && y <= n;
}
