import { createStore } from "redux";
import updateMapState from "../reducers/reducers";


let mapStore = createStore(updateMapState);
