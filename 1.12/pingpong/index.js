const express = require('express')
const app = express()
const port = 3001
const fs = require('fs') 
const path = require('path');
const dirPath = path.join('/', 'usr', 'src', 'app', 'files')

let counter = 0


const fileAlreadyExists = async () => new Promise(res => {
  fs.stat(dirPath, (err, stats) => {
    if (err || !stats) return res(false)
    return res(true)
  })
})

app.get('/pingpong', (req, res) => {
  fs.writeFile(`../pongs.txt`, counter, (error) => {
    if (error) {
      console.log('Error when writing file', error)
      return
    }
  })
  res.send(`Pong ${counter}`);
  counter = counter += 1
})

app.listen(port, async () => {
  const fileExists = await fileAlreadyExists()
  if (!fileExists) {
    await new Promise(res => fs.mkdir(dirPath, (err) => res()))
  }
  console.log(`Server started in port ${port}`)
})