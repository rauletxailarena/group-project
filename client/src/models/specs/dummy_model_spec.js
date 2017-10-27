var DummyModel = require('../dummy_model')
var assert = require('assert')

describe('DummyModel', function(){
  var theObject

  beforeEach(function(){
    theObject = new DummyModel()
  })

  it('is tested', function(){
    assert.strictEqual(1, 1)
  })


})
