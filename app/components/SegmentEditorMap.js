import React, { Component, PropTypes } from 'react';
import { GoogleMap } from 'react-google-maps';

// The map upon which the user can draw out a favourite segment of their ride
class SegmentEditorMap extends Component {
  render() {
    return (
      <GoogleMap
        containerProps={{ id: 'map' }}
        defaultCenter={this.props.defaultCenter}
        defaultZoom={this.props.defaultZoom}>
      </GoogleMap>
    );
  }
};

SegmentEditorMap.propTypes = {
  defaultCenter: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  defaultZoom: PropTypes.number.isRequired
};

export default SegmentEditorMap;
