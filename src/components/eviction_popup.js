import React from "react";

class EvictionPopup extends React.Component {
  static propTypes = {
    eviction: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <div className="eviction-popup">
        {this.renderImage()}
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
}

export default EvictionPopup;
