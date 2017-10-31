var Restaurant = require('../restaurant.js')
var assert = require('assert')

describe('Restaurant', function(){
  var theMockApiObject
  var theRestaurant

  beforeEach(function(){
    theMockApiObject = {}
    theMockApiObject.location = {}
    // Set it up here
    theRestaurant = new Restaurant(theMockApiObject)
  })

  it('is not really tested so set up some tests', function(){
    assert.strictEqual(1, 1)
  })

})
