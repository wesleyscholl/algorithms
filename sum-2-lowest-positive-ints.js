// Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers) {  
    // Sort the array in ascending order, Take the first two elements (the two smallest numbers), Add these two numbers
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((sum, num) => sum + num)
  }

// Test cases
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) // 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) // 10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])) // 24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])) // 16
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])) // 3453455
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])) // 7  