import React, { Component, PropTypes } from 'react';
import { GoogleMap, Marker, Polyline } from 'react-google-maps';
import classNames from 'classnames';

// The map upon which the user can draw out a favourite segment of their ride
class SegmentEditorMap extends Component {
  render() {
    const { defaultCenter, defaultZoom, markers, route, isRouting, addMarker, removeMarker } = this.props;
    const spinClass = classNames({
      'spinner': true,
      'hidden': !isRouting
    });
    return (
      <section className='fill-container'>
        <GoogleMap
          containerProps={{ className: 'fill-container' }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          onClick={e => addMarker(e.latLng)}>
          <Polyline
            path={route}
            strokeColor='#000000'
            strokeOpacity='1.0'
            strokeWeight='2' />
          {
            markers.map((marker, i) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={() => removeMarker(i)} />
              );
            })
          }
        </GoogleMap>
        <div className={spinClass} />
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
