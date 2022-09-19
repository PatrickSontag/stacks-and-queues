/** Node: node for a stack. */

class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor(vals = []) {
    this.first = null;
    this.last = null;
    this.size = 0;

    for(let val of vals) this.push(val);
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new StackNode(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size ++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Stack;
