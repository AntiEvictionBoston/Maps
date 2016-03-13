import React from "react";
import { render } from "react-dom";
import YouTube from "react-youtube";

class StoryMedia extends React.Component {
  render () {
    return (
      <div id="story-media">
        {this.renderImages()}
        {this.renderVideo()}
      </div>
    );
  }

  static defaultProps = {
    show: false
  };

  renderImages () {
    var images = [];
    this.props.story.images.forEach((image, index) => (
      images.push (
        <div
          className={"row media-row " + this.toggleMediaHiding(index)}
          key={index}>
          <img src={image} />
        </div>
      )));
      images.splice(1, 0, this.showMoreButton());
    return images;
  }

  showMoreButton () {
    return (
      <button onClick={() => this.setState({show: true})}>Show more!</button>
    );
  }


  toggleMediaHiding = (index) => index === 0 ? "" : "hidden";

  renderVideo () {
    if (this.props.story.video) {
      return (
        <div className="row media-row">
          <YouTube
            videoId={this.props.story.video}
            className="video-container" />
        </div>
      );
    }
  }

}

export default StoryMedia;
