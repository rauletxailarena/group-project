var Pub = function(input_object) {
  this.type = "pub"

  var isFromMongoDB = (input_object._id) ? true : false

  if (isFromMongoDB) {
    // input_object must be from our Mongo DB API
    this._id = input_object._id
    this.name = input_object.name
    this.address = input_object.address
    this.postcode = input_object.postcode
    this.latitude = input_object.latitude
    this.longitude = input_object.longitude
  } else {
    // input_object must be from external API
    this._id = null
    this.name = input_object.name
    this.address = input_object.address
    this.postcode = input_object.postcode
    this.latitude = input_object.latitude
    this.longitude = input_object.longitude
  }
}

module.exports = Pub
