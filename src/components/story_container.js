import React from "react";
import { render } from "react-dom";

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
        <div id="location-header">
          {this.renderPreviousButton()}
          <h2 id="address">
            {this.props.story.address}
          </h2>
          {this.renderNextButton()}
        </div>
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

  renderPreviousButton () {
    if ( this.props.focusedStory !== 0 ) {
      return (
        <i className="fa fa-chevron-left fa-3x"
          id="left-nav-button"
          onClick={this.props.setFocus.bind(this, this.props.focusedStory - 1)} />
      );
    } else {
      return ( <i className="fa fa-chevron-left fa-3x disabled" id="left-nav-button" /> );
    }
  }

  renderNextButton () {
    if ( this.props.focusedStory !== this.props.stories.length - 1) {
      return (
        <i className="fa fa-chevron-right fa-3x" 
          id="right-nav-button"
          onClick={this.props.setFocus.bind(this, this.props.focusedStory + 1)} />
      );
    } else {
      return ( <i className="fa fa-chevron-right fa-3x disabled" id="right-nav-button" /> );
    }
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
