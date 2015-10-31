import { createStore } from 'redux';
import rootReducer from '../reducers/index';

// Create the store by applying an intitial state to the root reducer.
// Note: Initial state can be nil, as the root reducer can supply defaults
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
};
