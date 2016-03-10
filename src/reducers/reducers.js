import * as actions from "../actions/actions";

const initialState = {
  focusedStory: undefined,
  stories: []
}

function updateMapState (state = initialState, action) {
  switch (action.type) {
    case actions.SET_FOCUSED_STORY:
      return Object.assign({}, state, {
        focusedStory: action.storyId
      });
    case actions.SET_STORIES:
      return Object.assign({}, state, {
        stories: action.stories
      });
    case actions.SET_ZOOM_LEVEL:
      return Object.assign({}, state, {
        zoomLevel: action.zoomLevel
      });
    case actions.SET_CENTER:
      return Object.assign({}, state, {
        center: action.coordinates
      });
    default:
      return state;
  }
}

export default updateMapState;
