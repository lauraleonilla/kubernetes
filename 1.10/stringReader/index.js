const express = require('express')
const path = require('path')
const app = express()
const port = 3002
const fs = require('fs') 

const dirPath = path.join(__dirname, '../files');
const filePath = path.join(dirPath, 'timeStamps.txt')

const readTimeStampFile = async () => {
    await fs.readFile(filePath, (error, data) => {
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