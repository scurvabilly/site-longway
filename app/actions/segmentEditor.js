import * as types from '../constants/ActionTypes';

/**
 * Place a new marker on the map.
 *
 * @param {LatLng} pos The marker coordinates.
 */
export function addMarker(pos) {
  return { type: types.MARKER_PLACED, pos }
}

/**
 * Remove a marker from the map.
 *
 * @param {Number} index The marker index.
 */
export function removeMarker(index) {
  return { type: types.MARKER_REMOVED, index }
}
