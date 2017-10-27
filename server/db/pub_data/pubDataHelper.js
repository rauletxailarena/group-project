var data = require('./open_pubs.json')

var pubDataHelper = {
  pubsData: data,
  findPubByCity: function(name){
     return filteredPubs = this.pubsData.filter(function (pub) {
      return pub.local_authority === name;
    })
  },

  findPubsByCoordinates: function(lat, lng, radius){

    var minLat = lat - radius;
    var maxLat = lat + radius;
    var minLng = lng - radius;
    var maxLng = lng + radius;

    return filteredPubs = this.pubsData.filter(function (pub) {
      return (
        pub.latitude > minLat &&
        pub.latitude < maxLat &&
        pub.longitude > minLng &&
        pub.longitude < maxLng
      )
    })
  }
}
