import React from "react";
import { render } from "react-dom";
import StoryMedia from "./story_media";

class StoryContent extends React.Component {
  render () {
    return (
      <div id="story-content">
        Owner: {this.props.story.owner}
        <StoryMedia {...this.props} />
      </div>
    );
  }
}

export default StoryContent;
