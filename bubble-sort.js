// Algorithmic patterns used in this solution:

// 1. **Bubble Pattern**
//    - Core sorting pattern that "bubbles up" larger elements
//    - Compares adjacent elements and swaps if out of order
//    - Largest unsorted element "bubbles" to its correct position in each pass
//    - Pattern: `if (arr[i] > arr[i + 1]) swap elements`

// 2. **Do-While Loop Pattern**
//    - Continues until no swaps are needed
//    - Guarantees at least one pass through the array
//    - Uses flag variable to track if any swaps occurred
//    - Pattern: `do { ... } while (swapped);`

// 3. **Flag Pattern**
//    - Uses `swapped` boolean to track if any changes made
//    - Reset at start of each pass
//    - Set when a swap occurs
//    - Determines when array is sorted
//    - Pattern: `swapped = false; /* ... */ swapped = true;`

// 4. **Destructuring Swap Pattern**
//    - Uses array destructuring for clean element swapping
//    - Avoids need for temporary variable
//    - Pattern: `[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]`

// 5. **Array Copy Pattern**
//    - Creates copy of input array
//    - Preserves original array (immutability)
//    - Pattern: `[...array]`

// Performance Characteristics:
// - Time Complexity: 
//   - Best Case: O(n) when array is already sorted
//   - Average Case: O(n²)
//   - Worst Case: O(n²)
// - Space Complexity: O(1) auxiliary space (not counting input copy)

// Key aspects of the implementation:
// 1. Maintains immutability by not modifying input array
// 2. Stops as soon as array is sorted (optimization)
// 3. Uses clean ES6+ syntax for swapping
// 4. Works with any comparable elements

function bubbleSort(array) {
    const arr = [...array]; // Create copy to avoid modifying original
    let swapped;
    
    do {
        swapped = false;
        
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    
    return arr;
}

// Test cases
console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
console.log(bubbleSort([20, 20, 31, 56, 1, 12, 12]));
console.log(bubbleSort([3, -9, 1, 2, 7, 5]));