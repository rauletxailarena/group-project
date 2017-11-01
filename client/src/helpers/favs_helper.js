var NightOutEvent = require("../models/night_out_event.js")
var Pub = require("../models/pub.js")
var Restaurant = require("../models/restaurant.js")


var requestHelper = require('./request_helper.js')

var favsHelper = {

  getAllFavs: function(callback){
    // console.log("Favourites helper started")
    var url = "http://localhost:3000/api/locations"
    requestHelper.getRequest(url, function(arrayOfObjectsFromMongo){
      // console.log("Favourites helper get request started")
      var modelObjectArray = []
      for (var obj of arrayOfObjectsFromMongo) {
        switch(obj.type) {
          case "pub":
            modelObjectArray.push(new Pub(obj))
            break;
          case "restaurant":
          modelObjectArray.push(new Restaurant(obj))
            break;
          case "event":
          modelObjectArray.push(new NightOutEvent(obj))
            break;
        }
      }
      callback(modelObjectArray)
    })
  }

}

module.exports = favsHelper
