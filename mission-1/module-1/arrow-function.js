// function declaration
function add(num1, num2) {
  return num1 + num2
}

// function expression
const addition = function(num1, num2){
  return num1 + num2
}

//arrow function
const add2 = (num1, num2) => num1 + num2
const multiply = (a, b) => a * b

const result =(addition(1, 3))
console.log(result)
const mult = multiply(5, 4);
console.log(mult);

// multi-line arrow function
const doMath = (x, y) => {
  const makeDouble = x*2;
  const againDouble = y*2
  const answer = makeDouble + againDouble;
  // return answer
  console.log(answer)
}
doMath(2, 3)
 // ---regular arrow functions return automatically, no need to mention it. But multi-line don't do that, have to mention specifically--------------