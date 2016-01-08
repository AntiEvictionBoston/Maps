import React from "react";
import { render } from "react-dom";
import EvictionMap from "components/eviction_map";
import TenantAssociationMap from "components/tenant_association_map";
import eastBostonEvictions from "data/east_boston_evictions";
import exampleEvictionContent from "data/example_eviction_content";
import tenantAssociations from "data/east_boston_tenant_associations";

for (var eviction of eastBostonEvictions) {
  eviction.content = exampleEvictionContent;
}

let basicFakeDataMap =
  <EvictionMap
    position={[42.37, -71.03]}
    zoom={14}
    evictions={eastBostonEvictions} />

let tenantAssociationMap =
  <TenantAssociationMap
    position={[42.37, -71.03]}
    zoom={14}
    associations={tenantAssociations} />

render(basicFakeDataMap, document.getElementById('map'));

// render((
//   <EvictionMap
//     position={[42.37, -71.03]}
//     zoom={14}
//     evictions={eastBostonEvictions} />), document.getElementById('map'));
