function sum(num1, num2) {
  const total = num1 + num2;
  console.log(total);
}

// sum(10, 20)

//more than parameters, doesn't count
// sum(10, 20, 30, 40, 9)

// less than params, NaN
// sum(10)

// empty, Nan
// sum();

// ---default parameters----------
function sum(num1, num2 = 0) {
  const total = num1 + num2;
  console.log(total);
}
// sum(10);
// sum(10,2);

/*
  * for +, - -> def.param = 0
  *for multip. -> def.param = 1
  *for string -> ''
  *array -> []
  *object -> {}
*/