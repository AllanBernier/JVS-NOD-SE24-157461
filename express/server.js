const express = require("express")
const app = express();
const port = 3000

app.listen( port,() => {
  console.log(`App listening on port ${port}`)
})


app.get('/', (req, res) => {
  console.log("Hello world")
  res.send("Hello from express")
})