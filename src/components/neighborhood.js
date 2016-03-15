import React from "react";
import { render } from "react-dom";
import { Link } from "react-router";
import StoryMedia from "./story_media";

class Neighborhood extends React.Component {
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
      <div id="story-content">
        <StoryMedia {...this.props} />
        <div id="neighborhood-button">
          <button className="Neighborhood-next-button">
            <Link to={this.props.next}>
              View stories
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Neighborhood;
