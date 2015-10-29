import React, {Component} from 'react';
import {GoogleMap} from 'react-google-maps';

'use strict';

export default class HighlightEditor extends Component {
  static defaultProps = {
    defaultCenter: {lat: -33.903267, lng: 151.149638}, // Home!
    defaultZoom: 13
  }

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
