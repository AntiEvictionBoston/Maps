import React from "react";
import { render } from "react-dom";
import StoryMarker from "./story_marker";

class StoryMarkers extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    url:            React.PropTypes.string,
    currentCenter:  React.PropTypes.array,
    stories:        React.PropTypes.object,
    map:            React.PropTypes.object,
    setCenter:      React.PropTypes.func
  };

  componentWillReceiveProps () {
    if ( ! this.centerMatches() ) {
      let { Latitude, Longitude } = this.focusedStory();
      this.props.map.setView([Latitude, Longitude]);
      this.props.setCenter([Latitude, Longitude]);
    }
  }

  focusedAddress () {
    let addresses = Object.keys(this.props.stories)
    return addresses.includes(this.props.address) ? this.props.address : addresses[0]
  }
  focusedStory = () => this.props.stories[this.focusedAddress()];

  centerMatches () {
    let [c1, c2] = this.props.currentCenter;
    let { Latitude, Longitude } = this.focusedStory();
    return c1 === Latitude && c2 === Longitude;
  }

  render () {
    let markers = [];
    Object.keys(this.props.stories).forEach((k,i) => {
      let story = this.props.stories[k]
      markers.push(
        <StoryMarker
          map={this.props.map}
          currentUrl={this.props.url}
          story={story}
          urlForStory={k}
          key={i}>
        </StoryMarker>
      );
    });
    return (
      <div id="markers">
        {markers}
      </div>);
  }
}

export default StoryMarkers;
