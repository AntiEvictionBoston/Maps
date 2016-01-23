/*
 * actions for managing the redux store that backs the map
 * this stores all UI state and any data we want to show
 */

// action types
export const SET_FOCUSED_STORY = 'SET_FOCUSED_STORY';
export const SET_STORIES = 'SET_STORIES';

// action creators
export function setFocusedStory (story) {
  return { type: SET_FOCUSED_STORY, story: story };
}

export function setStories (stories) {
  return { type: SET_STORIES, stories: stories };
}
