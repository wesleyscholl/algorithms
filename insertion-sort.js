// Algorithmic patterns used in this solution:

// 1. **Insertion Pattern**
//    - Core sorting pattern that "inserts" elements into correct position
//    - Maintains sorted region at start of array
//    - Grows sorted region by inserting one element at a time
//    - Pattern: `Store currentElement, shift larger elements, insert in correct position`

// 2. **Shifting Pattern**
//    - Shifts elements right to make room for insertion
//    - Uses while loop to move elements
//    - Stops when correct position is found
//    - Pattern: `while (j >= 0 && arr[j] > currentElement) shift right`

// 3. **Growing Sorted Region Pattern**
//    - Starts with first element as sorted region
//    - Expands sorted region one element at a time
//    - Maintains invariant that left portion is always sorted
//    - Pattern: `for (let i = 1; i < arr.length; i++)`

// 4. **Element Caching Pattern**
//    - Stores current element in temporary variable
//    - Avoids multiple array accesses
//    - Makes room for shifts without losing value
//    - Pattern: `const currentElement = arr[i]`

// 5. **Array Copy Pattern**
//    - Creates copy of input array
//    - Preserves original array (immutability)
//    - Pattern: `[...array]`

// Performance Characteristics:
// - Time Complexity: 
//   - Best Case: O(n) when array is nearly sorted
//   - Average Case: O(n²)
//   - Worst Case: O(n²)
// - Space Complexity: O(1) auxiliary space (not counting input copy)

// Key advantages of Insertion Sort:
// 1. Very efficient for small data sets
// 2. Works well on nearly sorted arrays
// 3. Stable sorting algorithm (maintains relative order of equal elements)
// 4. Adaptive (runs faster on partially sorted arrays)
// 5. In-place algorithm
// 6. Online algorithm (can sort as it receives input)



function insertionSort(array) {
    const arr = [...array];
    
    for (let i = 1; i < arr.length; i++) {
        const currentElement = arr[i];
        let j = i - 1;
        
        // Move elements that are greater than currentElement
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Place currentElement in its correct position
        arr[j + 1] = currentElement;
    }
    
    return arr;
}

// Test cases
console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(insertionSort([5, 4, 33, 2, 8]));
console.log(insertionSort([20, 20, 31, 56, 1, 12, 12]));
console.log(insertionSort([3, -9, 1, 2, 7, 5]));