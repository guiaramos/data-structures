/**
 *! Big O of Singly Linked List
 *
 * Insertion = O(1)
 * Removal = O(1) or O(n)
 * Searching = O(n)
 * Access = O(n)
 *
 */

class Node {
  constructor(val) {
    // Receives the data
    this.val = val;

    // Reference to next node
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  /***** Resets the list when user want to delete the last one item of the list   *****/
  resetWhenOneItem() {
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  /***** Inserts value to the last position of the list   *****/
  push(val) {
    // 1_ creates a new node using the value passed to the function
    const node = new Node(val);

    // 2_ IF there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      //3_ Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
      this.tail.next = node;
      this.tail = node;
    }
    //4_ increment the length by one
    this.length++;

    //5_ return the list
    return this;
  }

  /***** Removes the last node of the list   *****/
  pop() {
    // 1_ IF there are no nodes in the list, return undefined
    if (!this.head) return undefined;

    // 2_ Define variables for the current and previous nodes
    let current = this.head;
    let previous = current;

    //3_ Loop through the list until reach the tail
    while (current.next) {
      previous = current;
      current = current.next;
    }

    //4_ Set the next property of the 2nd to last node to be null
    previous.next = null;

    //5_ Set the tail to be the 2nd to last node
    this.tail = previous;

    // 6_ Decrease the length by 1
    this.length--;

    // 7_ Set the head and tail to null when there are only 1 item to be popped out
    this.resetWhenOneItem();

    // 8_ Return the value of the node removed
    return current;
  }

  /***** Removes the fist node of the list   *****/
  shift() {
    //   1_ IF there are no nodes, return undefined
    if (!this.head) return undefined;

    //   2_ Store the current head property in a variable
    let current = this.head;

    //   3_ Set the head property to be the current head's next property
    this.head = this.head.next;

    //   4_ Decrement the length by 1
    this.length--;

    // 5_ Set the head and tail to null when there are only 1 item to be popped out
    this.resetWhenOneItem();

    // 6_ Return the value of the node removed
    return current;
  }

  /***** Adds a node to the beginning of the list  *****/
  unshift(val) {
    // 1_ Create a new node using the value passed to the function
    const newNode = new Node(val);

    // 2_ IF there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) return this.push(val);

    // 3_ Otherwise, set the newly created node's next property to be the current head property on the list
    newNode.next = this.head;

    // 4_ Set the head property on the list to be that newly created node
    this.head = newNode;

    // 5_ Increment the length of the list by 1
    this.length++;

    // 6_ Return the linked list
    return this;
  }

  /***** Retrieves the item on the index informed *****/
  get(index) {
    // 1_ IF the index is less than zero or greater than or equal to the length of the list, return null

    if (index < 0 || index >= this.length) return null;

    // 2_ Define variable for the item to be retrieved
    let item = this.head;

    // 3_ Loop through the list until reach the index
    while (index > 0) {
      item = item.next;
      index--;
    }

    // 4_ Return the node at that specific index
    return item;
  }

  /*****  Changes the value of a node based on it's position in the linked list  *****/
  set(index, val) {
    // 1_ Define variable for locate the item
    let item = this.get(index);

    // 2_ LIF the node is not found, return null
    if (!item) return null;

    // 3_ Set the value of that node to be the value passed to the function
    item.val = val;

    // 4_ Return the changed item
    return item;
  }

  /*****  Adds a node to the Linked List at a specific position  *****/

  insert(index, val) {
    // 1_ IF the index is less than zero or greater than the length, return false
    if (index < 0 || index > this.length) return false;

    // 2_ IF the index is the same as the length, push a new node to the end of the list
    if (index === this.length) return this.push(val);

    // 3_ IF the index is 0, unshift a new node to the start of the list
    if (index === 0) return !!this.unshift(val);

    // 4_ Otherwise, using the get method, access the node at the index -1
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;

    // 5_ Set the property next that node to be the new node
    prev.next = newNode;

    // 6_ set the next property on the new node to be the previous next
    newNode.next = temp;

    // 7_ Increment the length
    this.length++;

    // 8_ Return true
    return true;
  }

  /*****  Removes a node from the linked list at a specific position  *****/
  remove(index) {
    // 1_ IF the index is less than zero or greater than the length, return undefined
    if (index < 0 || index > this.length) return undefined;

    // 2_ IF the index is the same as the length -1 , pop
    if (index === this.length - 1) return this.pop();

    // 3_ If the index is 0, shift
    if (index === 0) return this.shift();

    // 4_ Otherwise using the get method, access the node at the index -1
    let prevNode = this.get(index - 1);
    let removedNode = this.get(index);

    // 5_ Set the next property on that node to be the next of the next node
    prevNode.next = removedNode.next;

    // 6_ Decrement the length
    this.length--;

    // 7_ Return the value of the node removed
    return removedNode;
  }

  /*****  Reverses the Linked List in place  *****/
  reverse() {
    // 4_ Create a variable for node and initialize it to the head property
    let node = this.head;
    // 1_ Swap the head and tail
    this.head = this.tail;
    this.tail = node;
    // 2_ Create a variable for next
    let next = null;
    // 3_ Create a variable for previous
    let prev = null;
    // 5_ Loop through the list
    for (let i = 0; i < this.length; i++) {
      // 6_ Set next to be the next property on whatever node is
      next = node.next;
      // 7_ Set the next property on the node to be whatever prev is
      node.next = prev;
      // 8_ Set prev to be the value of the node variable
      prev = node;
      // 9_ Set the node variable to be the value of the next variable
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("HI");
list.push("THERE");
list.push("HOW");
list.push("ARE");
list.push("YOU");
list.push("DOING");

// console.log(list.get(0));
console.log(list);
console.log(list.insert(8, "FIRST"));
console.log(list);
