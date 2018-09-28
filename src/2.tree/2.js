const Node = require('./1.Node');
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const buildTree = (arr, node, i) => {
    const leftIndex = 2 * i + 1;
    const rightIndex = 2 * i + 2;
    if (leftIndex < arr.length) {
        const childNode = new Node(arr[leftIndex]);
        node.leftChild = childNode;
        buildTree(arr, childNode, leftIndex);
    }
    if (rightIndex < arr.length) {
        const childNode = new Node(arr[rightIndex]);
        node.rightChild = childNode;
        buildTree(arr, childNode, rightIndex);
    }
};
const node = new Node(arr[0]);
buildTree(arr, node, 0);
console.log(node);