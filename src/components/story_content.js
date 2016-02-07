import React from "react";
import { render } from "react-dom";
import RS from "react-sanfona";

class StoryContent extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    story:    React.PropTypes.object.isRequired
  };

  render () {
    return (
      <div id="story-content">
          <h3>
            Owner: {this.props.story.owner}
          </h3>
        <RS.Accordion>
          <RS.AccordionItem title="Images">
            {this.renderImages()}
          </RS.AccordionItem>
          <RS.AccordionItem title="Video">
            {this.renderVideo()}
          </RS.AccordionItem>
        </RS.Accordion>
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

export default StoryContent;
