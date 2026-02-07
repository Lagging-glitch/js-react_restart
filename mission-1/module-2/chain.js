const student = {
  name: "rafid",
  marks: 90,
  family: {
    title: 'bhuiyan',
    // mother: {
    //   name: 'noor jahan',
    //   age: 45
    // },
  },
  1: 50,
  "home-address": "kochu khet",
};

//------- chaining
// console.log(student.family.title)
console.log(student.family.mother?.age)
//----optional chain
/*
 * when part of the chain is undefined, adding "?" after the key name, before the dot makes chaining optinal.
 *so it doesn't show an error, just says "undefined"
*/