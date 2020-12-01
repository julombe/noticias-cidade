// create server

const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()

//Using CSS
server.use(express.static('public'))
server.use(routes)

//configuring template engine
server.set("view engine", "html")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
    
})


//starting server
server.listen(3000, function() {
    console.log("server is running")
})