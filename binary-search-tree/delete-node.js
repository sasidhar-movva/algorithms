class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
 
let root = new Node(1);
root.right = new Node(2);
root.right.right = new Node(8);
root.right.right.right = new Node(11);
root.right.right.right.left = new Node(9);
root.right.right.right.right = new Node(12);
root.right.right.left = new Node(5);
root.right.right.left.left = new Node(4);
root.right.right.left.right = new Node(7);
 
const result = deleteNode(root, 9);
console.log(result);
 
function deleteNode(root, x) {
 
    if (root === null) {
        return root;
    }
 
    if (root.data < x) {
        root.right = deleteNode(root.right, x);
    } else if (root.data > x) {
        root.left = deleteNode(root.left, x);
    } else {
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        } else {
            root.data = getMinValue(root.right);
            root.right = deleteNode(root.right, root.data);
        }
    }
    return root;
}
 
function getMinValue(root) {
    let minValue = root.data;
 
    while(root.left !== null) {
        minValue = root.data;
        root = root.left;
    }
    return minValue;
}
