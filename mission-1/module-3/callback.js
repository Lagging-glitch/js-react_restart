/**
 *callback: a function passed as an argument to another function, to be executed later
 *
 * function(callback): both "function" and "callback" are functions
 * "callback" is being passed/referenced, not called
 *  callback(): means being called
 *
 * in JS, numbers, strings, objects and "functions" are values
 * callback -> value
 * callback() -> means run the function
 */

function greet(name) {
  console.log("Hello " + name);
}

function sayBye(name) {
  console.log("Goodbye " + name);
}

function processUser(callback) {
  const userName = "Jenin";
  callback(userName);
}

processUser(greet);
processUser(sayBye);
/**
 * sayBye/greet -> does the thing(fixed) to any name(variable)
 * processUser -> adds a name(fixed) to any(variable) function
 */