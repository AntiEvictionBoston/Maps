import * from "../actions/actions";

const initialState = {
  focusedStory: undefined,
  stories: []
}

function updateMapState (state = initialState, action) {
  switch (action.type) {
    case SET_FOCUSED_STORY:
      return Object.assign({}, state, {
        focusedStory: action.storyId;
      });
    case SET_STORIES:
      return Object.assign({}, state, {
        stories: action.stories;
      });
    default:
      return state;
  }
}
