// Algorithmic patterns used in this solution:

// 1. **Divide and Conquer Pattern**
//    - Breaks problem into smaller subproblems
//    - Solves subproblems recursively
//    - Combines solutions to solve original problem
//    - Pattern: `quickSort(less) + pivot + quickSort(greater)`

// 2. **Pivot Selection Pattern**
//    - Chooses a pivot element (first element in this case)
//    - Used to partition array into two subarrays
//    - Pattern: `const pivot = arr[0]`

// 3. **Partitioning Pattern**
//    - Divides array into elements less than and greater than pivot
//    - Creates two new arrays for partitioning
//    - Pattern: `if (arr[i] <= pivot) less.push(arr[i]) else greater.push(arr[i])`

// 4. **Recursive Pattern**
//    - Base case: array of length 0 or 1
//    - Recursive case: sort both partitions
//    - Pattern: `if (array.length <= 1) return array`

// 5. **Array Spread Pattern**
//    - Uses spread operator to combine arrays
//    - Maintains immutability
//    - Pattern: `[...quickSort(less), pivot, ...quickSort(greater)]`

// Performance Characteristics:
// - Time Complexity: 
//   - Best/Average Case: O(n log n)
//   - Worst Case: O(n²) with poor pivot selection
// - Space Complexity: O(n) due to array copies

// Key aspects of Quicksort:
// 1. Efficient for large datasets
// 2. In-place sorting possible (though this implementation uses extra space for clarity)
// 3. Performance heavily depends on pivot selection
// 4. Unstable sort (may change relative order of equal elements)
// 5. Recursive implementation

// Advantages:
// 1. Usually faster in practice than other O(n log n) algorithms
// 2. Cache-friendly
// 3. Parallelizable
// 4. Can be optimized for specific data types


function quickSort(array) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
        return array;
    }
    
    // Create copy to maintain immutability
    const arr = [...array];
    
    // Choose first element as pivot
    const pivot = arr[0];
    
    // Partition array into less and greater subarrays
    const less = [];
    const greater = [];
    
    // Start from index 1 since pivot is at index 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }
    
    // Recursively sort subarrays and combine results
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

// Test cases
console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(quickSort([5, 4, 33, 2, 8]));
console.log(quickSort([20, 20, 31, 56, 1, 12, 12]));
console.log(quickSort([-9, 0, 25, -100, 3, 7]));