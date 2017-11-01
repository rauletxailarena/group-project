var displayEvents = require("./display_events.js")
var displayRestaurants = require("./display_restaurants.js")
var displayPubs = require("./display_pubs.js")
var Pub = require("../models/pub.js")
var Restaurant = require("../models/restaurant.js")
var Event = require("../models/night_out_event.js")

var displayHelper = {
  render: function(item) {
    // console.log("Rendering item:", item);
    switch(item.type) {
      case "pub":
        displayPubs.renderMarker(item);
        break;
      case "restaurant":
        displayRestaurants.renderMarker(item);
        break;
      case "event":
        displayEvents.renderMarker(item);
        break;
    }
  },

  renderItems: function(listOfItems) {
    listOfItems.forEach(function(item) {
      this.render(item)
    }.bind(this))
  },

  recreateItems: function(listOfItems) {
    var result = []
    for(var item of listOfItems){
      switch (item.type) {
        case "pub":
          var pub = new Pub(item)
          result.push(pub)
          break;
        case "restaurant":
          var restaurant = new Restaurant(item)
          result.push(restaurant)
          break;
        case "event":
          var event = new Event(item)
          result.push(event)
          break;
      }
    }
    return result;
  }
}

module.exports = displayHelper;
