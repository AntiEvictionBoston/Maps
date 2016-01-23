import React from "react";
import { connect } from "react-redux";
import { Map, Popup, TileLayer } from 'react-leaflet';
import TenantMarker from "./tenant_marker";
import Sidebar from "./sidebar";
import { setFocusedStory, setStories } from "../actions/actions";
import tenantAssociations from "../data/east_boston_tenant_associations";

class TenantAssociationMap extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    position:     React.PropTypes.array.isRequired,
    zoom:         React.PropTypes.number.isRequired,
    stories:      React.PropTypes.array,
    focusedStory:  React.PropTypes.number,
    dispatch:     React.PropTypes.func.isRequired
  };

  componentDidMount () {
    this.props.dispatch(setStories(tenantAssociations));
    this.props.dispatch(setFocusedStory(0));
  }

  render() {
    const { dispatch, focusedStory, stories } = this.props;
    return (
      <div id="map-container">
        <Map center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          />
          {this.renderStories()}
        </Map>
        <Sidebar>
          <h1> wow! </h1>
          some stuff!
        </Sidebar>
      </div>
    );
  }

  renderStories () {
    var markers = [];
    this.props.stories.forEach( (story, index) => (
      markers.push(
        <TenantMarker
          map={this.props.map}
          index={index}
          position={[story.Latitude, story.Longitude]}
          handleOnClick={i => this.props.dispatch(setFocusedStory(i))}
          key={index}>
        </TenantMarker>
      )));
    return markers;
  }
}

function setState (state) {
  return {
    stories:      state.stories,
    focusedStory:  state.storyId
  }
}

export default connect(setState)(TenantAssociationMap);
