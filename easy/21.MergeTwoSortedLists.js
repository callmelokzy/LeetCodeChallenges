// Problem
/* You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.*/


// Solution
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
var mergeTwoLists = function(l1, l2) {
    // Create a dummy node and a tail pointer
    let dummy = new ListNode(0);
    let tail = dummy;
    
    // While both lists are not empty
    while (l1 && l2) {
        // Compare the values of the current nodes in both lists
        // Add the smaller node to the tail and move its pointer
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        // Move the tail pointer to the next node
        tail = tail.next;
    }
    
    // Add the remaining nodes of the non-empty list to the tail
    tail.next = l1 || l2;
    
    // Return the next node of the dummy node, which is the head of the merged list
    return dummy.next;
};
