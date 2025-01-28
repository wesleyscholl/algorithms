// Algorithmic patterns used:

// 1. **Reduce with Object Accumulator Pattern**
//    - Uses reduce to maintain both sum and used indices
//    - Accumulator contains both the running sum and Set of used indices
//    - Eliminates need for separate variable declarations
//    - Pattern: `reduce((acc, num, i) => {...}, { sum: 0, used: new Set() })`

// 2. **Find First Match Pattern**
//    - Uses findIndex instead of nested loop
//    - Returns -1 if no match found
//    - More declarative than imperative looping
//    - Pattern: `findIndex((n, j) => conditions)`

// 3. **Chaining Pattern**
//    - Chains array methods together
//    - More functional programming style
//    - Reduces need for intermediate variables
//    - Pattern: Method chaining with `.reduce().sum`

// 4. **Compound Condition Pattern**
//    - Combines multiple conditions in findIndex
//    - Uses short-circuit evaluation
//    - Conditions: index order, not used, sum match
//    - Pattern: `j > i && !acc.used.has(j) && num + n === arg`

// 5. **Skip Pattern**
//     - Skips processing when current index is already used
//     - Prevents reuse of indices
//     - Pattern: if (!acc.used.has(i))

// Time Complexity remains O(n²), but the code is:
// - More concise (8 lines vs 25+ lines)
// - More functional in style
// - More declarative
// - Still maintains the same functionality

// Space Complexity remains O(n) for the Set of used indices.

// The key improvements are:
// 1. Eliminates explicit loops
// 2. Combines state management into single accumulator
// 3. Uses built-in array methods
// 4. More readable once you understand the functional style


function pairwise(arr, arg) {
    return arr
        .reduce((acc, num, i) => {
            if (!acc.used.has(i)) {  // Only look for pairs if current index isn't used
                const match = arr.findIndex((n, j) => 
                    j > i && 
                    !acc.used.has(j) && 
                    num + n === arg
                );
                
                if (match !== -1) {
                    acc.used.add(i).add(match);
                    acc.sum += i + match;
                }
            }
            return acc;
        }, { sum: 0, used: new Set() })
        .sum;
}

// Test cases
console.log(pairwise([1, 4, 2, 3, 0, 5], 7));  // 11
console.log(pairwise([1, 3, 2, 4], 4));        // 1
console.log(pairwise([1, 1, 1], 2));           // 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));  // 10
console.log(pairwise([], 100));                // 0