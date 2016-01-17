import React from "react";

class TenantPopup extends React.Component {
  static propTypes = {
    association: React.PropTypes.object.isRequired
  };

  render () {
    return (
      <div className="tenant-association-popup">
        <h2>
          {this.props.association.address}
        </h2>
        <h3>
          Owner: {this.props.association.owner}
        </h3>
        <div>
          {this.renderImages()}
        </div>
        {this.renderVideo()}
      </div>
    );
  }

  renderImages () {
    var images = [];
    this.props.association.images.forEach((image, index) => (
      images.push (
        <img
          width="300px"
          src={image}
          key={index} />
      )));
    return images;
  }

  renderVideo () {
    if (this.props.association.video) {
      return (
        <a
          href={this.props.association.video}
          target="_blank" >
          A video about the struggle at the this address.
        </a>
      );
    }
  }

}

export default TenantPopup;
