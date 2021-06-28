//https://practice.geeksforgeeks.org/problems/convert-level-order-traversal-to-bst/1

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class NodeDetails {
    constructor(node, min, max) {
        this.node = node;
        this.min = min;
        this.max = max;
    }
}

const arr = [7,4,12,3,6,8,1,5,10];

const result = constructBst(arr, arr.length);
console.log(result);

function constructBst(arr, n) {
   
  let root = new Node(arr[0]);
  
  let q= [];

  q.push(new NodeDetails(root, -100000000, 100000000));

  let i = 1;

  while (q.length > 0) {
      let temp = q.shift();
      
      if (i < n && temp.min < arr[i] && arr[i] < temp.node.data) {
          temp.node.left = new Node(arr[i]);
          i++;
          q.push(new NodeDetails(temp.node.left, temp.min, temp.node.data));
      }

      if (i < n && temp.node.data < arr[i] && arr[i] < temp.max) {
          temp.node.right = new Node(arr[i]);
          i++;
          q.push(new NodeDetails(temp.node.right, temp.node.data, temp.max));
      }
  }

  return root;
}
