//////////////////////
//     Classes      //
//////////////////////

class Template {
  // We now have "concise methods" in ES6 now too! No "function" keyword in sight.
  // constructor methods are automatically called when the class is instatiated
  constructor(options) {
    this.name = options.name;
    this.template = options.template;
  }
  render() {
    return {
      name: this.name,
      template: this.template
    };
  }
}

// Subclasses
class ConsoleTemplate extends Template {
  constructor(options) {
    // "super" calls the parent class' render function
    super(options);
  }
  // Just like in OO languages we can extend classes too
  render() {
    var consoleMe = super();
    console.log(consoleMe);
  }
}


// Source: http://javascriptplayground.com/blog/2014/07/introduction-to-es6-classes-tutorial/
