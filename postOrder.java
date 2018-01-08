public static List<Integer> postOrder(TreeNode root) {
    List<Integer> res = new ArrayList<>();
    Deque<TreeNode> stack = new LinkedList<>();
    stack.push(root);
    while (!stack.isEmpty()) {
      TreeNode cur = stack.pop();
      res.add(cur.val);
      if (cur.left != null) {
        stack.push(cur.left);
      }
      if (cur.right != null) {
        stack.push(cur.right);
      }
    }
    Collections.reverse(res);
    return res;
  }