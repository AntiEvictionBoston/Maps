import React from "react";
import { Marker } from "react-leaflet";
import * as actions from "../actions/actions";

class TenantMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    map:            React.PropTypes.object.isRequired,
    index:          React.PropTypes.number.isRequired,
    position:       React.PropTypes.array.isRequired,
    handleOnClick:  React.PropTypes.func.isRequired
  };

  render() {
    return (
      <Marker
        onClick={this.props.handleOnClick(this.props.index)}
        map={this.props.map}
        positions={this.props.position} />
    );
  }
}

export default TenantMarker;
