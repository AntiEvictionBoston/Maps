import React from "react";
import { render } from "react-dom";
import EvictionMap from "components/eviction_map";
import eastBostonEvictions from "data/east_boston_evictions";
import exampleEvictionContent from "data/example_eviction_content";

for (var eviction of eastBostonEvictions) {
  eviction.content = exampleEvictionContent;
}

render((
  <EvictionMap
    position={[42.37, -71.03]}
    zoom={14}
    evictions={eastBostonEvictions} />), document.getElementById('map'));
