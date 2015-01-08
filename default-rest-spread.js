///////////////////////////////////
//  Default Function Parameters  //
///////////////////////////////////

// If `y` is not set, it will be 12
function doSomething(x, y=12) {
  return x + y;
}
doSomething(3); // 15;
doSomething(3, 6); // 9




///////////////////////////////////
//    Rest Function Parameters   //
///////////////////////////////////

// Rest replaces the need for 'arguments' keyword.
function doSomethingElse(x, ...y) {
  // y becomes an array
  // Now we don't need `this.arguments` to get the remaining passed arguments
  return x + " " + y.length;
}
doSomethingElse("Hello, Johnny #", [2, 3, 4], true, "Hitchhikers Guide to the Galaxy"); // Hello, Johnny #4




///////////////////////////////////
//  Spread Function Parameters   //
///////////////////////////////////

// Spread works the opposite to Rest
function doSomethingMore(x, y, z) {
  return x + y + z;
}
// Elipses will break the 
doSomethingMore(...[6, 3, 2]); // 11


// Source: https://github.com/lukehoban/es6features/blob/master/README.md#default--rest--spread
