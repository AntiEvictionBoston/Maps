import React from "react";
import { render } from "react-dom";
import StoryContainerNav from "./story_container_nav";

class StoryContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    focusedStory:   React.PropTypes.number.isRequired,
    stories:        React.PropTypes.array.isRequired,
    story:          React.PropTypes.object.isRequired,
    setFocus:       React.PropTypes.func.isRequired
  };

  render () {
    return (
      <div className="story-container">
        <StoryContainerNav
          address={this.props.story.address}
          focusedStory={this.props.focusedStory}
          lastStory={this.props.stories.length - 1}
          setFocus={this.props.setFocus} />
        <h3>
          Owner: {this.props.story.owner}
        </h3>
        <div>
          {this.renderImages()}
        </div>
        {this.renderVideo()}
      </div>
    );
  }

  renderImages () {
    var images = [];
    this.props.story.images.forEach((image, index) => (
      images.push (
        <img
          width="300px"
          src={image}
          key={index} />
      )));
    return images;
  }

  renderVideo () {
    if (this.props.story.video) {
      return (
        <a
          href={this.props.story.video}
          target="_blank" >
          A video about the struggle at this address.
        </a>
      );
    }
  }
}

export default StoryContainer;
