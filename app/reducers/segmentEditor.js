import * as types from '../constants/ActionTypes';

// Used if no state is provided to the reducer
const initialState = {
  defaultCenter: { lat: -33.903267, lng: 151.149638 }, // Home!
  defaultZoom: 13,
  markers: [],
};

// Top-level reducer
export default function segmentEditor(state = initialState, action) {
  switch (action.type) {
    case types.MARKER_PLACED:
      return Object.assign({}, state, {
        markers: [
          ...state.markers,
          {
            key: state.markers.length > 0 ? state.markers[state.markers.length - 1].key + 1 : 1,
            position: action.position
          }
        ]
      });
      return 

    case types.MARKER_REMOVED:
      return Object.assign({}, state, {
        markers: state.markers.filter((m, i) => i != action.index)
      });

    default:
      return state;
  }
};
