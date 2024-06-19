function callbackToPromise(func) {
  return function(...args) {
      return new Promise((resolve, reject) => {
          func(...args, (err, result) => {
              if (err) {
                  reject(err);
              } else {
                  resolve(result);
              }
          });
      });
  };
}

function exampleCallbackFunction(arg1, arg2, callback) {
  setTimeout(() => {
      if (arg1 && arg2) {
          callback(null, "Success");
      } else {
          callback("Error");
      }
  }, 1000);
}

const examplePromiseFunction = callbackToPromise(exampleCallbackFunction);

examplePromiseFunction(true, true)
  .then(result => {
      console.log(result);
  })
  .catch(error => {
      console.error(error);
  });
