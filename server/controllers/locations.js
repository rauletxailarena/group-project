var queryHelper = require('../db/query_helper.js')
var express = require('express')
var locationsRouter = express.Router()

// RESTful routes being set up here

// INDEX
locationsRouter.get('/', function (req, res) {
  queryHelper.all("locations", function (locationObjectArray) {
    res.json(locationObjectArray)
  })
})

// SHOW
locationsRouter.get('/:pos', function (req, res) {
  var locationPosInArray = req.params.pos
  queryHelper.all("locations", function (locationObjectArray) {
    res.json(locationObjectArray[locationPosInArray])
  })
})

locationsRouter.post('/', function (req, res) {
  var jsonData = req.body
  queryHelper.save("locations", jsonData, function (updatedLocationObjectArray) {
    res.json(updatedLocationObjectArray)
  })
})

module.exports = locationsRouter
