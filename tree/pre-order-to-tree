//https://practice.geeksforgeeks.org/problems/preorder-to-postorder4423/1

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
} 

const pre = [40, 30, 35, 80, 100];
const result = constructTree(pre, pre.length);

function constructTree(pre, size) {
    let root = new Node(pre[0]);
    for (let index = 1; index < size; index++) {
        addElementToTree(root, pre[index]);
    }
    return root;
}

function addElementToTree(root, number) {
    if (root.data > number) {
        if (root.left === null) {
            root.left = new Node(number);
        } else {
            addElementToTree(root.left, number);
        }
    } else if (root.data < number) {
        if (root.right === null) {
            root.right = new Node(number);
        } else {
            addElementToTree(root.right, number);
        }
    } else {
        return root;
    }
}
