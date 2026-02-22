/**
 * type coercion: type conversion of one data type to another
 * Number() -> to number
 * String() -> to string
 */
let add = "5" + 2; //'52' concatenation
let substract = "5" - 2;
let multiply = "5" * 2;
let divide = "5" / 2;
let result = {
  add: add,
  minus: substract,
  multiply: multiply,
  division: divide,
};
// console.log(result)
// + prefers strings, -, *, / prefer numbers

// console.log(Number([5])+5) //10
// console.log(Number('5') + 5);// 10

// console.log(String(5) + 5) //55
