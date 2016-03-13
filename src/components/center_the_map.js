import React from "react";
import { render } from "react";
import { setCenter } from "../actions/actions";

class CenterTheMap extends React.Component {
  static propTypes = {
    url:            React.PropTypes.string,
    currentCenter:  React.PropTypes.array,
    currentZoom:    React.PropTypes.number,
    stories:        React.PropTypes.object,
    map:            React.PropTypes.object,
    dispatch:       React.PropTypes.func
  }

  componentWillMount = () => this.recenterMap();
  componentWillReceiveProps = () => this.recenterMap();

  recenterMap () {
    if ( ! this.centerMatches() ) {
      let { Latitude, Longitude } = this.focusedStory();
      this.props.map.panTo(
        [Latitude, Longitude],
        { animate: true }
      );
    }
  }

  focusedAddress () {
    let addresses = Object.keys(this.props.stories)
    return addresses.includes(this.props.url) ? this.props.url : addresses[0]
  }
  focusedStory = () => this.props.stories[this.focusedAddress()];

  centerMatches () {
    let [c1, c2] = this.props.currentCenter;
    let { Latitude, Longitude } = this.focusedStory();
    return c1 === Latitude && c2 === Longitude;
  }

  render () {
    return (<div id="center"></div>);
  }
}

export default CenterTheMap;
