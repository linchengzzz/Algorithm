/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) return false;
    let a = head;
    let b = head.next;
    while (b !== null) {
        if (a === b) {
            return true;
        }
        b = b.next;
        if (b === null) return false;
        a = a.next;
        b = b.next;
    }
    return false;
};

let lists = [new ListNode(1), new ListNode(2), new ListNode(3), new ListNode(4)];
lists.forEach((item, i) => {
    item.next = lists[i + 1] || null;
});
// lists[3].next = lists[0];

console.log(hasCycle(lists[0]));
