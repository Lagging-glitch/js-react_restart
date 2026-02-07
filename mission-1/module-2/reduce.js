const numbers = [4, 5, 6, 8, 12];

// let sum = 0;
// for (const num of numbers) {
//   sum = sum + num;
// }

//-------using reduce()
const total = numbers.reduce((acc, curr) => acc + curr, 0);
// acc: accumulator: similar to sum
// curr: current value: similar to num
// 0: initial value

console.log(total);
