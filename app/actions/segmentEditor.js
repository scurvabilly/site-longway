import fetch from 'isomorphic-fetch';
import { encodeQueryString } from '../utils/url'
import * as types from '../constants/ActionTypes';

/**
 * Place a new marker on the map.
 *
 * @param {LatLng} position The marker coordinates.
 */
export function addMarker(position) {
  return dispatch => {
    dispatch({ type: types.PLACE_MARKER, position });
    dispatch(fetchRoute());
  };
}

/**
 * Remove a marker from the map.
 *
 * @param {Number} index The marker index.
 */
export function removeMarker(index) {
  return dispatch => {
    dispatch({ type: types.REMOVE_MARKER, index });
    dispatch(fetchRoute());
  };
}

/**
 * Fetch the marked route.
 */
export function fetchRoute() {
  return (dispatch, getState) => {
    // Construct the query string
    const query = encodeQueryString({
      key: '~APIKeyHere~',
      interpolate: true,
      path: getState().segmentEditor.markers.map(m => m.position.toUrlValue()).join('|')
    });

    // Dispatch a 'requesting' action
    // TODO

    // Perform the request
    return fetch('https://roads.googleapis.com/v1/snapToRoads?' + query).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
    }).catch(err => {
      console.log('Error: ' + err);
    });
  };
}
