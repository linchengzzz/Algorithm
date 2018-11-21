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
var removeNthFromEnd = function (head, n) {
    if (!head.next) return null;
    let ret  = [];
    let i = 0;
    ret[0] = head;
    while (ret[i].next) {
        ret[i+1] = ret[i].next;
        i++;
    }
    if (ret.length === n) {
        return head.next;
    }
    ret[ret.length - n - 1].next = ret[ret.length - n].next;
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let lists = [new ListNode(1), new ListNode(2)];
lists.forEach((item, i) => {
    item.next = lists[i + 1] || null;
});
console.log(removeNthFromEnd(lists[0], 2));
