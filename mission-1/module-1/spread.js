const nums = [34, 56, 3, 78, 56]
// console.log(nums)
// console.log(...nums)

// const max = Math.max(12, 234, 55, 67

// const max = Math.max(nums))---> NaN
const max = Math.max(...nums)
// console.log(max)

//merging arrays
const letters = ['a', 's', 'k', 'd', 'g']
const numbers = [3, 4, 6, 9, 3]
const all = [...letters, ...numbers]

console.log(all)
