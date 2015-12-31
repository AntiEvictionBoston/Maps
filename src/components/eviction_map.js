import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class EvictionMap extends React.Component {
  constructor(options) {
    super(options);
  }

  static propTypes = {
    position:     React.PropTypes.array.isRequired,
    zoom:         React.PropTypes.number.isRequired,
    evictions:    React.PropTypes.array.isRequired
  }

  render() {
    return (
      <Map center={this.props.position} zoom={this.props.zoom}>
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        />
      </Map>
    );
  }

  renderEvictions () {
    this.props.evictions

  }
}

export default EvictionMap;
