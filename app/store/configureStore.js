import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index';

// Apply middleware to support lazy async actions
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// Creates the store with an optional initial state
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
};
