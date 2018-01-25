const express = require('express')
const app = express()
const port = 3000

console.log('app.js');

app.use(express.static(__dirname + '/'));

app.get('/', (req, res, next) => {
  res.render('index.html')
})

app.listen(port, () => {
  console.log('app listening on port', port)
})
