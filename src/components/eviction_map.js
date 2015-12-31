import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class EvictionMap extends React.Component {
  constructor(options) {
    super();
    this.position = options.loc;
    this.zoom = options.zoom;
  }

  render() {
    return (
      <Map center={this.position} zoom={this.zoom}>
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        />
      </Map>
    );
  }

}

export default EvictionMap;
