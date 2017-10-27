var MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    // Styling: uncomment lines below to hide roads
    // styles: [{
    //   'featureType': 'road',
    //   'stylers': [
    //   {'visibility': 'off'}
    //   ]
    // }],
  })
  this.markers = [];
  this.bounceMarkers = this.bounceMarkers.bind(this);
  this.geolocate = this.geolocate.bind(this);
  this.moveMapToCurrentLocation = this.moveMapToCurrentLocation.bind(this);
}

MapWrapper.prototype.addMarker = function (coords, infoWindowContent) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  if (infoWindowContent) {
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    // our marker has an addListener method we can use instead of google.maps.event.addListener    
    marker.addListener('click', function () {
      infoWindow.open(marker.map, marker);
    })
  }

  this.markers.push(marker);

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
  var center = { lat: position.coords.latitude, lng: position.coords.longitude };
  this.googleMap.setCenter(center);
  this.addMarker(center);
}

