/**
 * Promise(resolve, reject):
 * resolve: when promise's fulfilled
 * reject: when promise's rejected
 *
 * .then: when "resolved"; gets what was passed to "resolved"
 *  .catch: when "rejected"; gets what was passed to "reject"
 */

let p = new Promise((resolve, reject)=>{
  let a = 1 + 1
  if(a == 2) {
    resolve("Success")
  } else {
    reject("Failed")
  }
})

p.then((message)=>{
  console.log("This is in then", message)
}).catch((message)=>{
  console.log("this is in catch", message)
})

