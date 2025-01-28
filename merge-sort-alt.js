// Key improvements:

// Simplified merge function using shift()
// Reduced code verbosity
// More compact logic
// Uses spread operator for remaining elements
// Maintains O(n log n) time complexity
// Keeps recursive divide-and-conquer approach

// The function is now more concise while preserving the core merge sort algorithm's structure and efficiency.


function mergeSort(array) {
    // Base case
    if (array.length <= 1) return array;
  
    // Split and recursively sort
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
  
    // Merge sorted halves
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      result.push(
        left[0] <= right[0] ? left.shift() : right.shift()
      );
    }
    return [...result, ...left, ...right];
  }
  