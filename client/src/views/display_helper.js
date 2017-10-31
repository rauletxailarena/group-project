var displayEvents = require("./display_events.js")
var displayRestaurants = require("./display_restaurants.js")
var displayPubs = require("./display_pubs.js")

var displayHelper = {
  render: function(item) {
    switch(item) {
      case item.type === "pub" :
        displayPubs.renderMarker(item);
        break;
      case item.type === "restaurant" :
        displayRestaurants.renderMarker(item);
        break;
      case item.type === "event" :
        displayEvents.renderMarker(item);
        break;
    }
  },

  renderItems: function(listOfItems) {
    listOfItems.forEach(function(item) {
      this.render(item)
    }.bind(this))
  }
}
