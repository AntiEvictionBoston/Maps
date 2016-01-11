import React from "react";

class TenantPopup extends React.Component {
  static propTypes = {
    association: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <div className="tenant-association-popup">
        <h2>
          {this.props.association.address}
        </h2>
        <h3>
          {this.props.association.owner}
        </h3>
        {this.renderImages()}
      </div>
    );
  }

  renderImages () {
    this.props.association.images.forEach((image, index) => {
      return (
        <img
          src={image}
          key={index} />
      );
    });
  }
}

export default TenantPopup;
