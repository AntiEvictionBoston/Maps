import React from "react";
import { render } from "react-dom";

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    foo:    React.PropTypes.object
  };

  render () {
    return (
      <div id="map-sidebar">
        <h1>Some content!</h1>
      </div>
    );
  }
}

export default SidebarContainer;
