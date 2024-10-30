const { Worker } = require('worker_threads')

const useWorker = () => {
  const worker = new Worker("./worker.js")

  worker.on('message', (msg) => {
    console.log(msg)
  })
  
}

setInterval( () => {
  console.log("Process working")
}, 1000 )

useWorker()