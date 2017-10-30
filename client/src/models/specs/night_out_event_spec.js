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
    theMockApiObject.schedules = [{place: {}}]
    theMockApiObject.schedules[0].place.lat = -4.567
    theMockApiObject.schedules[0].place.lng = 0.51001
    theEvent = new NightOutEvent(theMockApiObject)
  })

  it('has a name', function(){
    assert.strictEqual("Test event", theEvent.name)
  })

  it('has a description', function(){
    assert.strictEqual("Test Description", theEvent.description)
  })

  it('has a lat', function(){
    assert.strictEqual(-4.567, theEvent.lat)
  })

  it('has a lng', function(){
    assert.strictEqual(0.51001, theEvent.lng)
  })

})
