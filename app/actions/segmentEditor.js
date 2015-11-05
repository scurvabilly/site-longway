import { fetchRoute } from '../middleware/api'
import * as types from '../constants/ActionTypes';

/**
 * Place a new marker on the map.
 *
 * @param {LatLng} position The marker coordinates.
 */
export function addMarker(position) {
  return dispatch => {
    dispatch({ type: types.MARKER_PLACED, position });
    dispatch(updateRoute());
  };
}

/**
 * Remove a marker from the map.
 *
 * @param {Number} index The marker index.
 */
export function removeMarker(index) {
  return dispatch => {
    dispatch({ type: types.MARKER_REMOVED, index });
    dispatch(updateRoute());
  };
}

/**
 * Updates the route using the placed markers as waypoints.
 */
function updateRoute() {
  return (dispatch, getState) => {
    // Notify that we're beginning the request
    dispatch({ type: types.ROUTE_REQUESTED });

    return fetchRoute(getState().segmentEditor.markers)
      .then(json => {
        console.log('Success: ' + json);
        dispatch({ type: types.ROUTE_RECEIVED, route: json });
      }).catch(err => {
        console.log('Err: ' + err);
        dispatch({ type: types.ROUTE_FAILED });
      });
  };
}
