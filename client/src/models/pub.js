var Pub = function(input_object) {
  this.type = "pub"

  var isFromMongoDB = (input_object.mongo) ? true : false

  if (isFromMongoDB) {
    // input_object must be from our Mongo DB
    this.name = input_object.name
    this.address = input_object.address
    this.postcode = input_object.postcode
    this.coords = {}
    this.coords.lat = input_object.lat
    this.coords.lng = input_object.lng
  } else {
    // input_object must be from API
    this.name = input_object.name
    this.address = input_object.address
    this.postcode = input_object.postcode
    this.coords = {}
    this.coords.lat = input_object.latitude
    this.coords.lng = input_object.longitude
  }
}

// Pub.prototype.methodName = function() {
//   return null
// }

module.exports = Pub
