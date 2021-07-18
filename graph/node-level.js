//https://practice.geeksforgeeks.org/problems/level-of-nodes-1587115620/1

const V = 8;
const graph = Array.from(Array(V+1), () => Array());
X=7;
graph[0].push(1);
graph[0].push(2);
graph[1].push(3);
graph[1].push(4);
graph[1].push(5);
graph[2].push(5);
graph[2].push(6);
graph[6].push(7);

const result = findNodelevel(V, graph, X);
console.log(result);

function findNodelevel(V, graph, X) {
 let visited = Array(V).fill(false);
 let nodeLevels = Array(V);

 let queue = [];

 nodeLevels[0] = 0;

 queue.push(0);

 visited[0] = true;

 let requiredNodeLevel = -1;

 while(queue.length) {
   let topNode  = queue.shift();

   for (let index = 0; index < graph[topNode].length; index++) {
     const element = graph[topNode][index];
     
     if (!visited[element]) {
      queue.push(element);
      nodeLevels[element] = nodeLevels[topNode] + 1;
      visited[element] = true;
     }

     if (element === X) {
       return nodeLevels[element];
     }
   }
 }

 return -1;
}
