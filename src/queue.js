const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.header = null;
    this.main = null;
  }

  getUnderlyingList() {
   return this.header;
  }

  enqueue(el) {
    let item = new ListNode(el);
    if (!this.header) {
      this.header = item;
      this.main = item;
    } else {
      this.main.next = item;
      this.main = item;
    }
  }

  dequeue() {
    if (!this.header) {
      return null;
    }
    let newItem = this.header.value;
    this.header = this.header.next;
    if (!this.header) {
      this.main = null;
    }
    return newItem;
  }
}


module.exports = {
  Queue
};
