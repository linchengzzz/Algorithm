class Stack {
    constructor() {
        this.stack = [];
    }
    push(o) {
        this.stack.push(o);
    }
    pop() {
        return this.stack.pop();
    }
    isEmpty() {
        if (this.stack.length <= 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Stack;
