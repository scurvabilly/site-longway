import { createAction } from 'redux-actions';
import { CALL_API } from 'redux-api-middleware';
import * as types from '../constants/ActionTypes';
import { encodeQueryString } from '../utils/url';

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
    // Build the querystring
    const query = encodeQueryString({
      key: '~APIKeyHere~',
      interpolate: true,
      path: getState().segmentEditor.markers.map(p => p.position.toUrlValue()).join('|')
    });
     
    // Perform the API request. It will raise 'requested', followed by one of the latter two
    dispatch({
      [CALL_API]: {
        endpoint: 'https://roads.googleapis.com/v1/snapToRoads?' + query,
        method: 'GET',
        types: [ types.ROUTE_REQUESTED, types.ROUTE_SUCCEEDED, types.ROUTE_FAILED ]
      }
    });
  };
}
