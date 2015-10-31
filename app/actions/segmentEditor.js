import * as types from '../constants/ActionTypes';

// Place a new marker on the map editor
export function placeMarker(pos) {
  return { type: types.MARKER_PLACED, pos }
}
