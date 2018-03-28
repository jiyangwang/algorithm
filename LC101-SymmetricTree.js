/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var helper = function(left, right) {
  if (left === null && right === null) {
      return true;
  }
  if (left === null || right === null) {
      return false;
  }
  return left.val === right.val && helper(left.left, right.right) && helper(left.right, right.left);
}

var isSymmetric = function(root) {
  if (root === null) {
      return true;
  }
  return helper(root.left, root.right);
};