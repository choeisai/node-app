const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World 4!')
})

app.listen(3333, () => {
  console.log('listening on port 3333')
})
