"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
  //  return this.children;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {

  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){

  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    let toVisitQueue = [this.root];
    let sum = 0;

    while(toVisitQueue.length){
      let current = toVisitQueue.pop();

      if (current == null) return sum;

      sum += current.val

      for(let child of current.children){
        toVisitQueue.push(child)
      }
    }

    return sum;

  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    let toVisitQueue = [this.root];
    let count = 0;

    while(toVisitQueue.length){
      let current = toVisitQueue.pop();

      if (current == null) return count;

      if (current.val % 2 === 0) {
        count += 1
      }

      for(let child of current.children){
        toVisitQueue.push(child)
      }
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    let toVisitQueue = [this.root];
    let count = 0;

    while(toVisitQueue.length){
      let current = toVisitQueue.pop();

      if (current == null) return count;

      if (current.val > lowerBound) {
        count += 1
      }

      for(let child of current.children){
        toVisitQueue.push(child)
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
