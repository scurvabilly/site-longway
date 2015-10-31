import React, { Component, PropTypes } from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

// The map upon which the user can draw out a favourite segment of their ride
class SegmentEditorMap extends Component {
  render() {
    const { defaultCenter, defaultZoom, markers, addMarker, removeMarker } = this.props;
    return (
      <GoogleMap
        containerProps={{ id: 'map' }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        onClick={e => addMarker(e.latLng)}>
        {markers.map((marker, i) => {
          return (
            <Marker
              {...marker}
              onRightclick={() => removeMarker(i)} />
          );
        })}
      </GoogleMap>
    );
  }
};

SegmentEditorMap.propTypes = {
  defaultCenter: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  defaultZoom: PropTypes.number.isRequired,
  markers: PropTypes.array,
  addMarker: PropTypes.func.isRequired,
  removeMarker: PropTypes.func.isRequired
};

export default SegmentEditorMap;
