// Algorithmic patterns used in this solution:

// 1. **Selection Pattern**
//    - Core sorting pattern that "selects" minimum value in each pass
//    - Maintains sorted and unsorted regions
//    - Grows sorted region from left to right
//    - Pattern: `Find minimum in unsorted region, swap to sorted region`

// 2. **Minimum Element Search Pattern**
//    - Inner loop finds minimum element in unsorted portion
//    - Tracks minimum using index rather than value
//    - Updates minimum index when smaller element found
//    - Pattern: `if (arr[j] < arr[minIndex]) minIndex = j`

// 3. **Partitioning Pattern**
//    - Divides array into sorted (left) and unsorted (right) portions
//    - Sorted portion grows by one element in each iteration
//    - Pattern: `for (let i = 0; i < arr.length - 1; i++)`

// 4. **Conditional Swap Pattern**
//    - Only performs swap if necessary
//    - Checks if minimum element is already in position
//    - Reduces unnecessary operations
//    - Pattern: `if (minIndex !== i) swap elements`

// 5. **Array Copy Pattern**
//    - Creates copy of input array
//    - Preserves original array (immutability)
//    - Pattern: `[...array]`

// Performance Characteristics:
// - Time Complexity: 
//   - Best Case: O(n²)
//   - Average Case: O(n²)
//   - Worst Case: O(n²)
// - Space Complexity: O(1) auxiliary space (not counting input copy)

// Key advantages of Selection Sort:
// 1. Makes the minimum possible number of swaps (O(n))
// 2. Performance is consistent regardless of input
// 3. Works well on small arrays
// 4. In-place sorting algorithm

function selectionSort(array) {
    const arr = [...array];
    
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        
        // Find minimum element in the unsorted portion
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap if minimum is not already at correct position
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

// Test cases
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));
console.log(selectionSort([20, 20, 31, 56, 1, 12, 12]));
console.log(selectionSort([3, -9, 1, 2, 7, 5]));