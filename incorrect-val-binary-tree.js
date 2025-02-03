// Finding the Incorrect Value in a Binary Tree

// We are storing numbers in the nodes of a binary tree. The tree starts at the root node. The root has two child nodes, its leftchild and rightchild. Each of those nodes also has two child nodes, and so on, until we reach the leaf nodes, nodes that have no children. Each node stores one nonnegative integer. The value at every non-leaf node is supposed to be the sum of its two children. But the value at one node is incorrect. Find this node.

// Example: Consider the tree below. Note that 13 is the sum of 6 and 7, but the value 15 is incorrect, because 15 != 5 + 9 and 27 != 13 + 15. Clearly the 15 should be changed to 14.

//            27
//          /    \
//         13    15
//        /  \   / \
//       6   7  5   9
// The tree will always be full (all non-leaf nodes have exactly 2 children) and perfect (all leaves are on the bottom level). If we consider the root as level 1, its children as level 2, their children as level 3, and so on, the tree will contain at least 3 levels (and no more than 10). If the incorrect value occurs on the leaf level, then the right child will always be the incorrect one.

// The tree is provided as a list or array (as appropriate to the language), with the nodes in breath-first order. So:
// The root is element 0, its leftchild is element 1 and its rightchild is element 2;
// Element 1's leftchild is element 3 and its rightchild is element 4;
// Element 2's leftchild is element 5 and its rightchild is element 6, and so on.

// Your function should return the index of the incorrect node and the value that it should be changed to. In a language that doesn't allow multiple values to be returned, the Solution Setup shows what type to return (e.g. in Java an array of two integers, in C# a tuple of two integers).

// Examples:

// If the tree is [27, 13, 15, 6, 7, 5, 9], the function should return 2,14.

// If the tree is [21, 9, 10, 4, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4], the function should return 0,19.

// If the tree is [29, 13, 16, 5, 8, 9, 1], the function should return 6,7.
// This is because of the condition "if the incorrect value occurs on the leaf level, then the right child will always be the incorrect one." Since 9 + 1 != 16, the 1 must be changed to 7, rather than changing the 9 to 15.



function findIncorrectValue(tree) {
    // Helper function to find the sum of two children of a node
    const sumChildren = (index) => {
      // Get the children indices
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      // Return the sum of the children
      return tree[leftChild] + tree[rightChild];
    };

    // Helper function to check if a node is a leaf node
    const isLeaf = (index) => {
      // Check if the node has children
      return 2 * index + 1 >= tree.length;
    };

    // Iterate through the tree to find the incorrect value
    for (let i = 0; i < tree.length; i++) {
      // Check if the node is a leaf node
      if (isLeaf(i)) {
        // Check if the right child is incorrect
        if (tree[i] !== sumChildren(i)) {
          return [2 * i + 2, sumChildren(i)];
        }
      } else {
        // Check if the node value is incorrect
        if (tree[i] !== sumChildren(i)) {
          return [i, sumChildren(i)];
        }

        // Skip the right child of the leaf node
        i++;

        // Check if the left child is incorrect
        if (tree[i] !== sumChildren(i)) {
          return [2 * i + 1, sumChildren(i)];
        }

        // Check if the right child is incorrect
        if (tree[i + 1] !== sumChildren(i + 1)) {
          return [2 * i + 2, sumChildren(i + 1)];
        }
        }
    }
    return [];

  }
  
// Test cases
console.log(findIncorrectValue([27, 13, 15, 6, 7, 5, 9])) // [2, 14]
console.log(findIncorrectValue([27, 14, 14, 6, 7, 5, 9])) // [1, 13]
console.log(findIncorrectValue([27, 13, 15, 6, 7, 5, 9])) // [2, 14]
console.log(findIncorrectValue([29, 13, 16, 5, 8, 9, 1])) // [6, 7]
console.log(findIncorrectValue([21, 9, 10, 4, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4])) // [0, 19]
console.log(findIncorrectValue([19, 9, 10, 5, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4])) // [3, 4]
console.log(findIncorrectValue([19, 9, 10, 4, 5, 4, 6, 3, 2, 1, 4, 1, 3, 2, 4])) // [8, 1]
