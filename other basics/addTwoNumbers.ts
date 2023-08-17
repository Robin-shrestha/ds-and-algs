class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const x = [2, 4, 3];
const y = [5, 6, 4];

const makeLinkedList = (arr: number[]) => {
  return arr.reduce<ListNode | null>((acc, curr) => {
    if (acc) {
      return new ListNode(curr, acc);
    }
    return new ListNode(curr);
  }, null);
};

console.log(makeLinkedList(x));
console.log(makeLinkedList(y));
