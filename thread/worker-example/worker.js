const {parentPort } = require('worker_threads')


parentPort.postMessage('start')

let i = 0
while( i < Math.pow(10,10)){
  i++
}

parentPort.postMessage('end')


