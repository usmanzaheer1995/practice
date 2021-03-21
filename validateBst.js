const { BST } = require("./bst");

// https://leetcode.com/problems/validate-binary-search-tree/submissions/
class ValidateBST extends BST {
  constructor() {
    super();
  }

  isValid() {
    const traverse = (root, min, max) => {
      if (root == null) {
        return true;
      }
      if (root.val <= min || root.val >= max) {
          return false;
      }
      return traverse(root.left, min, root.val) && traverse(root.right, root.val, max);
    }
    return traverse(this.root, -Infinity, Infinity);
  }
}
