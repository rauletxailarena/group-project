var Restaurant = function(input_object) {
  this.type = "restaurant"

  var isFromMongoDB = (input_object._id) ? true : false

  if (isFromMongoDB) {
    // input_object must be from our Mongo DB API
    this._id = input_object._id
    this.name = input_object.name
    this.address = input_object.address
    this.cuisines = input_object.cuisines
    this.menu = input_object.menu
    this.coords = {}
    this.coords.lat = input_object.lat
    this.coords.lng = input_object.lng
  } else {
    // input_object must be from external API
    this._id = null
    this.name = input_object.name
    this.address = input_object.location.address
    this.cuisines = input_object.cuisines
    this.menu = input_object.menu
    this.coords = {}
    this.coords.lat = input_object.latitude
    this.coords.lng = input_object.longitude
  }
}

// Restaurant.prototype.methodName = function() {
//   return null
// }

module.exports = Restaurant
