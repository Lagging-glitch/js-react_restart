const numbers = [4, 8, 2, 3, 5]

//----regular doubling
// const doubled = []
// for (const num of numbers){
//   const result = num*2
//   doubled.push(result)
// }

// --------map
// ------naming a function
// const doubleIt = x => x*2
// const doubled = numbers.map(doubleIt)

// not naming
const doubled = numbers.map(x => x * 2)
console.log(doubled)

//using strings
const names = ['mina', 'tina', 'rina', 'lina']

const nameLength = names.map(name => name.length)
const firstLetter = names.map(name => name[0])

console.log(firstLetter)