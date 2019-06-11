const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const serveMidleware = serveStatic(path.resolve(__dirname,'static'))

function rootHandler (request, response){
}

function searchHandler (request, response){  
}

app.use('/assets', serveMidleware)

app.all('/', rootHandler)

app.get('/search', searchHandler)

app.listen(9000)