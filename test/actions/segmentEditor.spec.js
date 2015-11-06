import expect from 'expect';
import * as types from '../../app/constants/ActionTypes'
import * as actions from '../../app/actions/segmentEditor'

// Fixture for initial state fixture
const initialState = {
  defaultCenter: { lat: 100, lng: -1.5 },
  defaultZoom: 1,
  markers: [
    { key: 1, position: { lat: 1, lng: 2 } },
    { key: 2, position: { lat: 3, lng: 4 } },
    { key: 3, position: { lat: 5, lng: 6 } }
  ]
};

describe('segment editor actions', () => {
  it('addMarker should create MARKER_PLACED action, then request a route', () => {
    const f = actions.addMarker({ lat: 123, lng: -321 })
    expect(f).toBeA('function');

    const dispatch = expect.createSpy();
    f(dispatch, () => initialState);
    expect(dispatch).toHaveBeenCalledWith({
      type: types.MARKER_PLACED,
      payload: { lat: 123, lng: -321 }
    }).toHaveBeenCalledWith({
      type: types.ROUTE_REQUESTED
    });
  })

  it('removeMarker should create MARKER_REMOVED action', () => {
    const f = actions.removeMarker(3);
    expect(f).toBeA('function');

    const dispatch = expect.createSpy();
    f(dispatch, () => initialState);
    expect(dispatch).toHaveBeenCalledWith({
      type: types.MARKER_REMOVED,
      payload: 3
    }).toHaveBeenCalledWith({
      type: types.ROUTE_REQUESTED
    });
  })
});
