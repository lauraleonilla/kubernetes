const express = require('express')
const path = require('path')
const app = express()
const port = 3002
const fs = require('fs')

const dirPath = path.join(__dirname, '../files');
const filePath = path.join(dirPath, 'timeStamps.txt')

let responseData = 'This will be data'

const readTimeStampFile = async () => {
    await fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
          console.error('Error reading file', error)
          return
        }
        responseData = data
        console.log(data)
    })
}

app.get('/', (req, res) => {
  res.json(responseData);
})

app.listen(port, () => {
    readTimeStampFile()
    console.log(`Server started in port ${port}`)
  })