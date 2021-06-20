//https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1#

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Dll {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
root.left = new Node(12);
root.right = new Node(15);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right.left = new Node(36);
let head;
let previous = null;

const result = bToDLL(root);
console.log('testing');

function bToDLL(root) {
    let dll = new Dll();

    if (root === null) {
        return dll;
    }

    processTree(root);

    return head;
}

function processTree(root) {
    if (root === null || root.data === null) return;

    if (root.left !== null) {
        processTree(root.left);
    }

    if (previous === null) {
        head = root;
    } else {
        previous.right = root;
        root.left = previous;
    }

    previous = root;

    if (root.right) {
        processTree(root.right);
    }

    return head;
}
