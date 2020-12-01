const express = require("express")
const routes = express.Router()

//create routes
routes.get("/", function(req, res) {
    return res.render("index")
})

routes.get("/brasil", function(req, res) {
    return res.render("brasil")
})




module.exports = routes