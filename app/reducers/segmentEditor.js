import * as types from '../constants/ActionTypes';

// Used if no state is provided to the reducer
const initialState = {
  defaultCenter: { lat: -33.903267, lng: 151.149638 }, // Home!
  defaultZoom: 13,
  markers: [],
  route: [],
  isRouting: false
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
            position: action.payload
          }
        ]
      });

    case types.MARKER_REMOVED:
      return Object.assign({}, state, {
        markers: state.markers.filter((m, i) => i != action.payload)
      });

    case types.ROUTE_REQUESTED:
      return Object.assign({}, state, { isRouting: true });

    case types.ROUTE_SUCCEEDED:
      return Object.assign({}, state, {
        isRouting: false,
        route: action.payload.snappedPoints.map(p => ({ lat: p.location.latitude, lng: p.location.longitude }))
      });

    case types.ROUTE_FAILED:
      return Object.assign({}, state, { isRouting: false });

    default:
      return state;
  }
};
