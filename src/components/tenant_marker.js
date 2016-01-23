import React from "react";
import { Marker } from "react-leaflet";

class StoryMarker extends React.Component {
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
        position={this.props.position} />
    );
  }
}

export default StoryMarker;
