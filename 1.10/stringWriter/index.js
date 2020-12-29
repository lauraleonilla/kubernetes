const express = require('express')
const app = express()
const port = 3000
const fs = require('fs') 
const path = require('path');
const dirPath = path.join('/', 'usr', 'src', 'app', 'files')

const stringGenerator = () => {
  const length = 10
  let result = ''
  const characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const fileAlreadyExists = async () => new Promise(res => {
  fs.stat(dirPath, (err, stats) => {
    if (err || !stats) return res(false)
    return res(true)
  })
})

const string = stringGenerator()
let response = `${new Date()}: ${string}`

const getStringWithDate = async () => {
  const fileExists = await fileAlreadyExists()
  if (!fileExists) {
    await new Promise(res => fs.mkdir(dirPath, (err) => res()))
  }
  setInterval(() => {
    timeStamp = new Date()
    response = `${timeStamp}: ${string}\n`
    fs.appendFile(`${dirPath}/timeStamps.txt`, response, (error) => {
      if (error) {
        console.log('Error when writing file', error)
        return
      }
        console.log(response)
    })
  }, 5000)
  return response
}

app.listen(port, () => {
  getStringWithDate()
  console.log(`Server started in port ${port}`)
})