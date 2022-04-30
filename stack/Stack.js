class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (!this.top) return null;
    return this.top.value;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode;
    }
    newNode.next = this.top;
    this.top = newNode;

    this.length += 1;
    return newNode.value;
  }
  pop() {
    if (this.length === 0) throw new Error("stack empty");
    if (this.length === 1) {
      this.bottom = null;
    }
    const value = this.top.value;
    this.top = this.top.next;
    this.length -= 1;
    return value;
  }
  isEmpty() {
    return !this.length;
  }
}

const stack = new Stack();

console.log(stack.push("one"));
console.log(stack.push("two"));
// console.log(stack.push("three"));
// console.log(stack.push("four"));
// console.log(stack.push("five"));
// console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log("peek", stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log("peek", stack.peek());

console.log(stack);
