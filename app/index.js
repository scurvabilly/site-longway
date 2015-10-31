import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SegmentEditor from './containers/SegmentEditor';
import configureStore from './store/configureStore';

// Bundle CSS
require('../css/app.css');

// Create the store, our immutable app state
const store = configureStore();

// Render the top-level component
ReactDOM.render(
  <Provider store={store}>
    <SegmentEditor />
  </Provider>,
  document.getElementById('SegmentEditor')
);
