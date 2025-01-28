// ### Explanation of Patterns Used:

// - **Divide and Conquer**: The algorithm divides the search space in half with each iteration by adjusting the `left` and `right` pointers based on comparisons with the middle element.
  
// - **Iterative Approach**: This implementation uses a `while` loop to continue searching until the target is found or all possibilities are exhausted.

// - **Math.floor()**: The midpoint is calculated using `Math.floor()` to ensure it rounds down to the nearest integer.

// - **Path Tracking**: An array (`arrayPath`) is used to keep track of all middle values checked during the search process.

// This implementation meets all specified requirements and efficiently finds a target value in a sorted array while providing a clear path of comparisons made.


function binarySearch(searchList, value) {
  let left = 0;
  let right = searchList.length - 1;
  let arrayPath = [];

  while (left <= right) {
    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);
    // Record the middle value
    arrayPath.push(searchList[mid]);

    // Check if middle value is the target
    if (searchList[mid] === value) {
      return arrayPath; // Return the path including the target
    }

    // Adjust search bounds based on comparison
    if (searchList[mid] < value) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return "Value Not Found"; // Target not found in the array
}

// Example usage:
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 
  12, 13, 14, 15, 16, 17, 18, 
  19, 20, 21, 22, 23, 
  49, 70
];

// Testing the function with various values
console.log(binarySearch(testArray, 0));   // [13, 5, 2, 0]
console.log(binarySearch(testArray, 1));   // [13, 5, 2, 0, 1]
console.log(binarySearch(testArray, 2));   // [13, 5, 2]
console.log(binarySearch(testArray, 6));   // "Value Not Found"
console.log(binarySearch(testArray, 11));  // [13, 5, 10, 11]
console.log(binarySearch(testArray, 13));  // [13]
console.log(binarySearch(testArray, 70));   // [13,19,22,49,70]
