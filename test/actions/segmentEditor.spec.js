import { expect } from 'chai';
import * as types from '../../app/constants/ActionTypes'
import * as actions from '../../app/actions/segmentEditor'

describe('segment editor actions', () => {
  it('addMarker should create PLACE_MARKER action', () => {
    expect(
      actions.addMarker({ lat: 123, lng: -321 })
    ).to.deep.equal({
      type: types.PLACE_MARKER,
      position: { lat: 123, lng: -321 }
    })
  })

  it('removeMarker should create REMOVE_MARKER action', () => {
    expect(
      actions.removeMarker(3)
    ).to.deep.equal({
      type: types.REMOVE_MARKER,
      index: 3
    })
  })
});
