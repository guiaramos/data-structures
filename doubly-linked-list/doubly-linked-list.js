/**
 *? Big O of doubly Linked List
 *
 * Insertion = O(1)
 * !Removal = O(1)
 * Searching = O(n)
 * Access = O(n)
 *
 */

/*** Node class */
class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

/*** Doubly Linked List class */
class DoublyLinkedList {
  /** Defines the structure of the list */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /** Adds a new node to the end of the list */
  push(val) {
    // Creates a new node with the value passed in
    let node = new Node(val);
    // IF the head property is null set the head and tail to be the newly created node
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      // IF NOT, set the next property on the tail to be the node
      this.tail.next = node;
      // Set the previous property on the newly created node to be the tail
      node.previous = this.tail;
      // Set the tail to be the newly created node
      this.tail = node;
    }
    // Increment the length
    this.length++;
    // Return the list
    return this;
  }

  /** Removing a node from the end of the list */
  pop() {
    // IF the list is empty, returns undefined
    if (!this.head) return undefined;

    // Otherwise, creates a variable for the tail
    let removed = this.tail;

    // IF the length is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Updates the tail to be the previous Node
      this.tail = removed.previous;

      // Sets the new tail's next to null
      this.tail.next = null;

      // Sets the removed previous to null
      removed.previous = null;
    }
    // Decreases the length
    this.length--;

    // Returns the removed item
    return removed;
  }

  /** Removes a node from the beginning of the list */
  shift() {
    // IF the list is empty, returns undefined
    if (!this.head) return undefined;

    // Creates a variable for the removed node
    let removed = this.head;

    // IF the list has only 1 item, sets the head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Otherwise, sets the head next to the next node
      this.head = this.head.next;

      // Sets the tail of the head to null
      this.head.previous = null;

      // Clears the next of the removed node
      removed.next = null;
    }
    // Decreases the length
    this.length--;

    // Returns the removed item
    return removed;
  }

  /** Adds a node to the beginning of the list */
  unshift(val) {
    // IF the list is empty calls push
    if (!this.head) return this.push(val);

    // Creates a new node
    let node = new Node(val);

    // Sets the head previous to be the new node
    this.head.previous = node;

    // Sets the the new node next to the head
    node.next = this.head;

    // Updates the head to be the new node
    this.head = node;

    // Increases the length
    this.length++;

    // Returns the list
    return this;
  }

  /** Access a node in the list by its position */
  get(index) {
    // IF the list is empty or the index is bigger than the length, returns undefined
    if (!this.head || index >= this.length || index < 0) return undefined;

    // Creates a variable for the node and assign to the head
    let count = 0;
    let node = this.head;

    // IF the index is less than or equal to half of the length
    if (index <= this.length / 2) {
      // Loop through the list until reach the index and returns the node
      while (count !== index) {
        node = node.next;
        count++;
      }
    } else {
      // Otherwise, sets the node variable to the tail
      count = this.length - 1;
      node = this.tail;

      // Loop through the list until reach the index and returns the node
      while (count !== index) {
        node = node.previous;
        count--;
      }
    }

    // Returns the node
    return node;
  }

  /** Replaces the value of a node to the in a list */
  set(index, val) {
    // Creates a variable which is the result of the get method at the index passed
    let node = this.get(index);

    //IF the get method returns a valid node, set the value of that node to be the value passed
    if (node) {
      node.val = val;

      // Return true
      return true;
    }

    // Returns false
    return node;
  }

  /** Adds a node in the list by a certain position */
  insert(index, val) {
    // IF the index is 0, call unshift
    if (index === 0) return this.unshift(val);

    // IF the index is the same as the length call push
    if (index === this.length) return this.push(val);

    // Creates a variable which is the result of the "get" method at the index passed
    let prevNode = this.get(index - 1);

    // IF the variable is a valid node, creates a new node with the values passed
    if (prevNode) {
      let nextNode = new Node(val);

      // Sets the previous property of the new node to the previous property of the variable
      nextNode.previous = prevNode;

      // Sets the next property of the new node to the variable
      nextNode.next = prevNode.next;

      // Sets the previous property of the variable to the node
      prevNode.next = nextNode;

      // Increment the length
      this.length++;

      // Returns the list
      return this;
    }
    // Otherwise, return undefined
    return prevNode;
  }

  /** Removes a node in the list by certain position */
  remove(index) {
    // IF the index is 0, calls shift
    if (index === 0) return this.shift();

    // IF the index is equal to the length, calls pop
    if (index === this.length) return this.pop();

    // Creates a variable "currNode" for get the current node
    let currNode = this.get(index);

    // IF the currNode exists:
    if (currNode) {
      // Creates a variable "prevNode" that gets the previous node from the index
      let prevNode = currNode.previous;

      // Creates a variable "nextNode" for the next next node
      let nextNode = currNode.next;

      // Updates the next property of prevNode to the nextNode
      prevNode.next = nextNode;

      // Updates the nextNode previous property to the prevNode
      nextNode.previous = prevNode;

      // Sets the previous property of currNode to null
      currNode.previous = null;

      // Sets the next property of currNode to null
      currNode.next = null;

      // Decrements the length
      this.length--;

      // Returns currNode
      return currNode;
    }

    // Otherwise, return the currNode
    return currNode;
  }
}

const list = new DoublyLinkedList();
list.push("HI");
list.push("THERE");
list.push("HOW");
list.push("ARE");
list.push("YOU");
list.push("DOING");
list.push("HARRY");
list.push("RON");
list.push("HERMIONE");

console.log(list);

console.log(list.remove(-12));

console.log(list);
