/* 
Dewey Decimal System

Divide and Conquer

Search by class, 
000

000-099
search by

*/

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    //set root node
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }

    if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      this.left.insert(key, value);
    }

    if (key > this.key) {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      this.right.insert(key, value);
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value;
    }
    if (key < this.key && this.left) {
      return this.left.find(key);
    }
    if (key > this.key && this.right) {
      return this.right.find(key);
    }
    throw new Error("Nothing found. Everything went wrong.");
  }

  remove(key) {
    if (key === this.key) {
      if (this.left && this.right) {
        const successor = this.right._findMinimum;
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
    } else if (this.left) {
      this._replaceWith(this.left);
    } else if (this.right) {
      this._replaceWith(this.right);
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      } else if (this === this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMinimum() {
    if (!this.left) {
      return this;
    }
    return this.left._findMinimum();
  }
}

module.exports = BinarySearchTree;

const drillBST = new BinarySearchTree();

drillBST.insert(25);
drillBST.insert(15);
drillBST.insert(50);
drillBST.insert(10);
drillBST.insert(24);
drillBST.insert(35);
drillBST.insert(70);
drillBST.insert(4);
drillBST.insert(12);
drillBST.insert(18);
drillBST.insert(31);
drillBST.insert(44);
drillBST.insert(66);
drillBST.insert(90);
drillBST.insert(22);

function preOrder(tree) {
  console.log(tree);
}

preOrder(drillBST);
