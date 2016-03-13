import React from "react";
import { render } from "react";

class CenterTheMap extends React.Component {
  static propTypes = {
    url:            React.PropTypes.string,
    currentCenter:  React.PropTypes.array,
    stories:        React.PropTypes.object,
    map:            React.PropTypes.object,
    setCenter:      React.PropTypes.func
  }

  componentWillReceiveProps () {
    if ( ! this.centerMatches() ) {
      let { Latitude, Longitude } = this.focusedStory();
      this.props.map.setView([Latitude, Longitude]);
      this.props.setCenter([Latitude, Longitude]);
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
