var tileLayer = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
var mapOptions = {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    maxZoom: 18
}


var map = L.map('map').setView([42.35, -71.05], 13);
L.tileLayer(tileLayer, mapOptions).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
var markers = []

var evictions = JSON.parse('evictions.json');

function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
    }
map.on('click', onMapClick);
