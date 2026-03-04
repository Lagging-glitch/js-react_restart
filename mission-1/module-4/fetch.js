/** from:web-dev-simplified
 * built-in JavaScript function that calls an API URL and returns a Promise.
 * fetch() gets data as raw HTTP/JSON format
 * .json(): works like JSON.parse(), turns the raw data into workable, js object; it's designed specifically for fetch() responses
 * works with browser console, not node
 */

// fetch("https://jsonplaceholder.typicode.com/posts/3")
//  //brings the raw data
// .then((response) => response.json())
//  //turns the raw data into js objects
// .then((data) => console.log(data))
//  //gets the actual data
// .catch((error) => console.log("Error:", error))

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((user) => {
    console.log(user.name);
    console.log(user.email);
  })
  .catch((error) => console.log("Something went wrong:", error));
