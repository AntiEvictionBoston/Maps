## INITIALIZATION

var tileLayer = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
var mapOptions = {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    maxZoom: 18
}


var map = L.map('map').setView([42.35, -71.05], 13);
L.tileLayer(tileLayer, mapOptions).addTo(map);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
//     maxZoom: 18,
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//     '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//     'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     id: 'mapbox.streets'
//     }).addTo(map);
// var layer = L.tileLayer(, {
// });

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
