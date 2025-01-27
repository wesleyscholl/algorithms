// Algorithmic patterns used:

// * Early Return Pattern

  // - Quick checks for single character and repeated character cases
  // - Uses Set for efficient duplicate detection


// * Iterative String Building Pattern

  // - Builds permutations by inserting each new character at all possible positions
  // - Avoids recursive calls
  // - More intuitive than Heap's Algorithm


// * Regular Expression Pattern

  // - Uses regex /(.)(?=\1)/ to find consecutive repeats
  // - (.) captures any character
  // - (?=\1) looks ahead for the same character

function permAlone(str) {
    // Return 1 for single character
    if (str.length === 1) return 1;

    // Return 0 if string has all same characters
    if (new Set(str).size === 1) return 0;

    let perms = [str[0]];

    // Generate all permutations
    for (let i = 1; i < str.length; i++) {
        const currentChar = str[i];
        const temp = [];

        // Insert current character at all possible positions
        for (const perm of perms) {
            for (let j = 0; j <= perm.length; j++) {
                temp.push(perm.slice(0, j) + currentChar + perm.slice(j));
            }
        }
        perms = temp;
    }
  
    // Filter permutations with consecutive repeats using regex
    return perms.filter(perm => !/(.)(?=\1)/.test(perm)).length;
}

console.log(permAlone("aab"), //should return a number.
permAlone("aab"), //should return 2.
permAlone("aaa"), //should return 0.
permAlone("aabb"), //should return 8.
permAlone("abcdefa"), //should return 3600.
permAlone("abfdefa"), //should return 2640.
permAlone("zzzzzzzz"), //should return 0.
permAlone("a"), //should return 1.
permAlone("aaab"), //should return 0.
permAlone("aaabb")) //should return 12.
