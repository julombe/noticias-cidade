// create server

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//configuring template engine
server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})









//starting server
server.listen(3000, function() {
    console.log("server is running")
})