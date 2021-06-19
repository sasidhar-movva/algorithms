//https://practice.geeksforgeeks.org/problems/make-binary-tree/1

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new LinkedList(22);
head.next = new LinkedList(44);
head.next.next = new LinkedList(40);
head.next.next.next = new LinkedList(54);
head.next.next.next.next = new LinkedList(86);
head.next.next.next.next.next = new LinkedList(20);
head.next.next.next.next.next.next = new LinkedList(48);
head.next.next.next.next.next.next.next = new LinkedList(35);
head.next.next.next.next.next.next.next.next = new LinkedList(74);
head.next.next.next.next.next.next.next.next.next = new LinkedList(97);

const root = convertLinkedListToTree(head);
console.log('testing');

function convertLinkedListToTree(head) {

    let root = new TreeNode(head.data);
    let parent = root;
    let grandParent = root;
    head = head.next;
    let firstIteration = true;

    while (head.data) {
        if (head === null) return root;
        parent.left = new TreeNode(head.data);

        if (head.next === null) {
            head = head.next;
            return root;
        }
        parent.right = new TreeNode(head.next.data);

        head = head.next.next;

        if (firstIteration) {
            firstIteration = false;
            parent = grandParent.left;
        } else {
            if (grandParent.right.left) {
                grandParent = grandParent.left;
                parent = grandParent.left;
            } else {
                parent = grandParent.right;
            }
        }
    }

    return root;
}
