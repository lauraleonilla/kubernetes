const express = require('express')
const app = express()
const port = 3000
const fs = require('fs') 
const path = require('path')

const dirPath = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(dirPath, 'pongs.txt')

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
  }, 5000)
  return response
}

const readPongFile = async () => {
  let responseData = null

  await fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error('Error reading file', error)
        return
      }
      responseData = data
      console.log(data)
  })
  return responseData
}

const getStringWPongs = () => {
  const string = getStringWithDate()
  const pongs = readPongFile()
  return `${string} \n Ping / Pongs: ${pongs}`
}

app.listen(port, () => {
  getStringWPongs()
  console.log(`Server started in port ${port}`)
})