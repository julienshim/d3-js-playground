const myPromise = new Promise((resolve, reject) => {
  setTimeout(()=> resolve(), 2000);
});

myPromise.then(() => {
  console.log('Promise resolved');
})

const waitSeconds = numSeconds => new Promise((resolve, reject)=> {
  const message = `${numSeconds} seconds have passed!`
  setTimeout(()=> resolve(message), numSeconds * 1000);
});

waitSeconds(2).then(message => console.log(message))