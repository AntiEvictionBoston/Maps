import React from "react";
import { render } from "react-dom";

class StoryContainer extends React.Component {
  render () {
    return (
      <div className="tenant-story-popup">
        <h2>
          {this.props.story.address}
        </h2>
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
