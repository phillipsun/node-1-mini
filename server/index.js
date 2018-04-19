// require books controller
const bc = require('./controllers/books_controller.js');

const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())

// these are endpoints
app.get('/api/books', bc.read)

app.post('/api/books', bc.create)

app.put('/api/books/:id', bc.update )

app.delete('/api/books/:id', bc.delete )

app.listen(3000, () => {
    console.log('Listening on 3000')
})