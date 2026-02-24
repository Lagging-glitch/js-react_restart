/**
 * closure: a function inside another function
 * inner function uses variables from the outer function
 */
function counter () {
  let count = 10;
  return function(user){
    count = count + 1
    console.log('inside the inner function', user, count)
  }
}

const rahimCounter = counter() //can't call inner function, block scope
rahimCounter("rahim");
rahimCounter("rahim");

const karimCounter = counter();
karimCounter("karim");

const jabbarCounter = counter();
jabbarCounter("steve");
jabbarCounter("steve");
karimCounter("karim");
rahimCounter("rahim");
