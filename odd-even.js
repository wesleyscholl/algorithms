// Odd or Even?

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


function oddOrEven(array) {
    // Check for empty
    if (array.length === 0) {
        return "even"
    }
    // Check for length of 1
    if (array.length === 1) {
        return array[0] % 2 === 0 ? "even" : "odd"
    }
    // Iterate over array adding all values together
    var result = 0
    array.forEach(num => {
        result += num;
    });
    return result % 2 === 0 ? "even" : "odd";
 }

//  it('Edge tests', () => {
    console.log(oddOrEven([0]))//, 'even')
    console.log(oddOrEven([1]))//, 'odd')
    console.log(oddOrEven([]))//, 'even')
  
// //   it('Even tests', () => {
    console.log(oddOrEven([0, 1, 5]))//, 'even')
    console.log(oddOrEven([0, 1, 3]))//, 'even')
    console.log(oddOrEven([1023, 1, 2]))//, 'even')
  
// //   it('Negative Even tests', () => {
    console.log(oddOrEven([0, -1, -5]))//, 'even')
    console.log(oddOrEven([0, -1, -3]))//, 'even')
    console.log(oddOrEven([-1023, 1, -2]))//, 'even')
  
// //   it('Odd tests', () => {
    console.log(oddOrEven([0, 1, 2]))//, 'odd')
    console.log(oddOrEven([0, 1, 4]))//, 'odd')
    console.log(oddOrEven([1023, 1, 3]))//, 'odd')

// //   it('Negative Odd tests', () => {
    console.log(oddOrEven([0, -1, 2]))//, 'odd')
    console.log(oddOrEven([0, 1, -4]))//, 'odd')
    console.log(oddOrEven([-1023, -1, 3]))//, 'odd')