import expect from 'expect';
import segmentEditor from '../../app/reducers/segmentEditor'
import * as types from '../../app/constants/ActionTypes'

describe('segment editor reducers', () => {

  it('should provide an initial state', () => {
    const initial = segmentEditor(undefined, {});
    expect(initial.defaultCenter.lat).toBeA('number');
    expect(initial.defaultCenter.lng).toBeA('number');
    expect(initial.defaultZoom).toBeA('number');
    expect(initial.markers.length).toEqual(0);
  })

  it('should handle MARKER_PLACED', () => {
    const placed = segmentEditor(undefined, { type: types.MARKER_PLACED, position: { lat: 100, lng: -1.5 } });
    expect(placed.markers.length).toEqual(1);
    expect(placed.markers[0].position).toEqual({ lat: 100, lng: -1.5 });
  })

  it('should handle MARKER_REMOVED', () => {
    const initial = {
      defaultCenter: { lat: 100, lng: -1.5 },
      defaultZoom: 1,
      markers: [
        { key: 1, position: { lat: 1, lng: 2 } },
        { key: 2, position: { lat: 3, lng: 4 } },
        { key: 3, position: { lat: 5, lng: 6 } }
      ]
    };

    const removedOne = segmentEditor(initial, { type: types.MARKER_REMOVED, index: 1 });
    expect(removedOne.markers.length).toEqual(2);
    expect(removedOne.markers[1]).toEqual({ key: 3, position: { lat: 5, lng: 6 } });
    const removedTwo = segmentEditor(removedOne, { type: types.MARKER_REMOVED, index: 1 });
    expect(removedTwo.markers.length).toEqual(1);
    expect(removedTwo.markers[0]).toEqual({ key: 1, position: { lat: 1, lng: 2 } });
    const removedAll = segmentEditor(removedTwo, { type: types.MARKER_REMOVED, index: 0 });
    expect(removedAll.markers.length).toEqual(0);
  })
});
