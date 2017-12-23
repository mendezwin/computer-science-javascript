/*

Binary Search Tree!

Name your class Tree. 

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

Practical use case: When you have ordered data and you need to be able to search for nodes very quickly. 
Maybe like Elastic Search or Auto Complete.

*/

class Tree {
    constructor() {
      this.root = null;
    }
    add(value) {
      if (this.root === null) {
        this.root = new Node(value);
      }
      else {
        let current = this.root;
        while(true) {
          if (current.value > value) {
            // go left
            
            if (current.left) {
              current = current.left;
            }
            else {
              current.left = new Node(value);
              break;
            }
          }
          else {
            // go right
            if (current.right) {
              current = current.right;
            }
            else {
              current.right = new Node(value);
              break;
            }    
          }
        }
      }
      return this;
    }
    toJSON() {
      return JSON.stringify(this.root.serialize(), null, 4);
    }
    toObject() {
      return this.root.serialize();
    }
  }
  
  class Node {
    constructor(value=null, left=null, right=null) {
      this.left = left;
      this.right = right;
      this.value = value;
    }
    serialize() {
      const ans = { value: this.value };
      ans.left = this.left === null ? null : this.left.serialize();
      ans.right = this.right === null ? null : this.right.serialize();
      return ans;
    }
  }