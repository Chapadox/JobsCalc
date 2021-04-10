const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')



// Engine
server.set('view engine', 'ejs')

// mudar a  localização da pasta views
server.set('views', path.join(__dirname, 'views'))


// Arquivos Estaticos
server.use(express.static('public'))

// req.body
server.use(express.urlencoded({ extended: true }))


// Routes
server.use(routes)


// open Server
server.listen(3000, () => console.log('Servidor Online'))

