/**
 * JavaScript is always pass-by-value.
 * Primitives → value copied
 * Objects → reference copied.
 */
// primitives
function multiply (x, y) {
  x = x + 5
  y = y + 5
  const mult = x * y
  return mult
}
const a = 3
const b = 5
// console.log("before function call: ", a, b)
// const result = multiply(a, b)
// console.log(result)
// console.log("after function call: ", a, b);
// a, b doesn't change, cuz we work with their local copy: x, y

// non-primitive
const manik = { name: "manik", balance: 5000 };
const roton = { name: "roton", balance: 40000 };
console.log("before call", manik, roton);

function totalMoney(person1, person2) {
  person1.balance = 0
  person2.balance = person2.balance / 2
  const total = person1.balance + person2.balance
  return total
}
const balance = totalMoney(manik, roton)
console.log(balance)

console.log("aftr function call", manik, roton);
// changed