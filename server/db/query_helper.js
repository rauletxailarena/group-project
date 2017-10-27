var MongoClient = require('mongodb').MongoClient

var queryHelper = {}

queryHelper.url = "mongodb://localhost:27017/local_information"
// Expecting this to have a collection called 'pubs'
// however its not hard coded.
// The collection name should be passed in as the 1st parameter
// when calling .all, .save, or any other helper function.

// Example call: queryHelper.all('pubs', callback)
queryHelper.all = function(theCollectionName, onQueryFinished){
  console.log(Date.now(), 'MongoClient', "queryHelper", "all method on", theCollectionName);
  MongoClient.connect(this.url, function(err, db){
    console.log(Date.now(), 'MongoClient', "queryHelper", "all", "connect method");
    var theCollection = db.collection(theCollectionName)
    theCollection.find().toArray(function(err, docs){
      console.log(Date.now(), 'MongoClient', "queryHelper", "all", "connect", "find, array");
      onQueryFinished(docs)
    })
  })
}

// Example call: queryHelper.save('pubs', pubJsonData, callback)
queryHelper.save = function(theCollectionName, theJsonData, onQueryFinished){
  console.log(Date.now(), 'MongoClient', "queryHelper", "save method on", theCollectionName);
  MongoClient.connect(this.url, function(err, db){
    console.log(Date.now(), 'MongoClient', "queryHelper", "save", "connect method");
    if (err) return          // Optional!
    var theCollection = db.collection(theCollectionName)
    theCollection.insert(theJsonData)
    // Get the list again, since another user might have added to it
    theCollection.find().toArray(function(err, docs){
      console.log(Date.now(), 'MongoClient', "queryHelper", "save", "connect", "find, array");
      onQueryFinished(docs)
    })
  })
}

module.exports = queryHelper
