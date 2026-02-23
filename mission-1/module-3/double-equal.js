/**
 * == -> loose equality
 * coerce types if needed, then compare values
 * Primitives → compared by value
 * Objects & arrays → compared by reference (memory address)
 *
 */
// objects & arrays:
const a = [5];
const b = [5];
// console.log("2 arrays with 5 " a == b)
//false, 2 different array, 2 different memory locations

// console.log("2 empty objects " {} == {})
// false, different objects, different mem. locations

const p = [4, 5, 7, 8];
const q = p;
// console.log(p == q);
// true, same reference

// console.log(null == undefined); //true
// console.log(NaN == NaN) //false
// console.log([] == ''); // true

// triple equal: first compares the data-type; if same, then value
// console.log(null === undefined) // false
// console.log([] === '') // false
