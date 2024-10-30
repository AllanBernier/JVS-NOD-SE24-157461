const EventEmitter = require("events")
const em = new EventEmitter()

em.on('event', () => {
  console.log('event')
})

em.on("hello world", (name) => {
  console.log("Hello " + name)
})

em.on("ping", () => {
  console.log("ping")
  em.emit("pong")
})

/////


em.on("pong", () => {
  console.log("pong")
})

// em.emit("ping")



em.on("get-random", () => {
  const random = Math.random()
  em.emit('random-result', random)
})



////

em.on("random-result", (num) => {
  console.log(num)
})


em.emit('get-random')