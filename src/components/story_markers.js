import React from "react";
import { render } from "react-dom";
import StoryMarker from "./story_marker";
import { Link } from "react-router";

class StoryMarkers extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    stories:          React.PropTypes.object,
    map:              React.PropTypes.object,
    handleOnClick:    React.PropTypes.func
  };

  render () {
    let markers = [];
    Object.keys(this.props.stories).forEach((k,i) => {
      let story = this.props.stories[k]
      markers.push(
        <StoryMarker
          map={this.props.map}
          story={story}
          url={k}
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
