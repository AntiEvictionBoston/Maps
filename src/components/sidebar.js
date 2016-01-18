import React from "react";
import { render } from "react-dom";
import { Sidebar } from "react-sidebar";

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    foo:    React.PropTypes.object
  };

  render () {
    return (
      <h1>Some content!</h1>
    );
  }
}

export default SidebarContainer;
