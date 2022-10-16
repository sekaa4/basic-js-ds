const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.main = null;
	}

	root() {
		return this.main;
	}

	add(data) {
		this.main = addWithin(this.main, data);

		function addWithin(node, data) {
			if (!node) {
				return new Node(data);
			}

			if (node.data === data) {
				return node;
			}

			if (data < node.data) {
				node.left = addWithin(node.left, data);
			} else {
				node.right = addWithin(node.right, data);
			}

			return node;
		}
	}

	has(data) {
		return searchWithin(this.main, data);

		function searchWithin(node, data) {
			if (!node) {
				return false;
			}

			if (data === node.data) {
				return true;
			}

			if (data < node.data) {
				return searchWithin(node.left, data);
			} else {
				return searchWithin(node.right, data);
			}
		}
	}

	find(data) {
		return searchData(this.main, data);

		function searchData(node, data) {
			if (!node) {
				return null;
			}

			if (data === node.data) {
				return node;
			}

			if (data < node.data) {
				return searchData(node.left, data);
			} else {
				return searchData(node.right, data);
			}
		}
	}

	remove(data) {
		this.main = removeNode(this.main, data);

		function removeNode(node, data) {
			if (!node) {
				return null;
			}

			if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null
				}

				if (!node.left) {
					node = node.right;
					return node;
				}

				if (!node.right) {
					node = node.left;
					return node;
				}

				let minFromRight = node.right;
				while (minFromRight.left) {
					minFromRight = minFromRight.left;
				}
				node.data = minFromRight.data;
				node.right = removeNode(node.right, minFromRight.data);
				return node;
			}
		}
	}

	min() {
		if (!this.main) {
			return;
		}

		let node = this.main;
		while (node.left) {
			node = node.left;
		}

		return node.data;
	}

	max() {
		if (!this.main) {
			return;
		}

		let node = this.main;
		while (node.right) {
			node = node.right;
		}

		return node.data;
	}
}

module.exports = {
	BinarySearchTree
};
