// const poem = 'amm pata jora jora'
// + 'marbo chabuk chorbo ghora'
//doesn't work

// const poem = 'amm pata jora jora \n'
//  + 'marbo chabuk chorbo ghora \n'
//works

//---template literal----------
// const poem = `amm pata jora jora
// marbo chabuk chorbo ghora`

// console.log(poem)

function sum (num1, num2){
  let result = num1 + num2;
  // let output = 'sum of ' + num1 + ' and ' + num2 + " is " + result
  // too much trouble

  let output = `sum of ${num1} and ${num2} is ${result}`

  console.log(output)
}
sum(3, 2)
