// Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym(args) {

    // Helper function to find symmetric difference of two sets
    const symmetricDiff = (setA, setB) => {
        // Filter out elements that are in setA but not in setB
        var notInSetB = [...setA].filter(x => !setB.has(x));
        // Concatenate elements that are in setB but not in setA
        var notInSetA = [...setB].filter(x => !setA.has(x));
        // Concatenate elements that are in setB but not in setA
        var result = notInSetB.concat(notInSetA);
        console.log(result);
        // Return a new Set object with the symmetric difference of setA and setB
        return new Set(result);
    };

    // Reduce all array args into a single symmetric difference array
    
    // Reduce the arrays into a single symmetric difference
    return [...args.map(arr => new Set(arr)) // Convert each array into a Set object
        .reduce((acc, set) => symDiff(acc, set))]; // Reduce the sets into a single symmetric difference
  }
  
// Test cases
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // [3, 5, 4]
console.log(sym([5, 7], [5, 7])); // []
console.log(sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5])); 