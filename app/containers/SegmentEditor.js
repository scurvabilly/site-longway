import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SegmentEditorMap from '../components/SegmentEditorMap';
import SegmentEditorSidebar from '../components/SegmentEditorSidebar';
import * as segmentEditorActions from '../actions/segmentEditor';

// This page allows the user to draw out a favourite segment from a ride and rate it
class SegmentEditor extends Component {
  render() {
    const { defaultCenter, defaultZoom, markers, actions } = this.props;
    return (
      <main className='flex-container fill-container'>
        <SegmentEditorMap
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          markers={markers}
          addMarker={actions.addMarker}
          removeMarker={actions.removeMarker} />
        <SegmentEditorSidebar />
      </main>
    );
  }
};

SegmentEditor.propTypes = {
  defaultCenter: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  defaultZoom: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

// Maps the state to the component properties
function mapStateToProps(state) {
  return {
    defaultCenter: state.segmentEditor.defaultCenter,
    defaultZoom: state.segmentEditor.defaultZoom,
    markers: state.segmentEditor.markers
  }
}

// Maps the actions to the component properties
function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators(segmentEditorActions, dispatch)
  }
}

// Connect our component to the store
export default connect(
  mapStateToProps,
  mapActionsToProps
)(SegmentEditor);
