import { expect } from 'chai';
import reducer from './';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal([]);
  });
  it('should handle NEW_TODO', () => {
    const newTodo = {
      type: 'NEW_TODO',
      text: 'do stuff',
      id: 0
    };
    const expectedState = [{
      id: 0,
      text: 'do stuff'
    }];
    expect(reducer([], newTodo)).to.deep.equal(expectedState);
  });
  it('should handle REMOVE_TODO', () => {
    const state = [{
      id: 0,
      text: 'Mop the floor.'
    },
    {
      id: 1,
      text: 'Clean the office.'
    }];
    const removeTodo = {
      type: 'REMOVE_TODO',
      id: 1
    };
    const expectedState = state.filter(todo => todo.id === 0);
    expect(reducer(state, removeTodo)).to.deep.equal(expectedState);
  });
})