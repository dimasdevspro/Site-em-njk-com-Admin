const express = require ('express')
const routes = express.Router()
const revenue = require('./controllers/revenue')

routes.get("/", function(req, res){
    return res.render("/revenue")
})
routes.get("/revenue", revenue.index)
routes.get("/revenue/create", revenue.create)
routes.get("/revenue/:id", revenue.show)
routes.get("/revenue/:id/edit", revenue.edit)

routes.post("revenue", revenue.post)
routes.put("revenue", revenue.put)
routes.delete("revenue", revenue.delete)

module.exports = routes

