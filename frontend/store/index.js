import { createStore } from 'redux';
import RootReducer from '../reducers';
import masterMiddleware from '../middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    masterMiddleware
  )
);

export default configureStore;