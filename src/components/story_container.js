import React from "react";
import { render } from "react-dom";

class StoryContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="address">
        {this.props.story["address"]}
      </div>
    );
  }
}

export default StoryContainer;
