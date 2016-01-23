import React from "react";
import { connect } from "react-redux";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import TenantPopup from "./tenant_association_popup";
import Sidebar from "./sidebar";
import * as actions from "../actions/actions";

class TenantAssociationMap extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    position:     React.PropTypes.array.isRequired,
    zoom:         React.PropTypes.number.isRequired,
    associations: React.PropTypes.array.isRequired
  };

  render() {
    return (
      <div id="map-container">
        <Map center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          />
          {this.renderAssociations()}
        </Map>
        <Sidebar>
          <h1> wow! </h1>
          some stuff!
        </Sidebar>
      </div>
    );
  }

  renderAssociations () {
    var markers = [];
    this.props.associations.forEach( (association, index) => (
      markers.push(
        <Marker
          map={this.props.map}
          position={[association.Latitude, association.Longitude]}
          key={index}>
          <Popup>
            <TenantPopup association={association} />
          </Popup>
        </Marker>
      )));
    return markers
  }

  handleOnMarkerClick (index) {

}

function select(state) {
  return state;
}

export default connect(select)(TenantAssociationMap);
