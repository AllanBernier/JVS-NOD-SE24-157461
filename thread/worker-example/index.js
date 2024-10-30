const { Worker } = require('worker_threads')

const useWorker = () => {
  const worker = new Worker("./worker.js")

  worker.on('message', (msg) => {
    console.log(msg)
  })

}

const useWorkerPrime = () => {
  const worker = new Worker('./workerprime.js')

  worker.on('message', (msg) => {
    console.log("Prime number found " + msg)
  })
}



setInterval(() => {
  console.log("Process working")
}, 1000)

useWorkerPrime()
useWorker()