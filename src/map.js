import React from "react";
import { render } from "react-dom";
import EvictionMap from "components/eviction_map";

var eastBostonMap = {
  loc: [42.37, -71.03],
  zoom: 14
}
var map = new EvictionMap(eastBostonMap);
render( map.render(), document.getElementById('map'));
