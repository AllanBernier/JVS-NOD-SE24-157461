const { parentPort } = require("worker_threads")



const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
  }
  return num > 1;
}

let i = 1000000000000000

while( true ) {
  if (isPrime(i)) {
    parentPort.postMessage(i)
  }
  i++
}
