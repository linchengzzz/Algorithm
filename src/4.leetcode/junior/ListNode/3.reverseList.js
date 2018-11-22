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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return [];
    if (!head.next) return head;
    new_head = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return new_head;
};

/**
 * 递归遍历链表
 * @param {ListNode} node
 */
function reverse(node) {
    if (node.next) {
        let ret = reverse(node.next);
        node.next = null;
        ret[0].next = node;
        return [node, ret[1]];
    } else {
        return [node, node]
    };
}

let lists = [new ListNode(1), new ListNode(2), new ListNode(3), new ListNode(4), new ListNode(5)];
lists.forEach((item, i) => {
    item.next = lists[i + 1] || null;
});

console.log(reverseList(lists[0]));
