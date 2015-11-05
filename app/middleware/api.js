import fetch from 'isomorphic-fetch';
import { encodeQueryString } from '../utils/url'

/**
 * Fetch the marked route.
 *
 * @param {LatLng[]} waypoints The route waypoints.
 */
export function fetchRoute(waypoints) {
  const query = encodeQueryString({
    key: '~APIKeyHere~',
    interpolate: true,
    path: waypoints.map(p => p.position.toUrlValue()).join('|')
  });

  // Perform the request
  return fetch('https://roads.googleapis.com/v1/snapToRoads?' + query).then(response => {
    return response.json();
  });
}
