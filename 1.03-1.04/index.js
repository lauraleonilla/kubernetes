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

const getStringWithDate = () => {
  const string = stringGenerator()
  setInterval(() => {
    const timeStamp = new Date()
    const result = `${timeStamp}: ${string}`
    console.log(result)
  }, 5000)
}

getStringWithDate()
