////////////////////
//    Promises    //
////////////////////

// Now available without a library...and raspberry flavor!

function timeout(duration = 0) {
  // Psst...I snuck "arrow functions" in this one too.
  // Arrows functions are always anonymous.
  // Arrows functions also lexically bind `this`. Therefore 'use strict' rules are ignored.
  // => binds to Promise
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

var p = timeout(1000).then(() => {
  return timeout(2000);
}).then(() => {
  throw new Error("Ruh roh...");
}).catch(err => {
  return Promise.all([timeout(100), timeout(200)]);
});




// Source: https://github.com/lukehoban/es6features/blob/master/README.md#promises
