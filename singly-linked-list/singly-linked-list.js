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
}

const list = new SinglyLinkedList();
list.push("HI");
list.push("THER");
list.push("HOW");
list.push("ARE");
list.push("YOU");
list.push("DOING");

// console.log(list.get(0));
console.log(list);
console.log(list.set(1, "THERE"));
console.log(list);
