import { expect } from 'chai';
import reducer from './visibilityFilter';

describe('visibility filter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal('SHOW_ALL');
  });
  it('should handle SET_VISIBILITY_FILTER', () => {
    const filter = 'SHOW_ACTIVE';
    const visibilityFilterAction = {
      filter,
      type: 'SET_VISIBILITY_FILTER',
    };
    const expectedState = 'SHOW_ACTIVE';
    expect(reducer([], visibilityFilterAction)).to.deep.equal(expectedState);
  });
})