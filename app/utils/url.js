/**
 * Encode a query string. Usage:
 *
 * @param {Object} data The data to encode.
 */
export function encodeQueryString(data) {
   const ret = [];
   for (var d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
   return ret.join("&");
}
