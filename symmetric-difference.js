// Algorithmic patterns used:

// * Set Operations Pattern

//   - Uses Set data structure for efficient lookups and duplicates removal
//   - Key operations: has(), filter, conversion between arrays and sets
//   - Time complexity: O(1) for lookups
//   - Space complexity: O(n) where n is unique elements


// * Filter Pattern

//   - Used in symDiff helper function
//   - Filters elements that exist in one set but not in the other
//   - Pattern: filter(x => !otherSet.has(x))
//   - Creates two filtered arrays for each pair of sets


// * Reduce Pattern (Fold)

//   - Reduces multiple arrays into a single result
//   - Uses accumulator to build final result iteratively
//   - Applied on mapped array of Sets
//   - Pattern: reduce((acc, set) => symDiff(acc, set))


// * Transform and Conquer Pattern

//   - Transforms input arrays to Sets
//   - Solves problem in Set form
//   - Transforms back to array for output
//   - Sequence: Array → Set → Symmetric Difference → Array


// * Spread Pattern

//   - Used in three places:
  
//     - Function parameters: ...args
//     - Set to Array conversion: [...setA]
//     - Final result: [...result]

  
// * Time Complexity Analysis:

//   - Array to Set conversion: O(n)
//   - Set operations: O(n)
//   - k sets being compared: O(k)
//   - Overall: O(n×k) where n is largest array size and k is number of arrays

// * Space Complexity:

//   - Sets storage: O(n)
//   - Filtered arrays: O(n)
//   - Overall: O(n) where n is total unique elements


// Function that accepts a variable number of sets and returns the symmetric difference of the sets

function sym(...args) {
    // Helper function to find symmetric difference of two sets
    const symDiff = (setA, setB) => { // setA and setB arguments are Set objects
      return new Set( // Return a new Set object
        [...setA].filter(x => !setB.has(x)) // Filter out elements that are in setA but not in setB
          .concat([...setB].filter(x => !setA.has(x))) // Concatenate elements that are in setB but not in setA
      );
    };
  
    // Reduce the arrays into a single symmetric difference
    return [...args.map(arr => new Set(arr)) // Convert each array into a Set object
                   .reduce((acc, set) => symDiff(acc, set))]; // Reduce the sets into a single symmetric difference
  }

// Test cases
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // [3, 5, 4]
console.log(sym([5, 7], [5, 7])); // []
console.log(sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5])); 
console.log(sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5], [1, 2, 3])); // [4, 5]
console.log(sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5], [1, 2, 3], [6])); // [4, 5, 6]
console.log(sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5], [1, 2, 3], [6], [6])); // [4, 5]
console.log(sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5], [1, 2, 3], [6], [6], [7])); // [4, 5, 7]
console.log(sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5], [1, 2, 3], [6], [6], [7], [8])); // [4, 5, 7, 8]
console.log(sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5], [1, 2, 3], [6], [6], [7], [8], [9])); // [4, 5, 7, 8, 9]
console.log(sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5], [1, 2, 3], [6], [6], [7], [8], [9], [10])); // [4, 5, 7, 8, 9, 10]
