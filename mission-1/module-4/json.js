/**from:web-dev-simplified and claudeAI
 * JSON: supports string, nums, boolean, obj, array, and null
 *
 * used object/array as top-level
 *
 * JSON.stringify(): to turn js -> json
 * --------------***------------
 * Think of JSON like a shipping box:
 *  You have a gift (JS object)
 *  You box it up to ship it → JSON.stringify()
 *  The receiver unboxes it to use it → JSON.parse()
 * --------------***--------------
 * JSON.parse(): to go JSON -> js can't work with json, must "parse" it, to turn back into js object
 */

 const person = {
  name: "Sam",
  favNum: 3,
  isGamer: true,
  favFlower: ["roses", "lilies", "daisies"]
 }
const personJSON = JSON.stringify(person)
// console.log(personJSON, typeof personJSON) //string
// console.log(person, typeof person) //object

const parseJSON = JSON.parse(personJSON)
// console.log(parseJSON, typeof parseJSON) //object
//-----------what works--------//
// console.log(personJSON.name) //undefined
// console.log(person.name) //works
console.log(parseJSON.name) //works
