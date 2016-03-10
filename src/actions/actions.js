/*
 * actions for managing the redux store that backs the map
 * this stores all UI state and any data we want to show
 */

// action types
export const SET_FOCUSED_STORY = 'SET_FOCUSED_STORY';
export const SET_STORIES = 'SET_STORIES';
export const SET_ZOOM_LEVEL = 'SET_ZOOM_LEVEL';
export const SET_CENTER = 'SET_CENTER';

// action creators
export function setFocusedStory (storyId) {
  return { type: SET_FOCUSED_STORY, storyId: storyId };
}

export function setStories (stories) {
  return { type: SET_STORIES, stories: stories };
}

export function setZoomLevel (n) {
  return { type: SET_ZOOM_LEVEL, zoomLevel: n };
}

export function setCenter (coordinates) {
  return { type: SET_CENTER, coordinates: coordinates };
}
