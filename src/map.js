import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
// import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import EvictionMap from "components/eviction_map";
import StoryMap from "components/story_map";
import eastBostonEvictions from "data/east_boston_evictions";
import exampleEvictionContent from "./data/example_eviction_content";
import eastBostonStories from "./data/east_boston_stories";
import updateMapState from "./reducers/reducers";
import { setStories, setFocusedStory } from "./actions/actions";
require("./stylesheets/main.scss");

// check for different divs, render the appropriate map
if (document.getElementById('east_boston_tenant_association_map')) {
  let domElement = document.getElementById('east_boston_tenant_association_map');
  let store = createStore(updateMapState);

  // const mapApp = combineReducers({
  //   ...updateMapState,
  //   router: routerReducer
  // });

  // let store = createStore(mapApp);

  store.dispatch(setStories(eastBostonStories));
  store.dispatch(setFocusedStory(0));

  const StoryMapWrapper = () => (
    <StoryMap
      position={[42.37, -71.03]}
      zoom={14} 
    />
  );

  const createStoryRoutes = () => {
    let storyRoutes = [];
    store.getState().stories.forEach( (story, index) => {
      console.log(story);
      console.log(index);
      storyRoutes.push (
        <Route path={story.url}
          key={index}
          onEnter={() => store.dispatch(setFocusedStory(index))} />
      );
    });
    return storyRoutes;
  };

  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={StoryMapWrapper}>
          {createStoryRoutes()}
        </Route>
      </Router>
    </Provider>,
    domElement
  );
}
else if (document.getElementById('fake_data_map')) {
  for (var eviction of eastBostonEvictions) {
    eviction.content = exampleEvictionContent;
  }
  let basicFakeDataMap =
    <EvictionMap
      position={[42.37, -71.03]}
      zoom={14}
      evictions={eastBostonEvictions} />
}
