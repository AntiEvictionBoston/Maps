var tileLayer = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
var mapOptions = {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  maxZoom: 18
}

var map = L.map('map').setView([42.37, -71.03], 14);
L.tileLayer(tileLayer, mapOptions).addTo(map);

// map the evictions
// eastBostonEvictions is set by another script we source
var markers = [];
for (var i = 0; i < eastBostonEvictions.length; i++) {
  eviction = eastBostonEvictions[i];
  marker = L.marker([eviction.Latitude, eviction.Longitude]).addTo(map);
  markers.push(marker);
}


function onMapClick(e) {
  popup
  .setLatLng(e.latlng)
  .setContent("You clicked the map at " + e.latlng.toString())
  .openOn(map);
  }
map.on('click', onMapClick);
