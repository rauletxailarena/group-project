var queryHelper = require('../db/query_helper.js')
var express = require('express')
var locationsRouter = express.Router()

locationsRouter.get('/', function (req, res) {
  queryHelper.all("locations", function (locationObjectArray) {
    res.json(locationObjectArray)
  })
})

locationsRouter.post('/', function (req, res) {
  var jsonData = req.body
  queryHelper.save("locations", jsonData, function (updatedLocationObjectArray) {
    res.json(updatedLocationObjectArray)
  })
})

module.exports = locationsRouter
