class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
    show() {
        return this.data;
    }
}
module.exports =  Node;

