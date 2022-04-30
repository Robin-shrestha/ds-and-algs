class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  lookup(value) {
    if (this.root === null) return false;

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        if (!currentNode.left) return false;
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) return false;
        currentNode = currentNode.right;
      }
    }
  }

  _isLeaf(node) {
    return node.left === null && node.right === null;
  }

  //   !this shit is not correct
  remove(value) {
    if (!this.root) return false;

    let prevLeaf = null;
    let previousNode = null;
    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) return false;
        prevLeaf = "left";
        previousNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) return false;
        prevLeaf = "right";
        previousNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        if (previousNode === null) {
          previousNode = this.root;
          prevLeaf = "right";
        }
        //  * node is leaf
        if (this._isLeaf(currentNode)) {
          previousNode[prevLeaf] = null;
        }
        // * node isnt a leaf
        else {
          let immediateRightNode = currentNode.right;
          //   * node doesnt have a right child
          if (!immediateRightNode) {
            previousNode[prevLeaf] = currentNode.left;
          } else {
            //   * right child of the node doesnt have a left child
            if (!immediateRightNode.left) {
              previousNode[prevLeaf] = immediateRightNode;
            }
            //   * right child of the node have a left child
            else {
              let temp = null;
              let lastLeftNode = immediateRightNode.left;
              while (true) {
                if (!lastLeftNode.left) {
                  break;
                }
                temp = lastLeftNode;
                lastLeftNode = lastLeftNode.left;
              }
              lastLeftNode.right = immediateRightNode;
              previousNode[prevLeaf] = lastLeftNode;
              temp.left = null;
            }
          }
        }
        return this;
      }
    }
  }
}

//          14
//       6     20
//     3   12  15  25

const tree = new BinarySearchTree();

tree.insert(14);
tree.insert(6);
tree.insert(3);
tree.insert(20);
tree.insert(15);
tree.insert(25);
tree.insert(12);
tree.insert(13);
tree.insert(11);
tree.insert(10);
tree.insert(9);

// console.log(tree.lookup(12));
// console.log(tree.lookup(45));
// tree.remove(7);
tree.remove(14);
// tree.remove(3);
console.log(tree);
console.log(JSON.stringify(tree));
