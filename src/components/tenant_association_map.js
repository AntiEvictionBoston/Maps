import React from "react";
import { connect } from "react-redux";
import { Map, Popup, TileLayer } from 'react-leaflet';
import Sidebar from "./sidebar";
import { setFocusedStory } from "../actions/actions";
import StoryMarkers from "../components/story_markers";

class TenantAssociationMap extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    position:       React.PropTypes.array.isRequired,
    zoom:           React.PropTypes.number.isRequired,
    dispatch:       React.PropTypes.func.isRequired
  };

  render() {
    const { dispatch, focusedStory, stories } = this.props;
    return (
      <div id="map-container">
        <Map center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          />
          <StoryMarkers
            stories={stories}
            map={this.props.map}
            handleOnClick={story =>
              dispatch(setFocusedStory(story))} />
        </Map>
        <Sidebar>
          <h1> wow! </h1>
          some stuff!
        </Sidebar>
      </div>
    );
  }
}

function mapState (state) {
  return {
    stories:      state.stories,
    focusedStory:  state.storyId
  }
}

export default connect(mapState)(TenantAssociationMap);
