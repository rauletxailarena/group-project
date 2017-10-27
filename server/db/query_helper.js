var MongoClient = require('mongodb').MongoClient

var queryHelper = {}

queryHelper.url = "mongodb://localhost:27017/local_information"

// Example call: queryHelper.all('pubs', function(){})
queryHelper.all = function(theCollectionName, onQueryFinished){
  MongoClient.connect(this.url, function(err, db){
    var theCollection = db.collection(theCollectionName)
    theCollection.find().toArray(function(err, docs){
      onQueryFinished(docs)
    })
  })
}

module.exports = queryHelper
