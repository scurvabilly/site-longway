import { expect } from 'chai';
import segmentEditor from '../../app/reducers/segmentEditor'
import * as types from '../../app/constants/ActionTypes'

describe('segment editor reducers', () => {

  it('should provide an initial state', () => {
    const initial = segmentEditor(undefined, {});
    expect(initial.defaultCenter.lat).to.be.a('number');
    expect(initial.defaultCenter.lng).to.be.a('number');
    expect(initial.defaultZoom).to.be.a('number');
    expect(initial.markers.length).to.equal(0);
  })

  it('should handle PLACE_MARKER', () => {
    const placed = segmentEditor(undefined, { type: types.PLACE_MARKER, position: { lat: 100, lng: -1.5 } });
    expect(placed.markers.length).to.equal(1);
    expect(placed.markers[0].position).to.deep.equal({ lat: 100, lng: -1.5 });
  })

  it('should handle REMOVE_MARKER', () => {
    const initial = {
      defaultCenter: { lat: 100, lng: -1.5 },
      defaultZoom: 1,
      markers: [
        { key: 1, position: { lat: 1, lng: 2 } },
        { key: 2, position: { lat: 3, lng: 4 } },
        { key: 3, position: { lat: 5, lng: 6 } }
      ]
    };

    const removedOne = segmentEditor(initial, { type: types.REMOVE_MARKER, index: 1 });
    expect(removedOne.markers.length).to.equal(2);
    expect(removedOne.markers[1]).to.deep.equal({ key: 3, position: { lat: 5, lng: 6 } });
    const removedTwo = segmentEditor(removedOne, { type: types.REMOVE_MARKER, index: 1 });
    expect(removedTwo.markers.length).to.equal(1);
    expect(removedTwo.markers[0]).to.deep.equal({ key: 1, position: { lat: 1, lng: 2 } });
    const removedAll = segmentEditor(removedTwo, { type: types.REMOVE_MARKER, index: 0 });
    expect(removedAll.markers.length).to.equal(0);
  })
});
