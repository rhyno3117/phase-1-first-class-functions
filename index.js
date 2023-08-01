function receivesAFunction (callback){
    callback();
}

function returnsANamedFunction() {
    function namedFunction() {
      console.log("Named function called!");
    }
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function () {
      console.log("Anonymous function called!");
    };
  }