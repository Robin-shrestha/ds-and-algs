class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (!this.first) return null;
    return this.first.value;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return value;
  }
  dequeue() {
    if (this.length === 0) throw new Error("queue empty");
    if (this.length === 1) {
      this.last = null;
    }
    const value = this.first.value;

    this.first = this.first.next;
    this.length--;
    return value;
  }
  isEmpty() {
    return !this.length;
  }
}

const queue = new Queue();

console.log(queue.enqueue("first"));
console.log(queue.enqueue("second"));
console.log(queue.enqueue("third"));
console.log(queue.enqueue("fourth"));
console.log(queue.enqueue("fifth"));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log("peek", queue.peek());
console.log("isEmpty", queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log("peek", queue.peek());
console.log("isEmpty", queue.isEmpty());
console.log(queue);
