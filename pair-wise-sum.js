// Algorithmic patterns used:

// * Two-Pointer Pattern (Modified)

//     - Uses nested loops to check all possible pairs
//     - Outer loop: i pointer
//     - Inner loop: j pointer starting from i+1
//     - Ensures we check each unique pair once

// * Set Pattern

//     - Uses Set data structure to track used indices
//     - Provides O(1) lookup for used index checks
//     - Ensures each index is used only once

// * Early Exit Pattern

    // - Uses continue to skip used indices
    // - Uses break when pair is found to move to next element
    // - Empty array check at start

// * Greedy Pattern

    // - Always takes first available valid pair
    // - Ensures lowest possible indices are used
    // - Once a pair is found, immediately marks indices as used



// * Time Complexity Analysis:

    // - Two nested loops: O(n²)
    // - Set operations: O(1)
    // - Overall: O(n²) where n is array length

// * Space Complexity:

    // - Set storage: O(n)
    // - Overall: O(n) where n is array length

// * Key aspects of the solution:

    // - Handles edge case of empty array
    // - Never reuses indices once they're part of a pair
    // - Uses lowest available indices for pairs
    // - Accumulates sum of indices progressively

function pairwise(arr, arg) {
    // Handle empty array case
    if (arr.length === 0) return 0;
    
    // Track used indices
    const used = new Set();
    let indexSum = 0;
    
    // Check each element
    for (let i = 0; i < arr.length; i++) {
        // Skip if index already used
        if (used.has(i)) continue;
        
        // Find matching pair with lowest available index
        for (let j = i + 1; j < arr.length; j++) {
            // Skip if index already used
            if (used.has(j)) continue;
            
            // Check if pair sums to target
            if (arr[i] + arr[j] === arg) {
                indexSum += i + j;
                used.add(i);
                used.add(j);
                break; // Found pair, move to next element
            }
        }
    }
    
    return indexSum;
}

// Test cases
console.log(pairwise([1, 4, 2, 3, 0, 5], 7));  // 11
console.log(pairwise([1, 3, 2, 4], 4));        // 1
console.log(pairwise([1, 1, 1], 2));           // 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));  // 10
console.log(pairwise([], 100));                // 0