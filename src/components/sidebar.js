import React from "react";
import { render } from "react-dom";
import Sidebar from "react-sidebar";

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes {
  }

  render () {
    return (
      <Sidebar
        sidebar="test"
        open="true" >
        <h1>Some content!</h1>
      </Sidebar>
    );
  }
}

export default SidebarContainer;
