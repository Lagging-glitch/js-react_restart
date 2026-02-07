//------array looping: for...of
const numbers = [1, 3, 434, 65, 8]
for (const num of numbers){
  // console.log(num)
}

//-----object looping: for...in
const employee = {
  name: "Raja Rani",
  salary: 20000,
  experience: 1,
  age: 22,
};
// only keys
for (const key in employee){
  // console.log(key)
}

//-----object looping by array looping
const keys = Object.keys(employee)
console.log(keys)
for (key of keys){
  console.log(key)
}