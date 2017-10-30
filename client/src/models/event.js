var Event = function(api_object) {
  this.lng =  api_object.schedules[0].place.lng
  this.lat =  api_object.schedules[0].place.lat
  this.name = api_object.name
  this.description = api_object.descriptions[0].description
}

// Event.prototype.methodName = function() {
//   return null
// }

module.exports = Event
