var queryHelper = require('../db/query_helper.js')
var express = require('express')
var locationsRouter = express.Router()
var bodyParser = require("body-parser")
locationsRouter.use(bodyParser.json())
locationsRouter.use(bodyParser.urlencoded({extended: true}))

// RESTful routes being set up here

// INDEX
locationsRouter.get('/', function (req, res) {
  queryHelper.all("locations", function (locationObjectArray) {
    res.json(locationObjectArray)
  })
})

// SHOW
locationsRouter.get('/:id', function (req, res) {
  var locationId = req.params.id
  console.log("Locations hit, SHOW route. Data is:", locationId)
  queryHelper.find("locations", locationId, function (locationObject) {
    res.json(locationObject)
  })
  console.log("Location ID", locationId)
})

// CREATE
locationsRouter.post('/', function (req, res) {
  var jsonData = req.body
  console.log(req.body);
  queryHelper.save("locations", jsonData, function (updatedLocationObjectArray) {
    res.json(updatedLocationObjectArray)
  })
})

// // UPDATE
// locationsRouter.put('/:id', function (req, res) {
//   var locationId = req.params.id
//   var newLocationInJsonFormat = req.body
//   queryHelper.save("locations", jsonData, function (updatedLocationObjectArray) {
//     res.json(updatedLocationObjectArray)
//   })
// })

// DELETE
locationsRouter.delete('/:id', function (req, res) {
  var locationId = req.params.id
  queryHelper.delete("locations", locationId, function (removedObject) {
    res.json(removedObject)
  })
})

module.exports = locationsRouter
