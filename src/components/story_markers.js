import React from "react";
import { render } from "react-dom";
import StoryMarker from "./story_marker";

class StoryMarkers extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    stories:          React.PropTypes.array,
    map:              React.PropTypes.object,
    handleOnClick:    React.PropTypes.func
  };

  render () {
    let markers = [];
    this.props.stories.forEach( (story, index) => (
      markers.push(
        <StoryMarker
          map={this.props.map}
          position={[story.Latitude, story.Longitude]}
          handleOnClick={this.props.handleOnClick}
          story={story}
          key={index}>
        </StoryMarker>
      )));
    return (
      <div id="markers">
        {markers}
      </div>);
  }
}

export default StoryMarkers;
