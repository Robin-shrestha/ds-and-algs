var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var x = [2, 4, 3];
var y = [5, 6, 4];
var makeLinkedList = function (arr) {
    return arr.reduce(function (acc, curr) {
        if (acc) {
            return new ListNode(curr, acc);
        }
        return new ListNode(curr);
    }, null);
};
console.log(makeLinkedList(x));
console.log(makeLinkedList(y));
