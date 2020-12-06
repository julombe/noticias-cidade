const express = require("express")
const routes = express.Router()

//create routes
routes.get("/", function(req, res) {
    return res.render("index")
})

routes.get("/brasil", function(req, res) {
    return res.render("brasil")
})

routes.get("/internacional", function(req, res) {
    return res.render("internacional")
})


routes.get("/fotos", function(req, res) {
    return res.render("fotos")
})







module.exports = routes