//https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1#

const V = 4;
let adj = [] adj[0] = [1, 2];
adj[1] = [2];
adj[2] = [0, 3];
adj[3] = [3];
let res = isCyclic(adj);
console.log(res);

function isCyclic(adj) {
	let visited = new Array(V).fill(false);
	let recStack = new Array(V).fill(false);
	for (let i = 0; i < V; i++) {
		if (isCyclicUtil(i, visited, recStack)) {
			return true;
		}
	}
	return false;
}

function isCyclicUtil(i, visited, recStack) {
	if (recStack[i]) {
		return true;
	}
	if (visited[i]) {
		return false;
	}
	visited[i] = true;
	recStack[i] = true;
	let children = adj[i];
	for (let c = 0; c < children.length; c++) {
		if (isCyclicUtil(children[c], visited, recStack)) {
			return true;
		}
	}
	recStack[i] = false;
	return false;
}
