/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) {
      return head;
  }
  var newHead = head.next;
  head.next = swapPairs(head.next.next);
  newHead.next = head;
  return newHead;
};

var swapPairs = function(head) {
  if (head === null || head.next === null) {
      return head;
  }
  var preHead = new ListNode(0);
  preHead.next = head;
  var pre = preHead, cur = head;
  while (cur !== null && cur.next !== null) {
      pre.next = cur.next;
      pre = cur;
      cur = cur.next.next;
      pre.next.next = pre;
  }
  pre.next = cur;
  return preHead.next;
};