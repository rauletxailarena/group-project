var NightOutEvent = function(api_object) {
  // // For objects returned from v1/events
  // this.lng =  api_object.schedules[0].place.lng
  // this.lat =  api_object.schedules[0].place.lat
  // this.name = api_object.name
  // this.description = api_object.descriptions[0].description

  // For objects returned from v1/search
  this.lng =  api_object.lng
  this.lat =  api_object.lat
  this.name = api_object.name
  this.description = ""
}

// NightOutEvent.prototype.methodName = function() {
//   return null
// }

module.exports = NightOutEvent
