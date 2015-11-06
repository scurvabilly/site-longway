import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index';

const middleware = [ thunk, apiMiddleware ];

// Apply middleware
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

// Creates the store with an optional initial state
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
};
