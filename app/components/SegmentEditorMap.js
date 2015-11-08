import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { GoogleMap, Marker, Polyline } from 'react-google-maps';
import classNames from 'classnames';

// Remove unnecessary controls
const mapOptions = {
  disableDefaultUI: true,
  mapTypeControl: true,
  scaleControl: true,
  zoomControl: true
};

// Blue semi-opaque line
const lineOptions = {
  strokeColor: '#0066FF',
  strokeOpacity: 0.7,
  strokeWeight: 6
};

// Blue circle
const markerIcon = {
  path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
  fillColor: '#468CF4',
  fillOpacity: 1,
  anchor: new google.maps.Point(0,0),
  strokeWeight: 0,
  scale: 0.5
};

// The map upon which the user can draw out a favourite segment of their ride
class SegmentEditorMap extends Component {
  render() {
    const { defaultCenter, defaultZoom, markers, route, isRouting, addMarker, removeMarker } = this.props;
    return (
      <section className='fill-container'>
        <GoogleMap
          containerProps={{ className: 'fill-container' }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          options={mapOptions}
          onClick={e => addMarker(e.latLng)}>
          // Spinner
          <Loader
            className='spinner'
            loaded={!isRouting}
            length={0}
            lines={12}
            radius={10}
            opacity={0.2}
            trail={40} />

          // The route
          <Polyline path={route} options={lineOptions} />

          // The markers
          {
            markers.map((marker, i) => {
              return (
                <Marker
                  {...marker}
                  icon={markerIcon}
                  onRightclick={() => removeMarker(i)} />
              );
            })
          }
        </GoogleMap>
      </section>
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
