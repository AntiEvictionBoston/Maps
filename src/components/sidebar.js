import React from "react";
import { render } from "react-dom";

class Sidebar extends React.Component {
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
        Hey there! just filling this in.
      </div>
    );
  }
}

export default Sidebar;
