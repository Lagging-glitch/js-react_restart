/** from:web-dev-simplified
 * built-in JavaScript function that calls an API URL and returns a Promise.
 * fetch() gets data as raw HTTP/JSON format
 * .json(): works like JSON.parse(), turns the raw data into workable, js object; it's designed specifically for fetch() responses
 * works with browser console, not node
 *
 */
// basic structure

// fetch("https://jsonplaceholder.typicode.com/posts/3")
//  //brings the raw data

// .then((response) => response.json())
//  //turns the raw data into js objects
//  // whatever fetch() brings, becomes "response"

// .then((data) => console.log(data))
//  //gets the actual data
//  // whatever the 1st .then() brings, becomes the "data"

// .catch((error) => console.log("Error:", error))

//-------------***-----------------//
// displaying on page

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => res.json())
//   .then((user) => {
//     document.getElementById("name").textContent = user.name;
//     document.getElementById("email").textContent = user.email;
//   })
//   .catch((error) => console.log("Something went wrong:", error));

//-------------***--------------------//
//advanced fetch()

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((res) => {
    if (res.ok) {
      return res.json();
      //   console.log("Success");
      // } else {
      //   console.log("Not Successful");
    }
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
