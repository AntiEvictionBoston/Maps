import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
// import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import EvictionMap from "components/eviction_map";
import Sidebar from "components/sidebar";
import StoryMap from "components/story_map";
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

  // generate the routes for stories
  const SidebarWrapper = (story) => (
    <Sidebar story={story} />
  )
  const storyRoute = (story, index) => (
    <Route path={story.url} key={index} component={SidebarWrapper.bind(story)} />
  );
  const createStoryRoutes = (stories) => {
    let storyRoutes = [];
    stories.forEach((story, index) => storyRoutes.push(storyRoute(story, index)));
    return storyRoutes;
  };

  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={StoryMapWrapper}>
          <Route path="/:address" component={Sidebar} />
        </Route>
      </Router>
    </Provider>,
    domElement
  );
}
