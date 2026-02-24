// post-increment: Use value first → then increase
// pre-increment: Increase first → then use value

let a = 2;

console.log("post-incre a", a++); // 2
console.log("old a", a); // 3

let b = 2;

console.log("pre-incre b", ++b); // 3
console.log("old b", b); // 3

let counter = 0;

console.log((counter = counter + 1)); // now counter=1
console.log((counter += 1)); // counter = 1 + 1 = 2