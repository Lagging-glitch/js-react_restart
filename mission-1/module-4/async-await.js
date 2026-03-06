/** from: web-dev-simplified, claude
 * async: marks a function as asynchronous, js'll skip it to do other things and come back when it's done
 *
 * should be wrapped inside a function block
 *
 */

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi!");
    } else {
      reject("We can only talk to Google");
    }
  });
}
function processRequest(res) {
  return new Promise((resolve, reject) => {
    console.log("Processing response...");
    resolve(`Extra information + ${res}`);
  });
}

// makeRequest("Facebook")
//   .then((res) => {
//     console.log("Response received");
//     return processRequest(res); //the bridge that connects makeRequest() and processRequest()
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
/** connection diagram
 * Line 17 → Line 1 (makeRequest runs)
              ↓
          Line 5 (resolve) → Line 18 (.then receives it)
              ↓
          Line 20 (return processRequest) → Line 11 (processRequest runs)
              ↓
          Line 14 (resolve) → Line 22 (.then receives it)
              ↓
          Line 23 (final log)

          OR if rejected:
          Line 7 (reject) → Line 25 (.catch receives it)
 */
async function doWork() {
  try {
    const res = await makeRequest("Google");
    console.log("Response received");
    const processedResponse = await processRequest(res);
    console.log(processedResponse);
  } catch (error) {
    console.log(err);
  }
}
doWork(); //works
