const express = require('express')
const path = require('path')
const app = express()
const port = 3002
const fs = require('fs') 

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'image.jpg')

const readTimeStampFile = () => {
    fs.readFile('/Users/joe/test.txt', (error, data) => {
        if (error) {
          console.error('Error reading file', error)
          return
        }
        console.log(data)
    })
}

app.listen(port, () => {
    readTimeStampFile()
    console.log(`Server started in port ${port}`)
  })