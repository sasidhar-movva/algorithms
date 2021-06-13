
//https://practice.geeksforgeeks.org/problems/foldable-binary-tree/1
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(7);
root.right = new Node(15);
root.left.right = new Node(9);
root.right.left = new Node(11);

const isTrue = isFoldable(root);

console.log("hi");

function isFoldable(root) {
  if (root === null) {
    return true;
  }

  const test = compareTwoChild(root.left, root.right);
  return test;
}

function compareTwoChild(left, right) {
  if (left === null && right === null) {
    return true;
  }

  if (left === null || right === null) {
    return false;
  }

  return compareTwoChild(left.left, right.right) && compareTwoChild(left.right, right.left);
}


