import React from "react";
import { render } from "react-dom";

class StoryMarkers extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    stories:    React.propTypes.object,
    map:        React.propTypes.object
  }

  render () {
    let markers = [];
    this.props.stories.forEach( (story, index) => (
      markers.push(
        <TenantMarker
          map={this.props.map}
          index={index}
          position={[story.Latitude, story.Longitude]}
          handleOnClick={i => this.props.dispatch(setFocusedStory(i))}
          key={index}>
        </TenantMarker>
      )));
    return markers;
  }
}

expor default StoryMarkers;
