/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var slow = head;
  var fast = head;
  for (var i = 0; i < n; i++) {
      fast = fast.next;
  }
  if (fast === null) {
      return head.next;
  }
  while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};