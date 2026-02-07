const students = [
  { id: 1, name: "abul", marks: 50 },
  { id: 2, name: "kabul", marks: 85 },
  { id: 3, name: "babul", marks: 95 },
  { id: 4, name: "dabul", marks: 15 },
];

//map
const names = students.map(student => student.name)
// filter
const goodStudents = students.filter(student => student.marks > 80)
// find
const goodStudent = students.find(student => student.marks > 80)

console.log(goodStudent)