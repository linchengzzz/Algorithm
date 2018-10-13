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
    const l = new ListNode(0);
    let x = 0;
    let cur = l;
    while (l1 !== null || l2 !== null) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const s = n1 + n2 + x;
        cur.next = new ListNode(s % 10);
        cur = cur.next;
        x = s > 9 ? 1 : 0;
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    if (x > 0) {
        cur.next = new ListNode(1);
    }
    return l.next;
};
