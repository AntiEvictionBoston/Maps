import React from "react";

class EvictionPopup extends React.Component {
  static propTypes = {
    eviction: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <div className="eviction-popup">
        {this.props.eviction.location}
      </div>
    );
  }
}

export default EvictionPopup;
