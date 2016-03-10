import React from "react";
import { render } from "react-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    console.log(this.props.params);
  }

  render () {
    return (
      <div id="map-sidebar">
        <StoryContainer
          focusedStory={focusedStory}
          story={this.props.story}
          stories={stories}
          setFocus={index => dispatch(setFocusedStory(index))} />

      </div>
    );
  }
}

export default Sidebar;
