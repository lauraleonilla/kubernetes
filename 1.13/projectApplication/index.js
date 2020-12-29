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

const dirPath = path.join('/', 'usr', 'src', 'app', 'files')
app.use(dirPath, express.static(dirPath))
const filePath = path.join(dirPath, 'pongs.txt')
const imagePath = path.join(dirPath, 'image.jpg')

const ImageAlreadyExists = async () => new Promise(res => {
  fs.stat(imagePath, (err, stats) => {
    if (err || !stats) return res(false)
    return res(true)
  })
})

const getImage = async () => {
  const res = await fetch('https://picsum.photos/200')
  const buffer = await res.buffer();
  fs.writeFile(imagePath, buffer, () => 
    console.log('finished downloading!'));
}

app.get('/', async (req, res) => {
  const imageExists = await ImageAlreadyExists()
  if (!imageExists) {
    await getImage()
  }
  res.render("index", { imagePath })
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})