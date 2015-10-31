import * as types from '../constants/ActionTypes';

// Used if no state is provided to the reducer
const initialState = {
  defaultCenter: { lat: -33.903267, lng: 151.149638 }, // Home!
  defaultZoom: 13,
  markers: [],
  lastMarkerKey: 0
};

// Top-level reducer
export default function segmentEditor(state = initialState, action) {
  switch (action.type) {
    case types.MARKER_PLACED:
      const newKey = state.lastMarkerKey + 1;
      return Object.assign({}, state, {
        lastMarkerKey: newKey,
        markers: [
          ...state.markers,
          {
            key: newKey,
            position: action.pos,
          }
        ]
      });
      return 

    case types.MARKER_REMOVED:
      return Object.assign({}, state, {
        markers: state.markers.filter(m => m != action.marker)
      });

    default:
      return state;
  }
};
