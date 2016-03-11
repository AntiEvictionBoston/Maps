import React from "react";
import { render } from "react-dom";
import StoryContainerNav from "./story_container_nav";
import StoryContent from "./story_content";

class StoryContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    story:      React.PropTypes.object.isRequired,
    next:       React.PropTypes.string,
    prev:       React.PropTypes.string
  };

  render () {
    return (
      <div className="story-container">
        <StoryContainerNav {...this.props} />
        <div className="story-content-wrapper">
          <StoryContent {...this.props} />
        </div>
      </div>
    );
  }
}

export default StoryContainer;
