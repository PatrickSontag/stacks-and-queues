/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor(vals = []) {
    this.first = null;
    this.last = null;
    this.size = 0;

    for (let val of vals) this.enqueue(val);
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (this.first === null) {
      this.first = newNode;
    }
    if (this.last !== null) {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size ++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    try {
      if (this.size === 0) {
        throw new SyntaxError("Queue is empty.");
      }
    } catch(e) {
      console.log(e.message);
    }
    let firstNode = this.first;
    this.first = this.first.next
    this.size --;
    return firstNode.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Queue;
