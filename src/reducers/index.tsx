import connectionReducer from "./connections";

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  connection: connectionReducer
});


export type allReducers = ReturnType<typeof allReducers>;
export default allReducers;
