var eventsQueryHelper = require('../db/query_helper.js')
var express = require('express')
var eventsRouter = express.Router()

eventsRouter.get('/', function (req, res) {

  eventsQueryHelper.all(function (events) {

    res.json(events)
  })



})

module.exports = eventsRouter
