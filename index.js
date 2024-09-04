import { add, subtract, multiply, divide } from './math.mjs'

console.log(add(10, 2))
console.log(subtract(1, 2))
console.log(multiply(1, 2))
console.log(divide(1, 2))

let user = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe',
  address: '123 Main St'
}

let userName = user.name

// Destructuring an object
const { name, email } = user
console.log(`Name: ${name}, Email: ${email}`)

// Destructuring an array
let numbers = [1, 2, 3, 4, 5]
let [a, b, c, d, e] = numbers
console.log(a, b, c, d, e)

// ... spread operator
// used to copy an array or object
console.log('copying an object')
let user2 = { ...user, age: 40 }
console.log(user2)

console.log('copying an array')
let numbers2 = [0, ...numbers, 6]
console.log(numbers2)