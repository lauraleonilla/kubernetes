const express = require('express')
const app = express()
const port = 3000

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

const getStringWithDate = () => {
  setInterval(() => {
    timeStamp = new Date()
    response = `${timeStamp}: ${string}`
    console.log(response)
  }, 5000)
  return response
}

app.get('/', (req, res) => {
  res.send(response);
})

app.listen(port, () => {
  getStringWithDate()
  console.log(`Server started in port ${port}`)
})