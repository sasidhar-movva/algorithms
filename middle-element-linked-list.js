//https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1#
let head; // head of linked list
 
/* Linked list node */
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

for (i = 6; i > 0; --i) {
  push(i);
}

const result = getMiddle(head);

console.log(result);

function push(new_data) {
  /*
   * 1 & 2: Allocate the Node & Put in the data
   */
  var new_node = new Node(new_data);

  /* 3. Make next of new Node as head */
  new_node.next = head;

  /* 4. Move the head to point to new Node */
  head = new_node;
}

/* Should return data of middle node. If linked list is empty, then  -1*/
function getMiddle(node)
{ 
  if (!node) {
   return -1;
  }
  let slowNode = head;
  let fastNode = head;
  
  while (fastNode.next !== undefined && fastNode.next.next !== undefined) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }

  if (fastNode.next !== undefined) {
    return slowNode.next.data;
  } else {
    return slowNode.data;
  }
}
