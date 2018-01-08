public static ListNode insertNode(ListNode head, int val) {
    ListNode node = new ListNode(val);
    
    if (val < head.val) {
      node.next = head;
      return node;
    }
    
    ListNode cur = head;
    while (cur.next != null && val > cur.next.val) {
      cur = cur.next;
    }
    node.next = cur.next;
    cur.next = node;
    return head;
  }