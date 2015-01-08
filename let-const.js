// Block scoping with `let` and `const`
//
// Currently JS variables are function scoped with "hoisting".
//
// `let` keyword allows variables to be scoped in a block of code
// `let` is the new `var`


////////////////////
//  let Keyword   //
////////////////////

// Hoisting
var jsFuture = "es6";
(function () {
  // var jsFuture = undefined;
  // variable hoisting
  if (!jsFuture) {
    var jsFuture = "es5";
  }
  console.log(jsFuture); // "es5"
}());


// Another example of hoisting
// var = i is hoisted into global scope
var es = [];
for (var i = 0; i < 10; i++) {
  es[i] = function () {
    console.log("Upcoming edition of ECMAScript is ES" + i);
  };
}
es[6](); // Upcoming edition of ECMAScript is ES10


var es = [];
for (var i = 0; i < 10; i++) {
  let c = i;
  es[i] = function () {
    console.log("Upcoming edition of ECMAScript is ES" + c);
  };
}
es[6](); // Upcoming edition of ECMAScript is ES6






//////////////////////
//  const Keyword   //
//////////////////////

// `const` values are similar to `let` in that they are block scoped
// `const` values are different in that they can't be redeclared
// Hence, constant...

const PI = 3.14159;
console.log(PI); // 3.14159

// Can't be reassigned
PI = 3;
console.log(PI); // 3.14159

// Can't be reinitialized
const PI = 3;
console.log(PI); // 3.14159

// Can't be redeclared
var PI = 3;
console.log(PI); // 3.14159




// Source: http://code.tutsplus.com/articles/use-ecmascript-6-today--net-31582
