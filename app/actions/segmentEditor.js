import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

/**
 * Place a new marker on the map.
 *
 * @param {LatLng} position The marker coordinates.
 */
export function addMarker(position) {
  return dispatch => {
    // Temporary: Testing the thunk middleware by fetching a dummy URL prior to our action
    fetch('http://www.google.com/').then(response => {
      console.log('Success: ' + response);
    }).catch(err => {
      console.log('Error: ' + err);
    }).then(() => {
      dispatch({ type: types.MARKER_PLACED, position });
    });
  };
}

/**
 * Remove a marker from the map.
 *
 * @param {Number} index The marker index.
 */
export function removeMarker(index) {
  return { type: types.MARKER_REMOVED, index }
}
