/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return [];
    if (!l1) return l2;
    if (!l2) return l1;
    let curNode;
    if (l1.val < l2.val) {
        curNode = l1;
        l1 = l1.next;
    } else {
        curNode = l2;
        l2 = l2.next;
    }
    let retNode = curNode;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curNode.next = l1;
            curNode = curNode.next;
            l1 = l1.next;
        } else {
            curNode.next = l2;
            curNode = curNode.next;
            l2 = l2.next;
        }
    }
    if (l1 === null) curNode.next = l2;
    if (l2 === null) curNode.next = l1;
    return retNode;
};

let lists1 = [new ListNode(1), new ListNode(2), new ListNode(4)];
let lists2 = [new ListNode(1), new ListNode(3), new ListNode(4)];

lists1.forEach((item, i) => {
    item.next = lists1[i + 1] || null;
});
lists2.forEach((item, i) => {
    item.next = lists2[i + 1] || null;
});

console.log(mergeTwoLists(lists1[0], lists2[0]));
