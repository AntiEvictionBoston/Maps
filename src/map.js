import React from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// const position = [42.37, -71.03];
// const map = (
//   <Map center={position} zoom={13}>
//     <TileLayer
    //       url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
    //       attribution="&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>" />
//     <Marker position={position}>
//       <Popup>
    //         <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
//       </Popup>
//     </Marker>
//   </Map>
                        // );

const position = [51.505, -0.09];
render((
  <Map center={position} zoom={13} height="100%">
    <TileLayer
      url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  </Map>
), document.getElementById('map'));
