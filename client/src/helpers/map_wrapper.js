var MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  })
  this.markers = [];
  this.bounceMarkers = this.bounceMarkers.bind(this);
  this.geolocate = this.geolocate.bind(this);
  this.moveMapToCurrentLocation = this.moveMapToCurrentLocation.bind(this);
  this.currentInfoWindow;
}

MapWrapper.prototype.addMarker = function (coords, markerIcon, infoWindowContent) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    icon: markerIcon
  });
  if (infoWindowContent) {
    // our marker has an addListener method we can use instead of google.maps.event.addListener
    marker.addListener('click', function () {
      if (this.currentInfoWindow){
        this.currentInfoWindow.close();
      }
      this.currentInfoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
      });
      this.currentInfoWindow.open(marker.map, marker);
    }.bind(this))
  }

  this.markers.push(marker);

}

MapWrapper.prototype.closeCurrentInfoWindow = function(){
  this.currentInfoWindow.close()
}

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function (event) {
    var position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    this.addMarker(position);
  }.bind(this));
}

MapWrapper.prototype.bounceMarkers = function () {
  this.markers.forEach(function (marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
}

MapWrapper.prototype.geolocate = function () {
  // console.log(this);
  navigator.geolocation.getCurrentPosition
  navigator.geolocation.getCurrentPosition(this.moveMapToCurrentLocation);
}

MapWrapper.prototype.moveMapToCurrentLocation = function (position) {
  // console.log(this);
  var coords = { lat: position.lat, lng: position.lng };
  var latLng = new google.maps.LatLng(coords.lat, coords.lng);
  // console.log("Trying to center map:", latLng);
  this.googleMap.setCenter({lat: position.lat, lng: position.lng});
}

module.exports = MapWrapper
