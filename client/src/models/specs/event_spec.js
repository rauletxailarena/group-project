var Event = require('../event.js')
var assert = require('assert')

describe('Event', function(){
  var theEvent

  beforeEach(function(){
    theEvent = new Event()
  })

  it('is tested', function(){
    assert.strictEqual(1, 1)
  })


})
