import React from "react";
import { Marker } from "react-leaflet";
import * as actions from "../actions/actions";

class StoryMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    map:            React.PropTypes.object.isRequired,
    position:       React.PropTypes.array.isRequired,
    handleOnClick:  React.PropTypes.func.isRequired,
    story:          React.PropTypes.object.isRequired
  };

  render() {
    return (
      <Marker
        onClick={this.props.handleOnClick.bind(this, this.props.story)}
        map={this.props.map}
        position={this.props.position} />
    );
  }
}

export default StoryMarker;
