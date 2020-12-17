const express = require('express')
const app = express()
const port = 3001

let counter = 0

app.get('/pingpong', (req, res) => {
  res.send(`${counter}`);
  counter = counter += 1
})

app.listen(port, async () => {
  console.log(`Server started in port ${port}`)
})