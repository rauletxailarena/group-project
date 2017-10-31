var Pub = require('../pub.js')
var assert = require('assert')

describe('Pub', function(){
  var theMockApiObject
  var thePub

  beforeEach(function(){
    theMockApiObject = {}
    // Set it up here
    thePub = new Pub(theMockApiObject)
  })

  it('is not really tested so set up some tests', function(){
    assert.strictEqual(1, 1)
  })

})
