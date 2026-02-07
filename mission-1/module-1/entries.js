const employee= {
  name: "Raja Rani",
  salary: "20000",
  experience: 1
}

const keys= Object.keys(employee)
console.log(keys)

const values = Object.values(employee)
console.log(values)


//Object.keys: returns all the keys  of an object
// Object.values: returns values

//------entries
const entries = Object.entries(employee)
console.log(entries)
// returns key-value pair in an array
