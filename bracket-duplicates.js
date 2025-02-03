// Bracket Duplicates

// Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

// For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

// Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.


function stringParse(string){
    if (typeof string !== 'string') return "Please enter a valid string";
    return string.replace(/(.)\1{2,}/g, (m, c) => `${c}${c}[${c.repeat(m.length - 2)}]`);
  }

// Test cases
console.log(stringParse("aaaabbcdefffffffg")) // "aa[aa]bbcdeff[fffff]g"
console.log(stringParse("boopdedoop")) // "boopdedoop"
console.log(stringParse("helloookat")) // "helloo[o]kat"
console.log(stringParse(123)) // "Please enter a valid string"
console.log(stringParse(["hello", "world"])) // "Please enter a valid string"
console.log(stringParse({a: 1, b: 2})) // "Please enter a valid string"