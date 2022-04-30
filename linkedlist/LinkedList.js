let linkedListStructure = {
  head: {
    value: 11,
    next: {
      value: 5,
      next: { value: 16, next: null },
    },
  },
};

class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  /**
   * starting value
   * @param {any} value
   */
  constructor(value) {
    this.head = new NewNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new NewNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    // this.head = { value: value, next: this.head }; // ?this works too
    this.length++;
    return this.printList();
  }
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index == 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index > this.length) {
      this.append(value);
      return this.printList();
    }
    let newNode = new NewNode(value);
    let pre = this._traverseToIndex(index - 1);
    let after = pre.next;
    pre.next = newNode;
    newNode.next = after;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    if (index >= this.length) {
      throw new Error("index doesn't exist");
    }
    let pre = this._traverseToIndex(index - 1);
    let unwantedNode = pre.next;
    pre.next = unwantedNode.next;

    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const newLL = new LinkedList(13);

newLL.prepend(12);
newLL.append(15);
// newLL.append(16);
// newLL.insert(2, 14);
// newLL.insert(0, 0);
// newLL.insert(100, 100);
// newLL.remove(2);
// console.log(newLL.printList());
newLL.reverse();
// console.log(newLL.reverse());
// console.log(newLL.printList());

exports.LinkedList = LinkedList;
