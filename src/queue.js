const { NotImplementedError } = require('../extensions/index.js');

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
class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Queue {
	constructor() {
		this.head = null;
	}
	getUnderlyingList() {
		if (this.head) {
			return this.head;
		}
	}

	enqueue(value) {
		if (!this.head) {
			this.head = new ListNode(value);
			return;
		}

		let list = new ListNode(value);
		let current = this.head;
		let prev = null;

		while (current) {
			prev = current;
			current = current.next;
		}

		prev.next = list;
	}

	dequeue() {
		if (this.head) {
			let value = this.head.value;
			let next = this.head.next;
			this.head = next;
			return value;
		}
	}
}

module.exports = {
	Queue
};
