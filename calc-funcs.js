// Calculating with Functions

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


function zero(oper) {
    return oper === undefined ? '0' : Math.floor(eval('0' + oper))
}
function one(oper) {
    return oper === undefined ? '1' : Math.floor(eval('1' + oper))
}
function two(oper) {
    return oper === undefined ? '2' : Math.floor(eval('2' + oper))
}
function three(oper) {
    return oper === undefined ? '3' : Math.floor(eval('3' + oper))
}
function four(oper) {
    return oper === undefined ? '4' : Math.floor(eval('4' + oper))
}
function five(oper) {
  return oper === undefined ? '5' : Math.floor(eval('5' + oper))
}
function six(oper) {
    return oper === undefined ? '6' : Math.floor(eval('6' + oper))
}
function seven(oper) {
    return oper === undefined ? '7' : Math.floor(eval('7' + oper))
}
function eight(oper) {
    return oper === undefined ? '8' : Math.floor(eval('8' + oper))
}
function nine(oper) {
    return oper === undefined ? '9' : Math.floor(eval('9' + oper))
}

function plus(num) {
    return `+ ${num}`
}
function minus(num) {
    return `- ${num}`
}
function times(num) {
    return `* ${num}`
}
function dividedBy(num) {
    return `/ ${num}`
}

console.log(seven(times(five())))//, 35, "seven(times(five ()))");
console.log(four(plus(nine())))//, 13, "four (plus(nine ()))");
console.log(eight(minus(three())))//,  5, "eight(minus(three()))");
console.log(six(dividedBy(two())))//,  3, "six(dividedBy(two()))");
console.log(four(dividedBy(three())))//: expected 1.3333333333333333 to equal 1)
console.log(nine(dividedBy(six())))//: expected 2 to equal 1)