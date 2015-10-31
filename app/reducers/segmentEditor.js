import * as types from '../constants/ActionTypes';

// Used if no state is provided to the reducer
const defaultState = {
  marker1: { lat: -33.903267, lng: 151.149638 }, // Home!
  marker2: { lat: -33.900000, lng: 151.140000 }
};

// Top-level reducer
export default function segmentEditor(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
