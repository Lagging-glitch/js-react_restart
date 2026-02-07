const employee = {
  name: "Raja Rani",
  salary: 20000,
  experience: 1,
  age: 22
};

Object.freeze(employee)
// freeze: prevents any change to the object


//-------delete properties
delete employee.experience
// console.log(employee)

//-------modify, reassign
employee.salary = employee.salary + 5000

// ----------add new property
employee.lacation = 'Dhaka'
console.log(employee)