const employee = {
  name: "Raja Rani",
  salary: 20000,
  experience: 1,
  age: 22,
};

Object.seal(employee)
// --------seal: can modify, can't add/delete

delete employee.experience;
employee.salary = employee.salary + 5000;
employee.lacation = "Dhaka";

console.log(employee);