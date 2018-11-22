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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str = '';
    let str_reverse = '';
    while (head) {
        str += head.val;
        str_reverse = head.val + str_reverse;
        head = head.next;
    }
    return str === str_reverse;
};
/**
 * @param {ListNode} node
 * @param {ListNode} lastNode
 */
function nextNode(node, latNode, count) {
    count++;
    if (count > 1000) return false;
    if (node.next) {
        let ret = nextNode(node.next, lastNode, count);
        if (count > 1000) return false;
        if (!ret.next && ret) return true;
        if (ret && ret.val === node.val) return ret.next;
        return false;
    } else {
        if (node.val === lastNode.val) return lastNode.next;
        return false;
    }
}

let lists = [new ListNode(1), new ListNode(2), new ListNode(2), new ListNode(1)];
lists.forEach((item, i) => {
    item.next = lists[i + 1] || null;
});

console.log(isPalindrome(lists[0]));
