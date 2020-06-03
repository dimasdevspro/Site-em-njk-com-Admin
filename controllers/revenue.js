const data = require('../data.json')

exports.index = function(req, res) {
    return res.render("revenue/index", {revenue: data.revenue})
}

exports.create = function(req, res) {
    return res.render("revenue/create")
}

