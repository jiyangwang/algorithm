public static List<Integer> inOrder(TreeNode root) {
    List<Integer> res = new ArrayList<>();
    Deque<TreeNode> stack = new LinkedList<>();
    TreeNode cur = root;
    while (!stack.isEmpty() || cur != null) {
      if (cur != null) {
        stack.push(cur);
        cur = cur.left;
      } else {
        cur = stack.pop();
        res.add(cur.val);
        cur = cur.right;
      }
    }    
    return res;
  }