import { createAction } from 'redux-actions';
import { fetchRoute } from '../middleware/api'
import * as types from '../constants/ActionTypes';

/**
 * Place a new marker on the map.
 *
 * @param {LatLng} position The marker coordinates.
 */
export function addMarker(position) {
  return dispatch => {
    dispatch(createAction(types.MARKER_PLACED)(position));
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
    dispatch(createAction(types.MARKER_REMOVED)(index));
    dispatch(updateRoute());
  };
}

/**
 * Updates the route using the placed markers as waypoints.
 */
function updateRoute() {
  return (dispatch, getState) => {
    // Notify that we're beginning the request
    dispatch(createAction(types.ROUTE_REQUESTED)());

    return fetchRoute(getState().segmentEditor.markers)
      .then(json => {
        console.log('Success: ' + json);
        dispatch(createAction(types.ROUTE_RECEIVED)(json));
      }).catch(err => {
        console.log('Err: ' + err);
        dispatch(createAction(types.ROUTE_FAILED)());
      });
  };
}
