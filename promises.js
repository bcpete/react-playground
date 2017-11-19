const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('promise resolved');
    reject('some shit went down');
  }, 1500);
});

console.log('before');

promise.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

console.log('after');