// create arrow functions for math operations
// add, subtract, multiply, divide

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// CommonJS module syntax
// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide
// }

// ESM synatx
export { add, subtract, multiply, divide };