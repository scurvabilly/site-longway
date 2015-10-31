import expect from 'expect';
import * as types from '../../app/constants/ActionTypes'
import * as actions from '../../app/actions/segmentEditor'

describe('segment editor actions', () => {
  it('addMarker should create MARKER_PLACED action', () => {
    expect(
      actions.addMarker({ lat: 123, lng: -321 })
    ).toEqual({
      type: types.MARKER_PLACED,
      position: { lat: 123, lng: -321 }
    })
  })

  it('removeMarker should create MARKER_REMOVED action', () => {
    expect(
      actions.removeMarker(3)
    ).toEqual({
      type: types.MARKER_REMOVED,
      index: 3
    })
  })
});
