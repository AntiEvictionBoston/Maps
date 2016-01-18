import React from "react";
import { render } from "react-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="map-sidebar">
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;
