/**
 *! Big O of Binary Search Tree
 *
 * Insertion = O(log n)
 * Removal = O or O
 * Searching = O(log n)
 * Access = O
 *
 */

/** Node */
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

/** BST */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /** Inserts a node in the correct position on the tree */
  insert(value) {
    // Creates a new node
    var node = new Node(value);
    // IF there is a root
    if (this.root) {
      let current = this.root;
      while (true) {
        // IF the value already exists on the list, return undefined
        if (value === current.value) return undefined;
        // IF the value of the new node is greater than the value of the node
        if (value > current.value) {
          // IF there is a node to the right
          if (current.right) {
            // Moves to that node and repeat these steps
            current = current.right;

            // Otherwise, add that node as the right property
          } else {
            current.right = node;
            return this;
          }
          // Otherwise, IF the value of the new node is less than the value of the node
        } else {
          // IF there is a node to the left
          if (current.left) {
            // Moves to that node and repeat these steps
            current = current.left;

            // Otherwise, add that node as the left property
          } else {
            current.left = node;
            return this;
          }
        }
      }
      // Otherwise, the root now becomes the new node
    } else {
      this.root = node;
      return this;
    }
  }

  /** Search if the value is on the tree */
  find(value) {
    // IF there is a root
    if (this.root) {
      let current = this.root;
      while (true) {
        // IF the value is equal to the value of the root
        if (value === current.value) {
          return current;
        }

        // IF the value of the new node is greater than the value of the node
        else if (value > current.value) {
          // IF there is a node to the right
          if (current.right) {
            // Moves to that node and repeat these steps
            current = current.right;

            // Otherwise, add that node as the right property
          } else {
            return undefined;
          }
          // Otherwise, IF the value of the new node is less than the value of the node
        } else {
          // IF there is a node to the left
          if (current.left) {
            // Moves to that node and repeat these steps
            current = current.left;

            // Otherwise, add that node as the left property
          } else {
            return undefined;
          }
        }
      }
      // Otherwise, the root now becomes the new node
    } else {
      return undefined;
    }
  }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(11);
tree.insert(16);
tree.insert(7);

console.log(tree.find(50));

console.log(tree);
