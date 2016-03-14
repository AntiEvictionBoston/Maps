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

  componentWillMount () {
    this.setState({ showAllImages: false });
  }

  renderImages () {
    var images = [];
    this.props.story.images.forEach((image, index) => (
      images.push (
        <div
          className={"row media-row " + this.setHidingState(index)}
          key={index}>
          <img src={image} />
        </div>
      )
    ));
    if ( images.length > 1 ) {
      images.push(this.showMoreButton(images.length + 1));
    }
    return images;
  }

  showMoreButton (index) {
    return (
      <button key={index} onClick={this.toggleShowState}>{this.showButtonText()}</button>
    );
  }

  toggleShowState = () => this.setState({ showAllImages: !this.state.showAllImages });
  showButtonText = () => this.state.showAllImages ? "collapse" : "expand";

  setHidingState (index) {
    if ( this.state.showAllImages ) {
      return "";
    } else {
      return index === 0 ? "" : "hidden";
    }
  }

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
