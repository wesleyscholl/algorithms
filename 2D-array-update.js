// Algo patterns used:

// * Hash Map Pattern

//   - Primary pattern used for efficient lookup and update operations
//   - Time complexity: O(1) for individual lookups and updates
//   - Space complexity: O(n) where n is the number of unique items
//   - Used to solve the "find and update or insert" requirement

// * Transform and Conquer Pattern

// - Transforms the data structure from array → map → array
//   Sequence:

//     - Transform input (array to map)
//     - Solve problem in transformed format (updates in map)
//     - Transform back (map to array)

// * Sort Pattern

//   - Final step uses comparison sort
//   - Time complexity: O(n log n) for the sorting operation
//   - Uses string comparison (localeCompare) for alphabetical ordering

    
// * Overall Time Complexity:

//   - Array to Map conversion: O(n)
//   - Updates: O(m) where m is length of arr2
//   - Map to Array conversion: O(n)
//   - Sorting: O(n log n)
//   - Final: O(n log n) where n is the total number of unique items

// * Overall Space Complexity:

//   - Hash Map: O(n)
//   - Result Array: O(n)
//   - Final: O(n)

function updateInventory(arr1, arr2) {
    // Convert current inventory to a map for easy lookup and updates
    const inventoryMap = new Map(
        arr1.map(([qty, item]) => [item, qty])
    );
    
    // Update or add new items from arr2
    for (const [qty, item] of arr2) {
        inventoryMap.set(item, (inventoryMap.get(item) || 0) + qty);
    }
    
    // Convert back to array and sort alphabetically by item name
    return Array.from(inventoryMap)
        .map(([item, qty]) => [qty, item])
        .sort((a, b) => a[1].localeCompare(b[1]));
}

// Test cases
console.log(updateInventory(
    [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
    [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
));

console.log(updateInventory(
    [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
    []
));

console.log(updateInventory(
    [],
    [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
));

console.log(updateInventory(
    [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
    [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]
));
