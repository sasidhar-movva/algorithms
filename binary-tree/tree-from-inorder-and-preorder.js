//https://practice.geeksforgeeks.org/problems/construct-tree-1/1#

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const inOrder = [3,1,4,0,5,2];
const preOrder = [0,1,3,4,2,5];
let currentIndex = 0;

const result = buildTree(inOrder, preOrder, preOrder.length);
console.log(result);

function buildTree(inOrder, preOrder, n) {
    if (preOrder.length === 0) {
        return;
    }

  const result = buildTreeCore(inOrder, preOrder, 0, n-1);
  return result;
}

function buildTreeCore(inOrder, preOrder, start, end) {

    if (start > end) {
        return null;
    }
    let root = new Node(preOrder[currentIndex++]);

    if (start === end) {
        return root;
    }

    const rootIndex = inOrder.findIndex(x=> x === root.data);
    root.left = buildTreeCore(inOrder, preOrder, start, rootIndex-1);
    root.right = buildTreeCore(inOrder, preOrder, rootIndex+1, end);
    return root;
}
