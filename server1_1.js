const express = require('express')
const app = express()


function rootHandler (request, response){
}



app.use('/assets', express.static('static'))

app.all('/', rootHandler)

app.listen(9000)