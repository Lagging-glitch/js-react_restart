function total(a, b) {
  // console.log("nums adding: " + a, b)
  const sum = a +b
  // console.log(sum)
}
const result = total(5, 7)
// console.log("sum " + result) // undefined
//the function doesn't return anything, so can't see from outside function

function total2 (a, b) {
  console.log("params", a, b);
  if (a === undefined || b === undefined) {
    return undefined;
  }
  // if (a && b) {
  //    const sum = a + b;
  //    return sum;
  //  }
  // problematic, as this checks if a/b are truthy, so "a = 0" would return undefined
  return a + b
}
const total2Sum = total2(3, 2)
// console.log(total2Sum) // works

// console.log(typeof undefined) // undefined