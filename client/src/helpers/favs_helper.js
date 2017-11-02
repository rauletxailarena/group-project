var NightOutEvent = require("../models/night_out_event.js")
var Pub = require("../models/pub.js")
var Restaurant = require("../models/restaurant.js")


var requestHelper = require('./request_helper.js')

var favsHelper = {

  getAllFavs: function(callback){
    // console.log("Favourites helper started")
    var url = "http://localhost:3000/api/locations"
    requestHelper.getRequest(url, function(data){
      console.log("Favourites data", data)
      var modelObjectArray = []
      for (var mongoStoredObj of data) {
        switch(mongoStoredObj.type) {
          case "pub":
            modelObjectArray.push(new Pub(mongoStoredObj))
            break;
          case "restaurant":
          modelObjectArray.push(new Restaurant(mongoStoredObj))
            break;
          case "event":
          modelObjectArray.push(new NightOutEvent(mongoStoredObj))
            break;
        }
      }
      console.log("Models constructed", modelObjectArray)
      callback(modelObjectArray)
    })
  }

}

module.exports = favsHelper
