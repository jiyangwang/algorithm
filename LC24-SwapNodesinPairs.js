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