/*

Write a function to delete a node (except the tail) in a singly linked list,
given only access to that node.
Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third 
node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.

*/

import java.io.*;
import java.util.*;

class MyCode {
  static class ListNode {
    int val;
    ListNode next;
    public ListNode(int val) {
      this.val = val;
    }
  }
  
  public static void main (String[] args) {
    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    deleteNode(head.next);
    while (head != null) {
      System.out.println(head.val);
      head = head.next;
    }
  }
  
  public static void deleteNode(ListNode node) {
    int val = node.next.val;
    node.next = node.next.next;
    node.val = val;
  }
}