import React from "react";
import { connect } from "react-redux";
import { Map, Popup, TileLayer } from 'react-leaflet';
import Sidebar from "./sidebar";
import StoryMarkers from "../components/story_markers";
import Images from "../images/images";

class StoryMap extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    dispatch:       React.PropTypes.func.isRequired
  };

  componentWillMount () {
    Images.eagerLoad();
  }

  render() {
    const { dispatch, focusedStory, stories, zoomLevel, center  } = this.props;
    return (
      <div id="map-container">
        <Map center={center} zoom={zoomLevel}>
          <TileLayer
            url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          />
          <StoryMarkers
            stories={stories}
            url={this.props.params.address}
            map={this.props.map} />
        </Map>
        <Sidebar
          stories={stories}
          address={this.props.params.address} />
      </div>
    );
  }
}

function mapState (state) {
  return {
    stories:      state.stories,
    focusedStory: state.focusedStory,
    zoomLevel:    state.zoomLevel,
    center:       state.center
  }
}

export default connect(mapState)(StoryMap);
