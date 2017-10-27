var mapWrapper = require ('../helpers/mapWrapper')

  window.addEventListener('load', function(){
    var mapContainer = document.getElementById("map");
    console.log(mapContainer);
    var map = new mapWrapper(mapContainer,
      {lat: 51.5074, lng: -0.1278}, 5 );
    map.addClickEvent();
  });
