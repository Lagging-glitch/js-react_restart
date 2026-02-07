const student ={
  name: 'rafid',
  marks: 90,
  1: 50,
  'home-address': 'kochu khet'
}

// -----dot notation
const studentName = student.name
// console.log(studentName);

// -----bracket notation
const studentOne = student[1] //works, but using '' is better, as it's a must for key names, like below
const studentName2 = student['name'];

console.log(studentName2, studentOne);
console.log(student['home-address'])
