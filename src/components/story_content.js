import React from "react";
import { render } from "react-dom";

class StoryContent extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    story:    React.PropTypes.object.isRequired
  };

  render () {
  }
}

export default StoryContent;
