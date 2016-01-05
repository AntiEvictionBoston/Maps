import React from "react";
import Lightbox from 'react-images';

class EvictionPhotos extends React.Component {
  static propTypes = {
    images: React.PropTypes.array.isRequired
  }

  constructor (options) {
    super(options);
  }

  render () {
    return (
      <Lightbox
        images={this.props.images}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}

export default EvictionPhotos;
