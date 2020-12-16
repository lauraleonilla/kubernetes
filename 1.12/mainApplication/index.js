const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const fs = require('fs') 
const path = require('path')

app.set("view engine", "ejs")
app.set("views", __dirname + "/views"); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static('public'))

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

const getImage = async () => {
  const res = await fetch('https://picsum.photos/200')
  const buffer = await res.buffer();
  fs.writeFile(`./public/image.jpg`, buffer, () => 
    console.log('finished downloading!'));
}

const string = stringGenerator()
let response = `${new Date()}: ${string}`

const getStringWithDate = async () => {
  setInterval(() => {
    timeStamp = new Date()
    response = `${timeStamp}: ${string}\n`
  }, 5000)
  return response
}

const readPongFile = async () => new Promise(res => {
  fs.readFile("../pongs.txt", (err, buffer) => {
    if (err) return console.log('FAILED TO READ FILE', '----------------', err)
    res(buffer)
  })
})


const getStringWPongs = async () => {
  const string = await getStringWithDate()
  const pongs = await readPongFile()
  return `${string} Ping / Pongs: ${pongs}`
}

app.get('/', async (req, res) => {
  const data = await getStringWPongs()
  const image = await getImage()
  res.render("index", { pongs: data })
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})