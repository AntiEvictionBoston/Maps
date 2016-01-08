import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import EvictionPopup from "components/eviction_popup";

class TenantAssociationMap extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    position:     React.PropTypes.array.isRequired,
    zoom:         React.PropTypes.number.isRequired,
    associations: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <Map center={this.props.position} zoom={this.props.zoom}>
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        />
        {this.renderAssociations()}
      </Map>
    );
  }

  renderAssociations () {
    var markers = []
    this.props.associations.forEach( (association, index) => (
      markers.push(
        <Marker
          map={this.props.map}
          position={[eviction.Latitude, eviction.Longitude]}
          key={index}>
          <Popup>
            <EvictionPopup eviction={eviction}/>
          </Popup>
        </Marker>
      )));
    return markers
  }
}

export default TenantAssociationMap;
