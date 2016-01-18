import * from "../actions/actions";

const initialState = {
  focusedStory: undefined,
  stories: []
}

function mapState (state = initialState, action) {
  switch (action.type) {
    case SET_FOCUSED_STORY:
      return Object.assign({}, state, {
        focusedStory: action.storyId;
      });
    default:
      return state;
  }
}
