/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var carry = 0;
  var preHead = new ListNode(0);
  var cur = preHead;
  while (l1 || l2 || carry) {
      var sum = 0;
      if (l1) {
          sum += l1.val;
          l1 = l1.next;
      }
      if (l2) {
          sum += l2.val;
          l2 = l2.next;
      }
      if (carry) {
          sum += carry;
      }
      carry = Math.floor(sum / 10);
      cur.next = new ListNode(sum % 10);
      cur = cur.next;
  }
  return preHead.next;
};