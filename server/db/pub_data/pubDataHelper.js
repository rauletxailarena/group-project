var data = require('./open_pubs.json')

var pubDataHelper = {
  pubsData: data,
  findPubByCity: function(name){
     return filteredPubs = this.pubsData.filter(function (pub) {
      return pub.local_authority === name;
    })
  }
}

var Edinpubs = pubDataHelper.findPubByCity("City of Edinburgh");
console.log(Edinpubs);
