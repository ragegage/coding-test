import { combineReducers } from 'redux';

import PlacesReducer from './places_reducer';

const RootReducer = combineReducers({
  places: PlacesReducer
});

export default RootReducer;