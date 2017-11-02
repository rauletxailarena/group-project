var Restaurant = require('../restaurant.js')
var assert = require('assert')

describe('Restaurant', function(){
  var theMockApiObject
  var theRestaurant

  beforeEach(function(){
    theMockApiObject = {}
    theMockApiObject.restaurant = {}
    theMockApiObject.restaurant.name ="Test restaurant"
    theMockApiObject.restaurant.cuisines = "Curry, Pizza"
    theMockApiObject.restaurant.menu = "Test menu"
    theMockApiObject.restaurant.location = {}
    theMockApiObject.restaurant.location.address = "Test address"
    theMockApiObject.restaurant.location.latitude = 78.1234
    theMockApiObject.restaurant.location.longitude = 54.21
    theRestaurant = new Restaurant(theMockApiObject)
    theMockApiObject._id ="Dummy ID from Mongo"
    theSavedRestaurant = new Restaurant(theMockApiObject)
  })

  it('has a name', function(){
    assert.strictEqual("Test restaurant", theRestaurant.name)
  })

  it('has cuisines', function(){
    assert.strictEqual("Curry, Pizza", theRestaurant.cuisines)
  })

  it('has a menu', function(){
    assert.strictEqual("Test menu", theRestaurant.menu)
  })

  it('has an address', function(){
    assert.strictEqual("Test address", theRestaurant.address)
  })

  it('has a latitude', function(){
    assert.strictEqual(78.1234, theRestaurant.latitude)
  })

  it('has a longitude', function(){
    assert.strictEqual(54.21, theRestaurant.longitude)
  })

  it('can be added', function(){
    assert.strictEqual(true, theRestaurant.canAdd())
  })

  it('can not be removed', function(){
    assert.strictEqual(false, theRestaurant.canRemove())
  })

  it('can not be added after _id set', function(){
    assert.strictEqual(false, theSavedRestaurant.canAdd())
  })

  it('can be removed after _id set', function(){
    assert.strictEqual(true, theSavedRestaurant.canRemove())
  })
})
