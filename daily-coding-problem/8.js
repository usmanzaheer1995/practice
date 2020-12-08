/*
A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
*/

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

/*
        5
       / \
      5   5 = 6
     / \   \
    5   5   5
*/
// const node = new Node(5);
// node.left = new Node(5);
// node.right = new Node(5);
// node.left.left = new Node(5);
// node.left.right = new Node(5);
// node.right.right = new Node(5);

/*
   0
  / \
 1   0  = 5
    / \
   1   0
  / \
 1   1
*/
// const node = new Node(0);
// node.left = new Node(1);
// node.right = new Node(0);
// node.right.left = new Node(1);
// node.right.right = new Node(0);
// node.right.left.left = new Node(1);
// node.right.left.right = new Node(1);

/*
     5
    / \
   1   5  = 4
  / \   \
 5   5   5
*/
const node = new Node(5);
node.left = new Node(1);
node.right = new Node(5);
node.left.left = new Node(5);
node.left.right = new Node(5);
node.right.right = new Node(5);

// console.log(JSON.stringify(node))

console.log(uniVal(node));

function uniVal(node) {
  if (node == null) return 0;
  if (node.left == null && node.right == null) return 1;
  const count = uniVal(node.left) + uniVal(node.right);
  if (node.left == null && node.right != null) {
    return node.right.value === node.value
      ? count + 1
      : count;
  } else if (node.right == null && node.left != null) {
    return node.left.value === node.value
      ? count + 1
      : count;
  } else if (node.right != null && node.left != null) {
    return node.right.value === node.value && node.left.value === node.value
      ? count + 1
      : count;
  }
  return count;
}