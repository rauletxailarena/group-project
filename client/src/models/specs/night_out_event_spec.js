var NightOutEvent = require('../night_out_event.js')
var assert = require('assert')

describe('NightOutEvent', function(){
  var theMockApiObject
  var theEvent

  beforeEach(function(){
    theMockApiObject = {}
    theMockApiObject.name = "Test event"
    theMockApiObject.descriptions = [{}]
    theMockApiObject.descriptions[0].description = "Test Description"
    theMockApiObject.town = "Test town"
    theMockApiObject.schedules = [{place: {}}]
    theMockApiObject.schedules[0].place.lat = -4.567
    theMockApiObject.schedules[0].place.lng = 0.51001
    theMockApiObject.schedules[0].place.postal_code = "Test postcode"
    theMockApiObject.schedules[0].place.name = "Test venue"
    theEvent = new NightOutEvent(theMockApiObject)
  })

  it('has a name', function(){
    assert.strictEqual("Test event", theEvent.name)
  })

  it('has a description', function(){
    assert.strictEqual("Test Description", theEvent.description)
  })

  it('has a latitude', function(){
    assert.strictEqual(-4.567, theEvent.latitude)
  })

  it('has a longitude', function(){
    assert.strictEqual(0.51001, theEvent.longitude)
  })

  it('has a venue', function(){
    assert.strictEqual('Test venue', theEvent.venue)
  })

  it('has a town', function(){
    assert.strictEqual('Test town', theEvent.town)
  })

  it('has a postcode', function(){
    assert.strictEqual('Test postcode', theEvent.postcode)
  })

})
