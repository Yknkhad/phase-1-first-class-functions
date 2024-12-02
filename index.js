function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    return function myNamedFunction() {
      console.log("named function!");
    };
  }
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("anonymous function!");
    };
  }
  