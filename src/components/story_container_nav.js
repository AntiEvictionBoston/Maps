import React from "react";
import { render } from "react-dom";
import { Link } from "react-router";

class StoryContainerNav extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id="location-header">
        {this.renderPreviousButton()}
        <h2 id="title">
          {this.props.story.title}
        </h2>
        {this.renderNextButton()}
      </div>
    );
  }

  renderPreviousButton = () => (
    this.props.prev ? this.activePreviousButton() : this.inactivePreviousButton()
  );
  activePreviousButton = () => (
    <Link to={this.props.prev}>
      <i className="fa fa-angle-left fa-3x" id="left-nav-button" />
    </Link>
  );
  inactivePreviousButton = () => (
    <i className="fa fa-angle-left fa-3x disabled" id="left-nav-button" />
  );

  renderNextButton = () => (
    this.props.next ? this.activeNextButton() : this.inactiveNextButton()
  );
  activeNextButton = () => (
    <Link to={this.props.next}>
      <i className="fa fa-angle-right fa-3x" id="right-nav-button" />
    </Link>
  );
  inactiveNextButton = () => (
    <i className="fa fa-angle-right fa-3x disabled" id="right-nav-button" />
  );
}

export default StoryContainerNav;
