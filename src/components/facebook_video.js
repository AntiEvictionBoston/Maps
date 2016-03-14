import React from "react";
import { render } from "react-dom";

class FacebookVideo extends React.Component {
  static propTypes = {
    videoUrl:  React.PropTypes.string.isRequired
  };

  render () {
    return (
      <div
        class="fb-video"
        data-href={this.props.videoUrl}
        data-allowfullscreen="true"
        data-width="auto">
      </div>
    );
  }
}

export default FacebookVideo;
