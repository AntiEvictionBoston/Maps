import React from "react";
import { hashHistory } from "react-router";
import { Marker } from "react-leaflet";
import * as actions from "../actions/actions";

class StoryMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    map:          React.PropTypes.object.isRequired,
    story:        React.PropTypes.object.isRequired,
    currentUrl:   React.PropTypes.string.isRequired,
    urlForStory:  React.PropTypes.string.isRequired
  };

  render() {
    return (
      <Marker
        onClick={this.handleClick}
        map={this.props.map}
        position={this.storyLocation()} />
    );
  }

  pickIcon = () => (
    this.isActive() ? this.activeIcon() : this.inactiveIcon()
  );

  isActive = () => (
    this.props.currentUrl === this.props.urlForStory
  );

  handleClick = () => hashHistory.push(this.props.url);

  storyLocation () {
    let {Latitude, Longitude} = this.props.story;
    return [Latitude, Longitude];
  }
}

export default StoryMarker;
