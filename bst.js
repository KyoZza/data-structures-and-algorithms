class BSTNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  /**
   * @type {BSTNode}
   */
  #root = null;

  add(data) {
    const node = this.#root;

    if(!node) {
      this.#root = new BSTNode(data);
    } else {
      /**
       * @param {BSTNode} node 
       */
      const searchTree = node => {
        if (data < node.data) {
          if (!node.left)
            node.left = new BSTNode(data);
          else 
            searchTree(node.left);
        } else if(data > node.data) {
          if (!node.right) 
            node.right = new BSTNode(data);
          else
            searchTree(node.right);
        }
      }

      searchTree(node);
    }
  }

  findMin() {
    let node = this.#root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  findMax() {
    let node = this.#root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  find(data) {
    let node = this.#root;

    while(node) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else {
        return node;
      }
    }

    return undefined;
  }

  remove(data) {
    /**
     * @param {BSTNode} node 
     */
    const removeNode = (node, data) => {
      if(!node) return null;

      if(data < node.data) {
        node.left = removeNode(node.left);
      } else if(data > node.data) {
        node.right = removeNode(node.right);
      } else {
        if (!(node.left || node.right)) 
          return null;

        if(!node.right) 
          return node.left;

        if(!node.left) 
          return node.right;

        let tmpNode = node.right;
        while(tmpNode.left) {
          tmpNode = tmpNode.left;
        }

        node.data = tmpNode.data;
        node.right = removeNode(node.right, node.data)
      }

      return node;
    }

    this.#root = removeNode(this.#root, data);
  }
}

const bst = new BST();

bst.add(50);
bst.add(17);
bst.add(12);
bst.add(23);
bst.add(72);
bst.add(54);
bst.add(76);
bst.add(12);
bst.add(9);
bst.add(19);
bst.add(14);
bst.add(67);


console.log(bst.findMax());
console.log(bst.find(23));
console.log(bst.find(67));
console.log(bst.find(68));

bst.remove(17);
bst.remove(54);
console.log(bst);