import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SegmentEditorMap from '../components/SegmentEditorMap';
import SegmentEditorSidebar from '../components/SegmentEditorSidebar';
import * as segmentEditorActions from '../actions/segmentEditor';

// This page allows the user to draw out a favourite segment from a ride and rate it
class SegmentEditor extends Component {
  render() {
    const { defaultCenter, defaultZoom, actions } = this.props;
    return (
      <main className='flex-container fill-container'>
        <SegmentEditorMap
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          placeMarker={actions.placeMarker} />
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
    defaultCenter: state.segmentEditor.marker1,
    defaultZoom: 13
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
