////////////////////////////
//    Template Strings    //
////////////////////////////

// Javascript finally gets it's own string interpolation

var firstname = 'Tyler', lastname = 'Moore';

// Simple string interpolation
// String interpolation uses backticks instead of quotes (single or double)
document.getElementById('output').innerHTML(`Now serving ${lastname}, ${firstname}!`);

// String interpolation can be used for multi-line strings
var name = `Tyler
  Moore`;

console.log(assert(name === 'Tyler\n  Moore'));




// Source: https://github.com/lukehoban/es6features/blob/master/README.md#template-strings
