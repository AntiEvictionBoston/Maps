import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import EvictionMap from "components/eviction_map";
import TenantAssociationMap from "components/tenant_association_map";
import eastBostonEvictions from "data/east_boston_evictions";
import exampleEvictionContent from "data/example_eviction_content";
import tenantAssociations from "data/east_boston_tenant_associations";
import mapStore from "./stores/map_store";
require("./stylesheets/main.scss");

let store = mapStore;

// check for different divs, render the appropriate map
if (document.getElementById('east_boston_tenant_association_map')) {
  let domElement = document.getElementById('east_boston_tenant_association_map');
  render(
    <Provider store={store}>
      <TenantAssociationMap
        position={[42.37, -71.03]}
        zoom={14}
        store={store}
        associations={tenantAssociations} />
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
