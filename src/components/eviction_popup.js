import React from "react";

class EvictionPopup extends React.Component {
  static propTypes = {
    eviction: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <div className="eviction-popup">
        <h3>
          {this.props.eviction.location}
        </h3>
        {this.renderImage()}
        {this.renderNarrative()}
      </div>
    );
  }

  renderImage () {
    return (
      <img
        src={this.props.eviction.content.imageURL}
        width="300px"
      />
    );
  }

  renderNarrative () {
    return (
      <p>
        {this.props.eviction.content.narrative}
      </p>
    );
  }
}

export default EvictionPopup;
