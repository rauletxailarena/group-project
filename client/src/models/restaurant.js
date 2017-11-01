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
    this.latitude = parseFloat(input_object.lat)
    this.longitude = parseFloat(input_object.lng)
  } else {
    // input_object must be from external API
    console.log(input_object);
    this._id = null
    this.name = input_object.restaurant.name
    this.address = input_object.restaurant.location.address
    this.cuisines = input_object.restaurant.cuisines
    this.menu = input_object.restaurant.menu
    this.latitude = parseFloat(input_object.restaurant.location.latitude)
    this.longitude = parseFloat(input_object.restaurant.location.longitude)
  }
}

// Restaurant.prototype.methodName = function() {
//   return null
// }

module.exports = Restaurant
